import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
// import legacy from '../../../../assets/'

export default function LegacyTimeline() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-200 to-green-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-green-950 mb-8 md:mb-12 text-center"
        >
          Col Brown School- Top Boys Residential School
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <ChevronDown className="w-8 h-8 text-green-700 animate-bounce" />
        </motion.div>
        <Feature />
      </div>
    </section>
  );
}

const features = [
  {
    img: "https://v0.dev/placeholder.svg?height=300&width=400",
    title: "Legacy of 99 Years ",
    description:
      "Established in 1926, Col Brown School has been nurturing young minds for nearly a century. Our rich heritage and time-tested educational approach have shaped generations of successful leaders and professionals.",
  },
  {
    img: "https://v0.dev/placeholder.svg?height=300&width=400",
    title: "Student Teacher Ratio 8:1",
    description:
      "Our low student-to-teacher ratio ensures personalized attention and mentoring for every student. This enables deeper learning engagement and helps teachers identify and nurture each student's unique potential.",
  },
  {
    img: "https://v0.dev/placeholder.svg?height=300&width=400",
    title: "Ranked among top 10 Boys Residential School in North India",
    description:
      "Our consistent academic excellence and holistic development approach has earned us recognition among India's premier residential schools. We maintain high educational standards while fostering character development and leadership skills.",
  },
  {
    img: "https://v0.dev/placeholder.svg?height=300&width=400",
    title: "Disciplined Environment",
    description:
      "We cultivate a structured environment that instills self-discipline, responsibility and strong moral values. Our daily routine and code of conduct help shape well-rounded individuals with exemplary character.",
  },
  {
    img: "https://v0.dev/placeholder.svg?height=300&width=400",
    title: "Spread Across 63+ Acre area",
    description:
      "Our sprawling campus provides an ideal setting for both academic pursuits and extracurricular activities. The vast grounds house modern facilities while preserving the natural beauty of our historic location.",
  },
];

const FeatureItem = ({ feature, index }) => (
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
          className="object-cover w-full h-full sm:min-h-[400px] transition-all duration-300 hover:scale-110 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div className={cn("bg-white h-full flex flex-col justify-center p-6 lg:p-12")}>
        <div className="mb-6">
          <span className="block text-4xl text-red-600 font-bold leading-none">
            {feature.title}
          </span>
        </div>
        <p className="mb-6 text-justify text-lg lg:mb-12">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Feature = () => {
  return (
    <section className="text-zinc-900 relative overflow-hidden z-10">
      <div className="container max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <FeatureItem
            feature={feature}
            index={i + 1}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
