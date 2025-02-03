"use client"

import { motion } from "framer-motion"

export default function AcademicExcellence() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-green-950 mb-4">Academic Excellence</h2>
            <p className="text-gray-800 mb-4">
              CBS is proud of its ICSE affiliation and ranks among the top institutions in India.
            </p>
            <p className="text-gray-800">
              Our academic structure is designed to nurture students at every stage of their development:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold text-green-950 mb-4">Academic Structure</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-900 rounded-full mr-2"></span>
                  <span>Junior School: Classes IV to VIII</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-900 rounded-full mr-2"></span>
                  <span>Senior School: Classes IX to XII</span>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

