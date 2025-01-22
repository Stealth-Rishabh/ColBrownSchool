import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
// import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
const cards = [
  {
    title: "Classrooms",
    description:
      "The classrooms and laboratories are well lit and ventilated, keeping in mind the technological advancements. Classrooms have been equipped with interactive smart boards to ensure better understanding.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_18.jpg",
    buttonText: "Explore More",
    path: "/boarding-life/classrooms",
  },
  {
    title: "Library",
    description:
      "Our school takes pride in an exceptional library featuring a vast and rare collection of books, journals, magazines, and encyclopedias. Our library fosters a love for reading in students.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_16.jpg",
    buttonText: "Explore More",
    path: "/boarding-life/library",
  },
  {
    title: "Sports Facilities",
    description:
      "At Col. Brown, sports and physical education are integral to our curriculum. We offer a variety of sports facilities including a football field, cricket pitch, basketball court, and indoor games area. Our students excel in various regional and national sporting events.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_10.jpg",
    buttonText: "Explore More",
    path: "/boarding-life/sports-facilities",
  },
  {
    title: "Dining Hall",
    description:
      "We emphasize nutrition and care. At our boarding school, we prioritize students' health and wellbeing through nutritious meals. Our menu is carefully crafted and provided, including Chota Haziri (after morning PT) with milk, brown bread, and honey.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_13.jpg",
    buttonText: "Explore More",
    path: "/boarding-life/dining-hall",
  },
  {
    title: "Hostel Accommodation",
    description:
      "Our hostels are designed to provide a home-like atmosphere with spacious rooms, nutritious meals, and round-the-clock supervision. We ensure the safety and comfort of every student while fostering a sense of responsibility.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_17.png",
    buttonText: "Explore More",
    path: "/boarding-life/hostel-accommodation",
  },
  {
    title: "Medical Facilities",
    description:
      "Our school prioritizes the healthy wellbeing of our students with a fully equipped infirmary staffed by a qualified and caring nurse. A qualified MBBS MD medical practitioner visits the infirmary daily.",
    imageSrc:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_9.jpg",
    buttonText: "Explore More",
    path: "/boarding-life/medical-facilities",
  },
];

const Overview = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/boarding-life/overview", label: "Boarding Life" },
    { label: "Overview" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Overview"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <Heading
            title="Overview of Facilities"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="Explore the various facilities that enhance the boarding experience and support student well-being."
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Card {...card} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Overview;

const Card = ({ title, description, imageSrc, buttonText, path }) => {
  return (
    <div className="mb-10 sm:max-w-1/2">
      <div className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg h-80 hover:shadow-xl">
        <img
          alt="content"
          className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-125"
          src={imageSrc}
        />
      </div>
      <h2 className="mt-6 mb-3 text-3xl font-medium text-center text-gray-700 title-font">
        {title}
      </h2>
      <p className="text-base font-light leading-relaxed text-center line-clamp-2 hover:line-clamp-none sm:hover:line-clamp-2 ">
        {description}
      </p>
      <Link to={path}>
        <Button className="flex px-5 py-2 mx-auto mt-6 text-white transition-transform duration-300 bg-green-800 border-0 rounded focus:outline-none hover:bg-green-900 hover:-translate-y-1">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
