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
import ravi from "../../assets/landing/ravi_tyagi.jpg";
import abhinav from "../../assets/landing/abhinav.jpg";
import aayan from "../../assets/landing/aryan.jpg";
import agrims from "../../assets/landing/Agrims.jpg";
import ayan from "../../assets/landing/ayan.jpg";
import manal from "../../assets/landing/manal.jpg";

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

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const testimonialIndex = (index + i) % 6;
      testimonials.push(testimonialList[testimonialIndex]);
    }
    return testimonials;
  };

  return (
    <section className="ezy__testimonial23 light py-6  sm:py-14  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <ShapeOne />
      <ShapeTwo />

      <div className="sm:container md:max-w-6xl lg:max-w-7xl  px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-start justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="sm:text-4xl text-3xl text-center sm:text-left font-bold leading-normal">
              Parent Testimonials
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] opacity-80 text-center sm:text-left">
              Our students have shared their experiences, emphasizing the
              importance of both paid and unpaid roles in shaping their careers.
            </p>
          </div>
        </div>

        <TestimonialCarousel />
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
          <Avatar className="w-48 h-48 mb-4 ring-4 ring-white">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="relative">
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

const testimonials = [
  {
    id: 1,
    name: "Lt Col Ravi Tyagi",
    role: "Parent of Yug Tyagi of class 7th",
    content: `<p><b>Discipline :</b>&nbsp;The foundation of a well groomed personality. And CBS makes sure that discipline is never lost sight of<br><b>Academics:&nbsp;</b>Excellent and experienced staff sweating it out day and night ensuring excellence. The school teaches how’s and why’s of concepts instead of just what’s<br><b>Sports and Adventure:</b>&nbsp;Endless facilities (indoors/ outdoors) are available at the school to master any sport of his choice under the best instructors. And what follows is health for life<br><b>Extra Curriculars:</b>&nbsp;All facets of personality of a child are groomed be it music, arts or drama the horizon of growth is unlimited<br><b>Boarding:</b>&nbsp;The best boarding school of the country providing a safe habitat to kids under experienced house masters/ matrons</p>`,
    avatar: ravi,
  },
  {
    id: 2,
    name: "Rishikesh Kumar Singh",
    role: "Parent of Abhinav & Vaibhav",
    content: `<ol style="list-style-type: decimal; padding-left: 1.5em;"><li>“Our child’s time at Colonel Brown has been truly transformative. Thank you for providing a nurturing environment that fosters growth, learning, and friendship.”</li><li>“We’re grateful for the dedication and care shown by the teachers, house parents, and staff. You’ve become like a second family to our child.”</li><li>“The values, discipline, and education imparted at Colonel Brown have shaped our child into a confident and responsible individual. We can’t thank you enough.”</li><li>“The academic excellence and extracurricular opportunities at Colonel Brown have helped our child discover their passions and talents.”</li><li>“The school’s emphasis on Indian culture and values has instilled a sense of pride and responsibility in our child.”</li><li>“The boarding facilities and care provided by the house parents have made our child feel safe and supported away from home.”</li><li>“We would like to express our sincere appreciation to the management, teachers, and staff of Colonel Brown for their tireless efforts in providing quality education and care to our child.”</li><li>“Please accept our heartfelt gratitude for the opportunities and experiences provided by Colonel Brown. Our child’s time at the school has been truly enriching.”</li></ol>`,
    avatar: abhinav,
  },
  {
    id: 3,
    // name: "Carol Williams",
    role: "Parent of Aayan class 11th and Sufyan class 9th",
    content: `<p><b>Discipline :</b>&nbsp;The foundation of a well groomed personality. And CBS makes sure that discipline is never lost sight of<br><b>Academics:&nbsp;</b>Excellent and experienced staff sweating it out day and night ensuring excellence. The school teaches how’s and why’s of concepts instead of just what’s<br><b>Sports and Adventure:</b>&nbsp;Endless facilities (indoors/ outdoors) are available at the school to master any sport of his choice under the best instructors. And what follows is health for life<br><b>Extra Curriculars:</b>&nbsp;All facets of personality of a child are groomed be it music, arts or drama the horizon of growth is unlimited<br><b>Boarding:</b>&nbsp;The best boarding school of the country providing a safe habitat to kids under experienced house masters/ matrons</p>`,
    avatar: aayan,
  },
  {
    id: 4,
    // name: "David Brown",
    role: "Parent of Agrim Class 9th",
    content: `Col. Brown School in my point of view is a place where both academics and personal
development are valued equally. For my son it has been a place where his personality
has been nurtured.`,
    avatar: agrims,
  },
  {
    id: 5,
    // name: "Eva Martinez",
    role: "Parent of Ayan Nasir class 12th",
    content: `<p><b>Caring Teachers:</b>&nbsp;“I’m happy with how the teachers at your school care about you and always make sure you understand what you’re learning.”<br><b>Good Learning Program:&nbsp;</b>“Your school has a great program that helps you learn important subjects and think critically. It prepares you for the future.”<br><b>Fun Activities:</b>&nbsp;“I like how your school offers so many fun activities outside of class, like sports and clubs. It’s good that you can try new things.”<br><b>Supportive Environment:</b>&nbsp;“Your school has a friendly and supportive atmosphere where everyone feels safe to learn and share their ideas.”<br><b>Great School Community:</b>&nbsp;“I’m proud of how your school has a strong sense of community, where everyone helps and respects each other.”</p>`,
    avatar: ayan,
  },
  {
    id: 6,
    // name: "Eva Martinez",
    role: "Parent of Manal Nautiyal class 9th",
    content: `<p>The nurturing environment, dedicated teachers, and well-established facilities at Col. Brown School<br>help students grow both academically and personally. As a boarding school, it offers a true home away<br>from home, fostering discipline, values, and overall development. Life on campus provides countless<br>opportunities for students to explore their interests and refine their talents. Whether it’s academics,<br>sports, or hobbies, children are guided to excel in every field. I couldn’t ask for a better school for my<br>child’s development.</p>`,
    avatar: manal,
  },
];

const OPTIONS = {
  align: "center",
  containScroll: false,
  loop: true,
};

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  return (
    <div className="relative px-4 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-white -z-10" />
      <div className="embla overflow-hidden" ref={emblaRef}>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
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
