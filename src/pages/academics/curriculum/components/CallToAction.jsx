"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-950 text-white">
      <div className="container md:max-w-7xl mx-auto px-4 md:px-8  text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif mb-8"
        >
          Join the CBS Legacy
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap flex-col sm:flex-row justify-center gap-8 sm:gap-4"
        >
          <Link
            to="/admissions/registration"
            onClick={() => window.scrollTo(0, 0)}
            passHref
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-950 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg w-full sm:w-auto hover:bg-opacity-90 transition duration-300"
            >
              Register Now
            </motion.a>
          </Link>
          <a
            href="https://col-brown-school.vercel.app/assets/calendar-january-may-2024-Dre_knEo.pdf"
            target="_blank"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-50 text-green-950 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg w-full sm:w-auto hover:bg-opacity-90 transition duration-300"
            >
              View Calendar
            </motion.a>
          </a>
          <Link
            to="/admissions/fee-details"
            onClick={() => window.scrollTo(0, 0)}
            passHref
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-50 text-green-950 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg w-full sm:w-auto hover:bg-opacity-90 transition duration-300"
            >
              Fee Structure
            </motion.a>
          </Link>
          <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-50 text-green-950 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg w-full sm:w-auto hover:bg-opacity-90 transition duration-300"
            >
              Contact Us
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
