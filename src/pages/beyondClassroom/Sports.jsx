import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/beyond-classroom/Sports-Banner.webp";
import Athlete from "../../assets/beyond-classroom/Athlete.webp";
import Achievements from "../../assets/beyond-classroom/Achievement.webp";
import Character from "../../assets/beyond-classroom/Character.webp";
import Cricket from "../../assets/beyond-classroom/Cricket.webp";
import Faith from "../../assets/beyond-classroom/Faith.webp";
import Growth from "../../assets/beyond-classroom/Growth.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import {
  MessageCircle,
  ChevronRight,
  Shield,
  Medal,
  Target,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const Sports = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/beyond-classroom/sports", label: "Beyond Classroom" },
    { label: "Sports" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Sports"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="">
        <Container>
          <Heading
            title="Sports & Athletics"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="At Col. Brown School, we believe that sports play a pivotal role in a student's overall development. Our campus is equipped with world-class facilities and offers a wide range of sports to ensure every student can find their passion and thrive. From individual sports to team events, our sports program encourages teamwork, leadership, discipline, and resilience."
            subtitleClassName="text-gray-700 max-w-6xl mx-auto sm:font-normal font-normal"
            className="pt-12 mx-auto"
          />
          <Features />
          <Feature2 />
          <Feature3 />
          <Feature4 />
        </Container>
      </section>
    </section>
  );
};

export default Sports;

const features = [
  {
    title: "Cricket",
    description:
      "Our cricket program develops technical skills, strategic thinking and sportsmanship through professional coaching and regular matches on our well-maintained grounds.",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_5.jpg",
  },
  {
    title: "Basketball",
    description:
      "Students train in our indoor basketball court with experienced coaches, learning teamwork and agility while competing in inter-school tournaments.",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_21.jpg",
  },
  {
    title: "Hockey",
    description:
      "Our hockey program emphasizes both individual skills and team tactics, with regular practice sessions and competitive matches on our full-size football field.",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_23.jpg",
  },
  {
    title: "Volleyball",
    description:
      "Our temperature-controlled volleyball court hosts year-round training programs for all skill levels, from beginners to competitive players.",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_10.jpg",
  },
  {
    title: "Football",
    description:
      "Students participate in track and field events on our 400-meter track, developing speed, strength and endurance through structured training programs.",
    image:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/sports-quiz-2019-14.jpg",
  },
  {
    title: "Indoor Sports",
    description:
      "We offer facilities for table tennis, badminton, chess and carrom, providing students with diverse options for recreation and competitive play.",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_8.jpg",
  },
];

const FeatureItem = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2, // 0.2s delay between each item
      }}
      className="bg-green-50 dark:bg-[#1E2735] rounded-[20px] relative p-6 lg:p-12 drop-shadow-lg h-full"
    >
      <img
        src={feature.image}
        alt=""
        className="h-56 max-w-full  sm:rounded-xl object-cover mx-auto mb-6 shadow-xl hover:scale-105 transition-all duration-300"
      />
      <h4 className="text-2xl leading-6 font-bold text-center text-green-800">
        {feature.title}
      </h4>
      <p className="opacity-70 mt-4 text-justify text-green-800">
        {feature.description}
      </p>
    </motion.div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Features = () => {
  return (
    <section className=" light py- bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-">
        <div className="grid grid-cols-12 gap-6 text-center">
          {features.map((feature, i) => (
            <div className="col-span-12 md:col-span-4" key={i}>
              <FeatureItem feature={feature} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Volleyball, Dumbbell } from "lucide-react";

const features2 = [
  {
    icon: Volleyball,
    title: "Field Sports",
    description:
      "Spacious grounds for football, cricket and hockey with professional coaching and competitive play opportunities to develop teamwork and strategic thinking.",
  },
  {
    icon: Trophy,
    title: "Court Sports",
    description:
      "Well-maintained courts for basketball, volleyball and tennis where students can enhance their agility, coordination and competitive spirit.",
  },
  {
    icon: Dumbbell,
    title: "Combat Sports",
    description:
      "Professional training in karate and other martial arts to build discipline, focus and self-defense skills under expert guidance.",
  },
  {
    icon: Target,
    title: "Track & Field",
    description:
      "Dedicated tracks and field facilities for athletics, helping students build endurance, speed and competitive excellence.",
  },
  {
    icon: Trophy,
    title: "Indoor Sports",
    description:
      "Year-round facilities for badminton, table tennis, pool and carom to develop precision, focus and strategic gameplay.",
  },
];

const FeatureItem2 = ({ feature, index }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15, // 0.15s delay between each item
      }}
      className="bg-green-50 dark:bg-[#1E2735] rounded-xl relative p-6 pt-12 lg:p-12 h-full drop-shadow-lg"
    >
      <div className="text-green-800 text-[32px] inline-flex items-center justify-center mb-6">
        <Icon size={32} />
      </div>
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.description}</p>
    </motion.div>
  );
};

