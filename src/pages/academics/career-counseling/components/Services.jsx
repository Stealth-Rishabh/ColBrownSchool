import { motion } from "framer-motion";
import { BookOpen, Compass, GraduationCap, PenTool } from "lucide-react";
import Heading from "../../../../components/Heading";

const services = [
  {
    title: "Subject Choice Guidance",
    icon: BookOpen,
    description: "Expert guidance to help you make informed decisions.",
  },
  {
    title: "Career Pathways",
    icon: Compass,
    description: "Explore various career paths and opportunities.",
  },
  {
    title: "University Applications",
    icon: GraduationCap,
    description: "Assist with university applications and admissions.",
  },
  {
    title: "Test Preparation",
    icon: PenTool,
    description: "Prepare for standardized tests like SAT, ACT, and more.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
      <div className="container mx-auto px-4">
        <Heading
          title="Our Services"
          titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-green-950"
          className="fadeIn lg:pb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, duration: 0.3 }}
                className="bg-gradient-to-br from-green-900 to-green-950 p-6 rounded-lg shadow-lg transition duration-300 text-gray-50 hover:scale-105 shadow-lg"
              >
                <div className="text-4xl mb-4">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
