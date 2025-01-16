"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import { cn } from "@/lib/utils";

export default function WordFadeIn({
  words,
  delay = 0.15,

  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },

  className
}) {
  const _words = words.split(" ");

  // Use the useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    rootMargin: "-5% 0px -20% 0px", // Adjust to trigger animation closer to the center of the viewport
    triggerOnce: false, // Re-animate every time the component enters the viewport
  });

  return (
    <motion.h1
      ref={ref} // Attach the ref to the motion.h1 element
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on inView state
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
