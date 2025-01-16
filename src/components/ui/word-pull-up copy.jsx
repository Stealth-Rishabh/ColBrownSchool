"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation for each word
        delayChildren: 0.3,   // Delay before starting to stagger the words
      },
    },
  },

  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },

  className,
}) {
  // Detect when the component is near the center of the viewport
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    rootMargin: "-5% 0px -20% 0px", // Start animation when component is 20% above the center
    triggerOnce: false, // Animate every time the component enters the viewport
  });

  return (
    <motion.h1
      ref={ref} // Attach ref to the element to track its visibility
      variants={wrapperFramerProps}
      initial="hidden"
      animate={inView ? "show" : "hidden"} // Animate only when the component is in view
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps} // Animate each word separately
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