FeatureItem2.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Feature2 = () => {
  return (
    <section className="lg:pt-24 py-10   bg-white dark:bg-[#0b1727] text-green-900 dark:text-white">
      <div className="container  mx-auto">
        <div className="grid grid-cols-12 mb-6 sm:mb-12">
          <div className="col-span-12 lg:col-span-12 mx-auto">
            <h2 className="text-3xl md:text-5xl leading-none font-bold  sm:font-extrabold mb-6 mx-auto text-center">
              Range of Sports Offered
            </h2>
            <p className="text-lg leading-6 mb-6 text-center">
              We offer a diverse array of sports facilities and training
              programs, ensuring every student can discover and excel in their
              chosen athletic pursuits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              src="https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_21.jpg"
              alt=""
              className="h-full brightness-50 max-w-full object-cover rounded-xl mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          {features2.map((feature, i) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
              <FeatureItem2 feature={feature} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features3 = [
  {
    img: Cricket,
    number: "Facilities",
    title: "State-of-the-Art Facilities",
    description:
      "Our sports facilities are designed to nurture talent and promote a healthy lifestyle. Students have access to well-maintained fields, courts, and activities like football, cricket, basketball, and athletics. We also have a dedicated indoor sports area for badminton, table tennis, and other indoor activities.",
  },
  {
    img: Athlete,
    number: "Coaching",
    title: "Expert Coaching & Competitions",
    description:
      "Our expert coaches provide guidance, skill-building sessions, and help students participate in local, regional, and national tournaments. We believe in developing the complete athlete by focusing not only on skills but also on sportsmanship, teamwork, and discipline.",
  },
  {
    img: Achievements,
    number: "Legacy",
    title: "Achievements & Legacy",
    description:
      "Col. Brown School has a rich history of sporting achievements, with students regularly winning accolades in district, state, and national level events. Our legacy of sporting excellence is a testament to the dedication of our students, faculty, and sports staff.",
  },
  {
    img: Character,
    number: "Character",
    title: "Sports & Character Development",
    description:
      "Our sports program goes beyond physical development; it fosters character-building attributes like perseverance, leadership, and collaboration. Whether participating in friendly matches or intense competitions, students learn valuable life skills that will serve them well beyond the playing field.",
  },
  {
    img: Faith,
    number: "Faith",
    title: "A Foundation of Faith",
    description:
      "Our school welcomes students from diverse backgrounds, and while we emphasize respect for all religions and beliefs, our foundation is rooted in spiritual values. Through regular chapel services, prayers, and reflection sessions, we provide an environment where students can connect with their inner selves and with a higher purpose.",
  },
  {
    img: Growth,
    number: "Growth",
    title: "Holistic Growth",
    description:
      "We integrate spiritual activities into everyday life, providing a balance between academics, physical activities, and spiritual practices. Students participate in community service projects that reinforce the values of love, compassion, and service to others, ensuring that their spiritual growth is aligned with personal action and contribution to the greater good.",
  },
];
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
const FeatureItem3 = ({ feature, index, isExpanded, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.3, // 0.3s delay between each item
    }}
    className="grid grid-cols-12 mx-0 mb-6 md:mb-0 overflow-hidden rounded-md sm:rounded-none"
  >
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative z-20 p-0 overflow-hidden">
        <img
          src={feature.img}
          alt={feature.title}
          className="object-cover w-full h-full max-h-[400px]  transition-all duration-300  grayscale hover:scale-110 hover:grayscale-0 -z-10"
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
  </motion.div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Feature3 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto rounded-xl overflow-hidden">
        {features3.map((feature, i) => (
          <FeatureItem3
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

const Feature4 = () => {
  const achievements = [
    {
      icon: Shield,
      title: "Team Sports",
      items: [
        "Hockey - Building teamwork",
        "Football - Developing coordination", 
        "Cricket - Strategic thinking",
        "Basketball - Agility training",
        "Volleyball - Team dynamics",
        "Tennis - Hand-eye coordination",
        "Badminton - Quick reflexes"
      ],
    },
    {
      icon: Medal, 
      title: "Indoor Games",
      items: [
        "Table Tennis - Precision skills",
        "Carom - Strategic planning",
        "Pool Table - Focus & accuracy",
        "Chess - Critical thinking",
        "Indoor activities - Creative expression",
        "Strategic games - Problem solving",
        "Mental sports - Cognitive development"
      ],
    },
    {
      icon: Target,
      title: "Fitness & Discipline",
      items: [
        "Physical Training - Core strength",
        "Swimming - Full body workout",
        "Yoga - Mind-body balance",
        "Karate - Self-discipline",
        "Gymnastics - Flexibility",
        "Skating - Balance control",
        "Fitness routines - Overall health"
      ],
    },
    {
      icon: Trophy,
      title: "Key Achievements",
      items: [
        "District Champions - Cricket",
        "State Level - Basketball",
        "Gold Medals - Swimming",
        "Regional Winners - Athletics",
        "Tournament Victory - Chess",
        "Championship - Table Tennis",
        "Excellence Awards - Sports"
      ],
    },
  ];

  return (
    <section className="py-16 bg-green-50 rounded-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-950 mb-4">
            Sports Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive sports program is supported by world-class
            infrastructure, professional coaching, and regular competitive
            events to nurture sporting talent and promote physical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6 mx-auto">
                    <achievement.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-950 mb-4 text-center">
                    {achievement.title}
                  </h3>
                  <ul className="space-y-2">
                    {achievement.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 hover:text-green-700"
                      >
                        <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
