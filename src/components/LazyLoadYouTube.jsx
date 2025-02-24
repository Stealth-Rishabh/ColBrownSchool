import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function LazyLoadYouTube({ videoId, title }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect once video starts playing
        }
      },
      { threshold: 0.6 } // Increased threshold for better user experience
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] sm:min-h-[400px] rounded-2xl overflow-hidden bg-gray-200"
    >
      {!isInView ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault is not available
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
            alt={`${title} Thumbnail`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
