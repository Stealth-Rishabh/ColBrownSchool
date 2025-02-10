"use client";
import logo from "../../../../assets/landing/logo_col_brown.png";
import { motion } from "framer-motion";


export default function SchoolMottoAndCrest() {
  return (
    <section className="py-16 bg-white">
      <div className="container md:max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif text-green-950 mb-8"
        >
          School Motto and Crest
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-8"
        >
          <img
            src={logo}
            alt="CBS School Crest"
            width={200}
            height={200}
            sizes="(max-width: 768px) 150px, 200px"
            className="rounded p-2 shadow-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-serif text-green-950 mb-4"
        >
          MAGNA EST VERITAS
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-800 mb-8"
        >
          Truth is Great
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Lion", "Shamrock", "Torch"].map((element, index) => (
            <motion.div
              key={element}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="p-4 bg-slate-50 rounded-lg shadow-md"
            >
              <h3 className="text-lg md:text-xl font-semibold text-green-950 mb-2">
                {element}
              </h3>
              <p className="text-gray-800">
                {element === "Lion"
                  ? "Symbolizes courage and strength"
                  : element === "Shamrock"
                  ? "Represents our Irish heritage"
                  : "Signifies the light of knowledge"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
