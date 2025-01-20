"use client";
import img from "../../../../assets/landing/bg1.webp";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={img}
        alt="CBS Campus"
        className="z-0 w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-green-950 bg-opacity-50 z-"></div>
      <div className="relative z-20 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Where Legacy Shapes the Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl mb-8"
        >
          Explore the academic pathways that nurture excellence and discipline.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-950 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300"
        >
          View Academic Programs
        </motion.button>
      </div>
    </section>
  );
}
