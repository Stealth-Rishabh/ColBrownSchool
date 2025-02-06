import { useState, useEffect } from "react";
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
  ChevronLeft,
  X,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import excursion1 from "../../assets/beyond-classroom/adventure-excurssion/adventure (1).webp";
import excursion2 from "../../assets/beyond-classroom/adventure-excurssion/adventure (1).jpg";
import excursion3 from "../../assets/beyond-classroom/adventure-excurssion/adventure (2).webp";
import excursion4 from "../../assets/beyond-classroom/adventure-excurssion/adventure (3).webp";
import excursion5 from "../../assets/beyond-classroom/adventure-excurssion/adventure (4).webp";
import excursion6 from "../../assets/beyond-classroom/adventure-excurssion/adventure (5).webp";

const AdventureExcursion = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    {
      href: "/beyond-classroom/adventure-excursion",
      label: "Beyond Classroom",
    },
    { label: "Adventure & Excursion" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Adventure & Excursion"
        imageSrc={excursion3}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
        className="!text-3xl sm:!text-5xl"
      />
      <section className="">
        <Container>

          <Heading
            title="Adventure & Excursion"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="At Col. Brown School, we believe that sports play a pivotal role in a student's overall development. Our campus is equipped with world-class facilities and offers a wide range of sports to ensure every student can find their passion and thrive. From individual sports to team events, our sports program encourages teamwork, leadership, discipline, and resilience."
            subtitleClassName="text-gray-700 max-w-6xl mx-auto sm:font-normal font-normal"
            className="pt-12 mx-auto !pb-14"
          />
          <Gallery />
        </Container>
      </section>
    </section>
  );
};

export default AdventureExcursion;

// Mock data for images (expanded with more variety)
const images = [
  {
    id: 1,
    src: excursion1,
    alt: "Students hiking in mountains",
    category: "Excursion",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
    alt: "School field trip to museum",
    category: "Adventure",
  },

  {
    id: 3,
    src: excursion2,
    alt: "Rock climbing adventure",
    category: "Excursion",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    alt: "Educational visit to science center",
    category: "Adventure",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    alt: "Historical monuments tour",
    category: "Adventure",
  },
  {
    id: 6,
    src: excursion3,
    alt: "Camping in wilderness",
    category: "Excursion",
  },
  {
    id: 7,
    src: excursion4,
    alt: "Mountain trekking",
    category: "Excursion",
  },

  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    alt: "Art gallery visit",
    category: "Adventure",
  },
  {
    id: 9,
    src: excursion5,
    alt: "Adventure sports",
    category: "Excursion",
  },
  {
    id: 10,
    src: excursion6,
    alt: "Adventure sports",
    category: "Excursion",
  },
  // Add more images as needed
];

const categories = ["All", "Adventure", "Excursion"];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(images);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);
    setFilteredImages(filtered);
  }, [selectedCategory]);

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex - 1 + filteredImages.length) % filteredImages.length
        : null
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % filteredImages.length : null
    );
  };

  return (
    <div className="space-y-8 min-h-screen">
      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="w-fit mx-auto"
      >
        <TabsList className="bg-green-50 backdrop-blur-lg rounded-full p-2 inline-flex mx-auto shadow-lg">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-5 sm:px-10 py-[6px] rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 dark:focus:ring-offset-gray-800 data-[state=active]:bg-green-800 data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>

          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" layout>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={350}
                  className="w-full min-h-64 aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <p className="text-white text-lg font-semibold">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredImages.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          No images found in this category.
        </p>
      )}

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="max-w-4xl max-h-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex].src || "/placeholder.svg"}
              alt={filteredImages[selectedImageIndex].alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-cover rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {filteredImages[selectedImageIndex].alt}
            </p>
            <div className="absolute top-2 right-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setSelectedImageIndex(null)}
                asChild={false}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={handlePrevious}
                asChild={false}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={handleNext}
                asChild={false}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
