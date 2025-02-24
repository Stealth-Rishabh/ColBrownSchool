"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import video from "../../assets/landing/events/video.webp";
import { useEffect, useRef, useState } from "react";
import LazyLoadYouTube from "../../components/LazyLoadYouTube";

export function VideoPreview() {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <motion.div
      className="w-full sm:px-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <LazyLoadYouTube videoId="ekL-m0WAtlY" title="School Events Video" />
    </motion.div>
  );
}
