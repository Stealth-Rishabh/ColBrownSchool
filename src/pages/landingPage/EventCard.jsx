"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center p-6 space-x-4 border rounded-lg cursor-pointer hover:shadow-lg hover:bg-gray-100"
    >
      <div className="flex flex-col items-center justify-center min-w-[59px] h-[59px] bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
        <span className="text-2xl font-bold text-yellow-600">
          {event.date.day}
        </span>
        <span className="text-sm text-yellow-500">{event.date.month}</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold transition-colors cursor-pointer group-hover:text-green-900 line-clamp-1 hover:underline hover:line-clamp-none">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{event.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
