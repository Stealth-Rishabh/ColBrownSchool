import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from '../../assets/about/colonel-william-brown.jpg'
const VisionaryCouple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="visionary-couple" ref={ref} className="py-16 bg-yellow-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold mb-4">The Visionary Leader</h2>
            <p className="mb-4">
              Colonel William Brown embarked on a remarkable
              journey in 1926, founding the Colonel Brown Cambridge School.
              Their vision of providing quality education and shaping young
              minds has left an indelible mark on generations of students.
            </p>
            <p className="mb-4">
              Their commitment to excellence and equality in education set the
              foundation for what CBS represents today. The Browns believed in
              nurturing not just academic prowess, but also character and
              values.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="text-center">
              <img
                src={img1}
                alt="Colonel William Brown"
                className="w-96 h-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 font-semibold text-muted-foreground">Colonel William Brown</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-2xl font-handwriting text-gray-700">
            "Truth is Great – A foundation for generations."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionaryCouple;
