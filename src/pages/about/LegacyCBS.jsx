import React, { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import dick from "../../assets/about/dickhouse.webp";
import logo from "../../assets/about/colbrown.webp";
import Container from "../../components/wrappers/Container";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";
import { Button } from "../../components/ui/button";
const LegacyCBS = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/legacy-cbs", label: "About" },
    { label: "Legacy CBS" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Legacy of CBS"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container>
        <AboutUs1 />
        <Feature />
      </Container>
    </section>
  );
};

export default LegacyCBS;

const AboutUs1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="ezy__about4 light py-14  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div>
            <h2 className="mb-0 text-4xl font-light leading-tight md:text-end md:text-6xl md:leading-tight">
              The School: A Legacy of Excellence Since 1926
            </h2>
          </div>
          <div className="my-6 lg:px-4 lg:my-0">
            <div
              className="min-h-[300px] md:h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
          </div>
          <div
            className={cn(
              "px-2 sm:pr-7 line-clamp-5 sm:line-clamp-none",
              isExpanded ? "line-clamp-none" : "line-clamp-5"
            )}
          >
            <p className="mb-0 text-base leading-7 text-justify opacity-70">
              Colonel Brown Cambridge School for Indian Boys is an English
              Medium Residential School and is open to all boys irrespective of
              caste, creed or social status. The school was founded in the year
              1926 by Col. and Mrs. W.Brown, for Indian boys.
            </p>
            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              Affiliated to the ICSE Board of Education, the school ranks high
              amongst educational institutions in India and is amongst the best
              ICSE Schools in Dehradun.
            </p>
            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              The expansive school campus is set amidst lush green lychee and
              mango orchards spanning across ninety bighas, in the peaceful and
              pristine environs of Dalanwala – a posh area of Dehradun city.
              Generations of boys have lived and passed through the imposing raj
              era buildings on the campus and have gone on to lead across
              various key fields in India and abroad. The school attracts
              students not only from all parts of India, but also from across
              the globe.
            </p>
          </div>

          <Button
            className="sm:hidden flex items-center gap-2 mt-4"
            
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show less" : "Learn more"}</span>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    img: img,
    number: "1926",
    title: "A Vision Takes Shape",
    description:
      "In pursuit of educational reform, Col. Brown collaborated with Dr. Balbir Singh, a distinguished educator sharing his passion for quality education. Despite their strong individual perspectives and brief partnership, they parted ways amicably to pursue their distinct educational visions, laying the groundwork for what would become a prestigious institution.",
  },
  {
    img: dick,
    number: "Dick House",
    title: "Our First Home",
    description:
      "In 1926, Col. William Brown and five pioneering students established the school at Dick House (No. 5 Dick Road). This historic property, formerly a thriving tea estate owned by Col. Dick, was situated in Dalanwala - a region renowned for its tea production. The area's rich agricultural heritage lives on through surviving tea gardens that dot the city's outskirts, offering glimpses into the school's storied beginnings.",
  },
  {
    img: logo,
    number: "MAGNA EST VERITAS",
    title: "Legacy of Excellence",
    description:
      "Our school's foundation rests on timeless values embodied in our motto 'MAGNA EST VERITAS' (Truth is Great). Our distinctive crest tells our story: the lion representing unwavering courage, the Irish shamrock honoring our roots, and the torch symbolizing the eternal flame of knowledge. These elements continue to inspire and guide each generation of students toward excellence.",
  },
];

const FeatureItem = ({ feature, index, isExpanded, onToggle }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative z-20 p-0 overflow-hidden">
        <img
          src={feature.img}
          alt={feature.title}
          className="object-cover w-full h-full min-h-[400px]  transition-all duration-300  grayscale hover:scale-110 hover:grayscale-0 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-slate-100 dark:bg-slate-800 h-full flex flex-col justify-center p-6 lg:p-12"
        )}
      >
        <div className="mb-6">
          <span className="block text-4xl leading-none">{feature.number}</span>
          <span className="block mt-1 text-base uppercase">
            {feature.title}
          </span>
        </div>
        <p
          className={`mb-6 text-justify lg:mb-12 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {feature.description}
        </p>
        <div>
          <button
            onClick={onToggle}
            className="flex items-center text-sm font-bold uppercase bg-transparent border-0 hover:text-green-900 group"
          >
            {isExpanded ? "Show less" : "Learn more"}{" "}
            <ArrowRight
              className={cn(
                "ml-2 group-hover:translate-x-1 transition-all duration-300",
                isExpanded ? "group-hover:-rotate-90" : "group-hover:rotate-90"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Feature = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto">
        {features.map((feature, i) => (
          <FeatureItem
            feature={feature}
            index={i + 1}
            key={i}
            isExpanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
};
