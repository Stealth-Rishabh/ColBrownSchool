'use client'

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function SocialLinks() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/colbrownschool", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/ColDehradun", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/colbrownschooldehradun", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@ColBrownSchoolDehradun", label: "Youtube" },
  ]

  return (
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              whileHover={{ scale: 1.5, rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <Icon className="w-4 h-4 relative z-10 group-hover:text-white transition-colors" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

