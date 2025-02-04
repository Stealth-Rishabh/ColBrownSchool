"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import thirties from "../../assets/landing/nineteen-thirties-2.webp";
import fifties from "../../assets/landing/fifty-sixties-2.webp";
import sixties from "../../assets/landing/1960.webp";
import seventies from "../../assets/landing/1973-1974.webp";
import nineties from "../../assets/landing/1990.webp";

const timelineData = {
  1920: {
    year: "1926",
    title: "A Journey Through Time",
    description:
      "Col Brown has been a pivotal institution in education for a century. Join us in honoring our rich history and the significant events that have shaped our community.",
    image: thirties,
  },
  1950: {
    year: "1950",
    title: "Era of Innovation",
    description:
      "The 1950s ushered in a transformative phase for our school, marked by growth and advancements that set the stage for future success.",
    image: fifties,
  },
  1960: {
    year: "1960",
    title: "Embracing Change",
    description:
      "The 1960s brought a wave of modernization, introducing innovative teaching methods and enhancing our facilities to better serve our students.",
    image: sixties,
  },
  1970: {
    year: "1970",
    title: "Expanding Horizons",
    description:
      "During the 1970s, we broadened our influence through international collaborations and diverse educational initiatives.",
    image: seventies,
  },
  1990: {
    year: "1990",
    title: "Global Outreach",
    description:
      "The 1990s marked a significant expansion of our global partnerships, enriching our educational programs and community engagement.",
    image: nineties,
  },
  2000: {
    year: "2000",
    title: "A New Millennium",
    description:
      "Entering the 2000s, we continued to strengthen our global connections and enhance our educational offerings for a diverse student body.",
    image:
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2022/11/teacher-day-2019-1.jpg",
  },
};

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1920);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const years = Object.keys(timelineData).map(Number);

  useEffect(() => {
    if (isInView && !isHovered) {
      intervalRef.current = setInterval(() => {
        setSelectedYear((currentYear) => {
          const currentIndex = years.indexOf(currentYear);
          const nextIndex = (currentIndex + 1) % years.length;
          return years[nextIndex];
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isInView, isHovered]);

  const handleTimelineClick = (year) => {
    setSelectedYear(Number(year));
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 3000); // Resume autoplay after 3 seconds
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-black via-gray-900/90 to-black"
    >
      <div className="max-w-6xl mx-auto px-6 sm:py-20 py-8 pb-16">
        <div className="grid md:grid-cols-2 sm:gap-12 gap-8 mb-16">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-bold text-white">
              {timelineData[selectedYear].year}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              {timelineData[selectedYear].title}
            </h2>
            <p className="text-gray-300 text-lg">
              {timelineData[selectedYear].description}
            </p>
            {/* <div className="flex items-center gap-4">
              <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                Explore
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </motion.div>

          <motion.div
            key={`image-${selectedYear}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square bg-gray-800"
          >
            <img
              src={timelineData[selectedYear].image}
              alt={`Historical image from ${selectedYear}`}
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </div>

        <div className="relative">
          <div className="h-px bg-gray-600 absolute top-1/2 left-0 right-0 -translate-y-1/2" />
          <div className="flex justify-between relative">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => handleTimelineClick(year)}
                className="relative group"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    selectedYear === Number(year)
                      ? "bg-white border-white"
                      : "bg-gray-800 border-gray-400 group-hover:border-white"
                  }`}
                />
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm transition-colors ${
                    selectedYear === Number(year)
                      ? "text-white font-medium"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {year + "s"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
