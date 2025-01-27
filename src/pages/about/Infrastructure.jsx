import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const infrastructureData = [
  {
    id: 1,
    section: {
      title: "Residential Life",
      subtitle: "Experience comfort and care in our boarding facilities",
      achievements: [
        {
          title: "Heritage Dormitory",
          description:
            "A place where she will foster a SECOND FAMILY. Our Victorian-style dormitories blend heritage with modern comfort.",
        },
        {
          title: "Modern Washrooms",
          description:
            "24/7 hot water facility with modern fittings and daily maintenance.",
        },
        {
          title: "Common Rooms",
          description:
            "Spacious common areas for recreation and social interaction.",
        },
        {
          title: "Laundry Services",
          description:
            "Professional laundry and maintenance services available.",
        },
      ],
      imageSrc: "https://example.com/dormitory.jpg",
      imageAlt: "Col Brown School Dormitory",
    },
  },
  {
    id: 2,
    section: {
      title: "Dining Experience",
      subtitle: "Nutritious and delicious meals prepared with care",
      achievements: [
        {
          title: "Modern Kitchen",
          description:
            "She will never be able to guess if it was her mother or our kitchen staff.",
        },
        {
          title: "Dining Hall",
          description:
            "Spacious dining area serving nutritious vegetarian and non-vegetarian meals.",
        },
        {
          title: "Dietary Care",
          description:
            "Special attention to dietary requirements and restrictions.",
        },
        {
          title: "Hygiene Standards",
          description:
            "Regular health inspections and highest hygiene standards maintained.",
        },
      ],
      imageSrc: "https://example.com/kitchen.jpg",
      imageAlt: "Col Brown School Kitchen",
    },
  },
  {
    id: 3,
    section: {
      title: "Academic Facilities",
      subtitle: "State-of-the-art learning environments",
      achievements: [
        {
          title: "Heritage Library",
          description:
            "Her private garden of PENMANSHIP, housing over 50,000 books.",
        },
        {
          title: "Digital Resources",
          description:
            "Access to online databases and digital learning materials.",
        },
        {
          title: "Study Areas",
          description: "Quiet study spaces and group discussion rooms.",
        },
        {
          title: "Research Center",
          description: "Advanced research facilities for senior students.",
        },
      ],
      imageSrc: "https://example.com/library.jpg",
      imageAlt: "Col Brown School Library",
    },
  },
  {
    id: 4,
    section: {
      title: "Scientific Exploration",
      subtitle: "Modern laboratories for practical learning",
      achievements: [
        {
          title: "Science Labs",
          description:
            "Where sometimes a few mistakes lead to the creation of something NEW.",
        },
        {
          title: "Computer Lab",
          description: "Latest technology and software for digital literacy.",
        },
        {
          title: "Innovation Hub",
          description: "Space for projects and experimental learning.",
        },
        {
          title: "Smart Classrooms",
          description: "Interactive learning with modern teaching aids.",
        },
      ],
      imageSrc: "https://example.com/laboratory.jpg",
      imageAlt: "Col Brown School Laboratory",
    },
  },
  {
    id: 5,
    section: {
      title: "Health & Recreation",
      subtitle: "Complete care for physical and mental well-being",
      achievements: [
        {
          title: "Medical Center",
          description:
            "At MIS, She will never felt the absence of a mother's hand, even a single scratch is dealt with utmost care & attention.",
        },
        {
          title: "Sports Complex",
          description:
            "A place designed with love care and compassion, where she rejuvenates herself.",
        },
        {
          title: "Fitness Center",
          description: "Modern gym equipment and trained instructors.",
        },
        {
          title: "Counseling Center",
          description: "Professional support for emotional well-being.",
        },
      ],
      imageSrc: "https://example.com/medical.jpg",
      imageAlt: "Col Brown School Medical Center",
    },
  },
];

const Infrastructure = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/infrastructure", label: "About" },
    { label: "Infrastructure" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Infrastructure"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          {/* <Heading
            title="Our Infrastructure"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="A century of excellence in education with world-class facilities"
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto"
          /> */}
          <div className="grid grid-cols-1 sm:gap-16 pt-12">
            {infrastructureData.map((item) => (
              <InfrastructureSection
                key={item.id}
                {...item.section}
                id={item.id}
              />
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Infrastructure;

const InfrastructureSection = ({
  title,
  subtitle,
  achievements,
  imageSrc,
  imageAlt,
  id,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-2 mr-0 xl:mr-0 lg:mr-5"
    >
      <div className="w-full mx-auto max-w-7xl md:px-5 lg:px-5">
        <div className="grid items-center justify-start w-full grid-cols-1 gap-10 xl:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ x: id % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`inline-flex flex-col items-center justify-center w-full gap-10 lg:items-start ${
              id % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="flex flex-col items-start justify-center w-full gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center justify-start gap-4 lg:items-start"
              >
                <h6 className="text-base font-normal leading-relaxed text-gray-400">
                  Our Infrastructure
                </h6>
                <div className="flex flex-col items-center justify-start w-full gap-3 lg:items-start">
                  <h2 className="text-4xl font-bold leading-normal text-center text-green-800 font-manrope lg:text-start">
                    {title}
                  </h2>
                  <p className="text-base font-normal leading-relaxed text-center text-gray-500 lg:text-start">
                    {subtitle}
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col items-start justify-center w-full gap-6">
                <div className="grid items-center justify-start w-full grid-cols-1 gap-8 md:grid-cols-2">
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    >
                      <h4 className="text-2xl font-bold leading-9 text-gray-900 font-manrope">
                        {achievement.title}
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="grid items-center justify-start w-full h-full grid-cols-1 gap-8 md:grid-cols-2">
                  {achievements.slice(2).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    >
                      <h4 className="text-2xl font-bold leading-9 text-gray-900 font-manrope">
                        {achievement.title}
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="sm:w-fit w-full group px-3.5 py-2 bg-green-50 hover:bg-green-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
            >
              <span className="px-1.5 text-green-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <ChevronRight className="w-4 h-4 mt-1 text-green-600" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: id % 2 === 0 ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`flex items-start justify-center w-full lg:justify-start ${
              id % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="sm:w-[564px] w-full sm:h-[546px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-full sm:mt-5 sm:ml-5 rounded-3xl"
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
