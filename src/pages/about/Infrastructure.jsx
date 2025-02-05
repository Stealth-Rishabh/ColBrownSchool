import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/about/infrastructure-banner.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import medical from "../../assets/boarding-life/medical2.webp";

const infrastructureData = [
  {
    id: 1,
    section: {
      title: "Academic Facilities",
      subtitle: "State-of-the-art learning environments",
      achievements: [
        {
          title: "Spacious Classrooms",
          description:
            "Our classrooms are spacious, well-ventilated, and equipped with smart technology to enhance learning.",
        },
        {
          title: "State-of-the-Art Library",
          description:
            "The school boasts a state-of-the-art library, rich in resources, to nurture a love for reading and research.",
        },
        {
          title: "Dedicated Science Labs",
          description:
            "Dedicated science and computer labs are equipped with advanced tools, fostering curiosity and practical learning.",
        },
        {
          title: "Study Areas",
          description: "Quiet study spaces and group discussion rooms.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_16.jpg",
      imageAlt: "Col Brown School Library",
    },
    link: "/boarding-life/classrooms",
  },
  {
    id: 2,
    section: {
      title: "Sports and Recreation",
      subtitle: "Integral to our philosophy of all-around development",
      achievements: [
        {
          title: "Expansive Playgrounds",
          description:
            "We provide expansive playgrounds, courts, and facilities for games like hockey, football, basketball, cricket, karate, army drill & athletics.",
        },
        {
          title: "Indoor Game Areas",
          description:
            "Indoor game areas and a swimming pool cater to recreational and competitive activities.",
        },
        {
          title: "Fitness Center",
          description:
            "Our students engage in thrilling outdoor activities like paragliding, rock climbing, and trekking - combining adventure with nature exploration.",
        },
        {
          title: "Counseling Center",
          description: "Professional support for emotional well-being.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_10.jpg",
      imageAlt: "Col Brown School Sports Complex",
    },
    link: "/boarding-life/sports-at-cbs",
  },
  {
    id: 3,
    section: {
      title: "Hostel and Residential Facilities",
      subtitle: "Home-away-from-home experience",
      achievements: [
        {
          title: "Comfortable Dormitories",
          description:
            "Our boarding facilities ensure a home-away-from-home experience.",
        },
        {
          title: "Clean Dining Hall",
          description:
            "Comfortable dormitories, clean dining hall, and well-balanced meals contribute to the well-being of every student.",
        },
        {
          title: "Laundry Services",
          description:
            "Professional laundry and maintenance services available.",
        },
        {
          title: "Common Rooms",
          description:
            "Spacious common areas for recreation and social interaction.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_14.jpg",
      imageAlt: "Col Brown School Dormitory",
    },
    link: "/boarding-life/hostel",
  },
  {
    id: 4,
    section: {
      title: "Cultural and Creative Spaces",
      subtitle: "Encouraging exploration of arts",
      achievements: [
        {
          title: "Tamarind Theatre",
          description:
            "The Tamarind Theatre serves as a creative hub, encouraging students to explore performing and visual arts.",
        },
        {
          title: "Music Rooms",
          description: "Dedicated spaces for music education and practice.",
        },
        {
          title: "Art Studios",
          description:
            "Art studios that inspire creativity and artistic expression.",
        },
        {
          title: "Innovation Hub",
          description: "Space for projects and experimental learning.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_8.jpg",
      imageAlt: "Col Brown School Cultural Spaces",
    },
    link: "/beyond-classroom/clubs-at-cbs",
  },
  {
    id: 5,
    section: {
      title: "Library & Resource Center",
      subtitle: "A treasure trove of knowledge",
      achievements: [
        {
          title: "Extensive Collection",
          description:
            "Our library has lots of books for everyone - from textbooks and study materials to storybooks and magazines.",
        },
        {
          title: "Quiet Study Areas",
          description: "Quiet study areas for students to read and study.",
        },

        {
          title: "Research Materials",
          description:
            "We have many books and magazines for students to learn more about the world.",
        },
        {
          title: "E-Books and Digital Resources",
          description:
            "Along with regular books, we offer e-books, online articles, and digital resources to support today's learning needs.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_16.jpg",
      imageAlt: "Col Brown School Cultural Spaces",
    },
    link: "/boarding-life/library",
  },
  {
    id: 6,
    section: {
      title: "Dining Hall",
      subtitle: "A culinary delight for every palate",
      achievements: [
        {
          title: "Clean Dining Hall",
          description:
            "Our dining hall is meticulously maintained, providing a hygienic and welcoming environment for students to enjoy their meals.",
        },
        {
          title: "Nourishing Excellence",
          description:
            "Our dining hall offers a diverse menu crafted by nutritionists, ensuring every meal supports our students' academic and athletic performance.",
        },
        {
          title: "Comfortable Dining Space",
          description:
            "Our dining hall is a cozy place where students can relax and enjoy their meals together.",
        },
        {
          title: "Healthy Food Options",
          description:
            "We provide healthy food choices that help students stay active and focused in their studies.",
        },
      ],
      imageSrc:
        "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_13.jpg",
      imageAlt: "Col Brown School Cultural Spaces",
    },
    link: "/boarding-life/dining",
  },
  {
    id: 7,
    section: {
      title: "Medical Facilities",
      subtitle: "Your health is our priority",
      achievements: [
        {
          title: "24/7 Medical Facility",
          description:
            "Our on-campus medical facility ensures 24/7 healthcare support with experienced medical professionals, prioritizing student wellbeing.",
        },
        {
          title: "Emergency Response Team",
          description: "A dedicated team ready to respond to emergencies.",
        },
        {
          title: "First Aid Training",
          description: "Regular first aid training for students and staff.",
        },
        {
          title: "Regular Health Checks",
          description: "Regular health checks for students and staff.",
        },
      ],
      imageSrc: medical,
      imageAlt: "Col Brown School Cultural Spaces",
    },
    link: "/boarding-life/medical-facilities",
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
                link={item.link}
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
  link,
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
                {/* <h6 className="text-base font-normal leading-relaxed text-gray-400">
                    Our Infrastructure
                    </h6> */}
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
                      className="w-full h-full p-3.5 rounded-xl border-2 bg-yellow-50 border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
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
                      className="w-full p-3.5 rounded-xl bg-yellow-50 border-2 border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
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
            <Link to={link}>
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
            </Link>
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
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
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
