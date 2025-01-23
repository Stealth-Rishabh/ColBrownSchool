import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";

const NewsAndEvents = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/beyond-classroom/news-and-events", label: "Beyond Classroom" },
    { label: "News & Events" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="News & Events"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <Heading
            title="Latest News & Events"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="Stay updated with the latest news and events that empower our community."
            subtitleClassName="text-gray-800"
            className="pt-12 mx-auto"
          />
          <EventSection />
        </Container>
      </section>
    </section>
  );
};

export default NewsAndEvents;

const eventData = [
  {
    id: 1,
    date: "Jan 01, 2023",
    image: "https://pagedone.io/asset/uploads/1696244317.png",
    title: "New Year Celebration at CBS",
    excerpt: "Join us for a grand celebration to welcome the New Year with joy and enthusiasm.",
    fullContent: "Details about the New Year celebration event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    date: "Feb 14, 2023",
    image: "https://pagedone.io/asset/uploads/1696244340.png",
    title: "Valentine's Day Special Event",
    excerpt: "Celebrate love and friendship with our special Valentine's Day event.",
    fullContent: "Details about the Valentine's Day event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    date: "Mar 01, 2023",
    image: "https://pagedone.io/asset/uploads/1696244356.png",
    title: "Spring Fest 2023",
    excerpt: "Join us for a day filled with fun activities and community bonding at Spring Fest.",
    fullContent: "Details about the Spring Fest event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    date: "Apr 22, 2023",
    image: "https://pagedone.io/asset/uploads/1696244317.png",
    title: "Earth Day Celebration",
    excerpt: "Participate in our Earth Day activities to promote sustainability and environmental awareness.",
    fullContent: "Details about the Earth Day celebration event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 5,
    date: "May 15, 2023",
    image: "https://pagedone.io/asset/uploads/1696244340.png",
    title: "Graduation Ceremony 2023",
    excerpt: "Join us in celebrating the achievements of our graduates at the annual graduation ceremony.",
    fullContent: "Details about the Graduation Ceremony event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 6,
    date: "Jun 10, 2023",
    image: "https://pagedone.io/asset/uploads/1696244317.png",
    title: "Summer Sports Day",
    excerpt: "Get ready for a day of fun and competition at our Summer Sports Day event.",
    fullContent: "Details about the Summer Sports Day event... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const EventSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setIsDrawerOpen(true);
  };

  return (
    <section className="">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-between lg:gap-8 gap-6">
          {eventData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group w-full max-lg:max-w-xl border border-gray-300 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ translateY: -5, transition: { duration: 0.2 } }} // Changed scale to translateY effect
            >
              <div className="flex items-center">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 ">
                <span className="text-green-700 font-medium mb-3 block">
                  {event.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5 ">
                  {event.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10 line-clamp-2">
                  {event.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(event)}
                  className="cursor-pointer text-lg text-green-800 font-semibold hover:text-green-700 transition-colors flex items-center gap-1 group "
                >
                  Read more <ArrowRightIcon className="w-4 h-4 mt-1 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Drawer 
        open={isDrawerOpen} 
        onOpenChange={setIsDrawerOpen}
      >
        <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white">
          {selectedEvent && (
            <motion.div
              className="mx-auto w-full max-w-sm sm:max-w-2xl max-h-[90vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-left sm:text-left text-white">
                  {selectedEvent.title}
                </DrawerTitle>
                <DrawerDescription className="text-lg font-semibold text-left sm:text-left text-white/80">
                  {selectedEvent.date}
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0 text-white/90">
                <div className="w-full max-h-[60vh] flex justify-center mb-6">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                </div>

                <div className="mt-4 max-h-[20vh] sm:max-h-[60vh] overflow-y-auto">
                  <p className="mb-4 text-justify text-sm text-white/90">
                    {selectedEvent.fullContent}
                  </p>
                </div>
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="" className="text-black bg-white hover:bg-white/90 transition-all duration-300">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </motion.div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};
