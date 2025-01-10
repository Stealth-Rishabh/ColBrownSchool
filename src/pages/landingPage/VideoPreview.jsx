'use client'

import { motion } from "framer-motion"
import { Play } from 'lucide-react'
import video from "../../assets/landing/events/video.png"
export function VideoPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative rounded-xl overflow-hidden group cursor-pointer"
    >
      <img
        src={video}
        alt="School aerial view"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Play className="w-10 h-10 text-red-600 ml-1" />
        </div>
      </motion.div>
    </motion.div>
  )
}

