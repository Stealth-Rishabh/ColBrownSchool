import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/about/Achievement-Banner.webp";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";

import dick from "../../assets/about/dickhouse.webp";
import logo from "../../assets/about/colbrown.webp";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";
import { Button } from "../../components/ui/button";
const Achievements = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/achievements", label: "About" },
    { label: "Achievements" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Achievements"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-200">
        <Container>
          <Heading
            title="Our Achievements"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="A 98-year legacy of excellence in academics, sports, arts and community service, recognized nationally and internationally."
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto"
          />
          <Feature />
        </Container>
      </section>
    </section>
  );
};

export default Achievements;

const features = [
  {
    img: "https://cbs.edustoke.com/wp-content/uploads/2024/12/572x400_35.jpg",
    number: "Academic Excellence",
    title: "Consistently Outstanding Results",
    description:
      "Our students consistently achieve outstanding results in ICSE board examinations, with several top-ranked students each year. This recognition reflects our unwavering focus on academic rigor and a nurturing environment.",
  },
  {
    img: "https://cbs.edustoke.com/wp-content/uploads/2024/12/572x400_40.jpg",
    number: "Sports Achievements",
    title: "Champions in Sports",
    description:
      "Col Brown Cambridge School is renowned for its strength in sports, particularly in hockey and athletics. Our teams have won multiple All India Championships and inter-school tournaments. Sportsmanship, discipline, and teamwork are cornerstones of our sports culture, and our athletes make us proud with each win.",
  },
  {
    img: "https://cbs.edustoke.com/wp-content/uploads/2024/12/572x400_37.jpg",
    number: "Cultural & Co-Curricular Achievements",
    title: "Excellence Beyond Academics",
    description:
      "Our students shine not only in academics and sports but also in cultural and co-curricular events. The school has won awards in debating, theatre, music, and art competitions, showcasing the diverse talents of our students. These accolades highlight our dedication to nurturing creativity and self-expression.",
  },
  {
    img: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_11.jpg",
    number: "Social Impact & Community Service",
    title: "Making a Difference",
    description:
      "Community service is integral to our ethos. Our students regularly engage in initiatives that make a positive impact on society, from environmental projects to volunteer work. These efforts have earned recognition and awards from various civic organizations.",
  },
  {
    img: "https://cbs.edustoke.com/wp-content/uploads/2024/12/572x400_38.jpg",
    number: "Recognition of Alumni",
    title: "Legacy of Excellence",
    description:
      "The achievements of our alumni in fields like civil services, armed forces, medicine, engineering, and business speak volumes. Brownian alumni have won national and international awards, holding leadership positions globally. We celebrate their accomplishments, which reflect the values instilled at Col Brown Cambridge School.",
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
          className="object-cover w-full h-full min-h-[400px]  transition-all duration-300  sm:grayscale hover:scale-110 hover:grayscale-0 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-white dark:bg-slate-800 h-full flex flex-col justify-center p-6 lg:p-12"
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
    <section className="sm:py  dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
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
