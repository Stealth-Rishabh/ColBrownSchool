"use client";

import { motion } from "framer-motion";
import img from "../../../../assets/landing/bg1.webp";
export default function CampusAndLocation() {
  return (
    <section className="py-16 bg-white">
      <div className="container md:max-w-7xl mx-auto px-4 md:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold font-serif text-green-950 mb-8 text-center"
        >
          Campus and Location
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <img
              src={img}
              alt="CBS Campus"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 600px"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-8 text-lg"
          >
            <p className="text-gray-800 mb-4">
              Nestled in the prestigious Dalanwala area, CBS boasts a lush green
              campus with historic orchards, providing an ideal environment for
              learning and growth.
            </p>
            <p className="text-gray-800 mb-4">
              Our campus is a testament to the region's rich heritage, with
              remnants of the famous tea gardens that once flourished here.
            </p>
            {/* <div className="mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-green-950 mb-4">
                Key Landmarks
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-900 rounded-full mr-2"></span>
                  <span>Historic Raj-era Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-900 rounded-full mr-2"></span>
                  <span>Sprawling Sports Fields</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-900 rounded-full mr-2"></span>
                  <span>State-of-the-art Science Laboratories</span>
                </li>
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
