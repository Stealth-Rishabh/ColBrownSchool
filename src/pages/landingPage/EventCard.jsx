'use client'

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"

export function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <div className="p-6 flex gap-4">
          <div className="flex flex-col items-center justify-center min-w-[59px] h-[59px] bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
            <span className="text-2xl font-bold text-yellow-600">{event.date.day}</span>
            <span className="text-sm text-yellow-500">{event.date.month}</span>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg group-hover:text-green-900 transition-colors line-clamp-1 cursor-pointer">
              {event.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

