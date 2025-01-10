"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function NewsCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-3 grid rounded-lg hover:bg-gray-100 cursor-pointer"
    >
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
        <div className="p-4 flex gap-4">
          <img
            src={item.image}
            alt=""
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{item.date}</span>
            </div>
            <h3 className="font-medium group-hover:text-green-900 transition-colors line-clamp-2">
              {item.title}
            </h3>
            <span className="inline-block px-2 py-1 text-xs bg-green-50 text-green-600 rounded">
              {item.type}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
