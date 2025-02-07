import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export default function EducationalJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  const steps = [
    {
      step: 1,
      title: "Enroll",
      description: "Join our prestigious institution",
      icon: "🎓",
      date: "Step 1",
    },
    {
      step: 2,
      title: "Learn",
      description: "Engage in our comprehensive curriculum",
      icon: "📚",
      date: "Step 2",
    },
    {
      step: 3,
      title: "Grow",
      description: "Develop your skills and character",
      icon: "🌱",
      date: "Step 3",
    },
    {
      step: 4,
      title: "Excel",
      description: "Achieve academic and personal success",
      icon: "⭐",
      date: "Step 4",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="px-4 py-16 sm:py-24 bg-gradient-to-b from-white to-green-50"
    >
      <motion.div style={{ opacity, scale }} className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-green-900 mb-16">
          Your Educational Journey
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-600"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-0 w-9 h-9 rounded-full bg-green-950 border-4 border-white shadow flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2 + 0.5,
                }}
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="ml-16 bg-white p-6 rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div
                  className="flex items-center mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-green-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 + 0.9 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  className="mt-4 text-4xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2 + 1,
                  }}
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              {/* Connecting Line to Next Item */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-4 w-1 bg-gradient-to-b from-green-400 to-green-200"
                  style={{
                    top: "36px",
                    bottom: "-48px",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
