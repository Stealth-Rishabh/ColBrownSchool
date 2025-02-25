import React, { useCallback, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, QuoteIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-5 -left-10 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#3B823A"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-5 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#B91C1C"
        fillOpacity="0.2"
      />
    </svg>
  );
}

const Testimonials = ({testimonialList, title, subtitle}) => {
  
  const [index, setIndex] = useState(0);

  

  // const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // const getVisibleTestimonials = () => {
  //   const testimonials = [];
  //   for (let i = 0; i < 3; i++) {
  //     const testimonialIndex = (index + i) % 6;
  //     testimonials.push(testimonialList[testimonialIndex]);
  //   }
  //   return testimonials;
  // };

  return (
    <section className="ezy__testimonial23 light py-6  sm:py-14  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      {/* <ShapeOne /> */}
      {/* <ShapeTwo /> */}

      <div className="sm:container md:max-w-6xl lg:max-w-7xl  px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-start justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="sm:text-4xl text-3xl text-center sm:text-left font-bold leading-normal">
              {title || "Testimonials"}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] opacity-80 text-center sm:text-left">
              {subtitle || "Our students' parents have shared their experiences, emphasizing the importance of both paid and unpaid roles in shaping their children's careers."}
            </p>
          </div>
        </div>

        <TestimonialCarousel testimonials={testimonialList} />
      </div>
    </section>
  );
};
export default Testimonials;

function TestimonialCard({ testimonial, isActive }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`h-min overflow-hidden bg-white transition-shadow duration-300 ${
          isActive ? "shadow-lg" : "shadow-md"
        }`}
      >
        <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between relative">
          <QuoteIcon className="absolute top-4 left-4 text-gray-300 w-8 h-8 opacity-50" />
          <Avatar className="w-48 h-fit mb-4 ring-4 ring-white">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            {/* <AvatarFallback>{testimonial?.name?.charAt(0)}</AvatarFallback> */}
          </Avatar>
          <div className="relative mt-5">
            <div
              className={`mb-4 text-base font-normal relative z-10 overflow-hidden ${
                !isExpanded ? "line-clamp-6" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: testimonial.content }}
            />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-500/80 font-medium"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
          <footer className="mt-auto">
            <cite className="not-italic font-semibold text-lg">
              {testimonial.name}
            </cite>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}


const OPTIONS = {
  align: "center",
  containScroll: false,
  loop: true,
};

function TestimonialCarousel({testimonials}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Modified auto-sliding effect with hover pause
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, isHovered]);

  return (
    <div className="relative px-4 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-white -z-10" />
      <div 
        className="embla overflow-hidden" 
        ref={emblaRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="embla__container flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === selectedIndex}
                
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute  -left-0 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute  right-4 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "w-3 h-3 rounded-full p-0 border-2 border-gray-400 transition-all duration-300",
              selectedIndex === index
                ? "bg-primary border-primary scale-110"
                : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(index);
                setSelectedIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
