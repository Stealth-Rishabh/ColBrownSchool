'use client'

import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

export default function LinkSection({ title, links, delay = 0 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-white text-lg font-semibold relative"
        variants={itemVariants}
      >
        <motion.span
          className="absolute -left-4 top-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.5 }}
        />
        {title}
      </motion.h3>
      <motion.ul className="space-y-3" variants={containerVariants}>
        {links.map((link, index) => (
          <motion.li 
            key={link.name}
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors hover:underline underline-offset-4 inline-flex items-center group"
            >
              <motion.span
                className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"
                initial={false}
              />
              {link.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

