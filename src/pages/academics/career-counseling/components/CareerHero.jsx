import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import img from "../../../../assets/academics/Career-Counselling.webp";
export default function CareerHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Parallax translateY={[-20, 20]} className="absolute inset-0">
        <img
          src={img}
          alt="Career Counseling"
          className="w-full h-full object-cover"
        />
      </Parallax>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Shape Your Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Expert Career Counseling for a Changing World
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300"
        >
          Explore Services
        </motion.button>
      </div>
    </section>
  );
}
