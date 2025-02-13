import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/news-events.jpeg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { eventData } from "./newsAndEventsData";

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

const images = [
  "https://pagedone.io/asset/uploads/1696244317.png",
  "https://pagedone.io/asset/uploads/1696244340.png",
  "https://pagedone.io/asset/uploads/1696244356.png",
];

// Complete event data from paste.txt


const EventSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setIsDrawerOpen(true);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-centergrid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-between lg:gap-8">
          {eventData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: Math.min(index * 0.1, 0.3),
              }}
              className="w-full overflow-hidden border border-gray-300 shadow-lg group max-lg:max-w-xl rounded-2xl will-change-transform"
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center h-[250px]">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50 ">
                <span className="block mb-3 font-medium text-green-700">
                  {event.date}
                </span>
                <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900 ">
                  {event.title}
                </h4>
                <p className="mb-10 text-lg leading-6 text-gray-500 line-clamp-2">
                  {event.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(event)}
                  className="flex items-center gap-1 text-lg font-semibold text-green-800 transition-colors cursor-pointer hover:text-green-700 group "
                >
                  Read more{" "}
                  <ArrowRightIcon className="w-4 h-4 mt-1 transition-all duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="text-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950">
          {selectedEvent && (
            <motion.div
              className="mx-auto w-full max-w-sm sm:max-w-3xl max-h-[90vh]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-left text-white sm:text-left">
                  {selectedEvent.title}
                </DrawerTitle>
                <DrawerDescription className="text-lg font-semibold text-left sm:text-left text-white/80">
                  {selectedEvent.date}
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0 text-white/90">
                <ScrollArea className="h-[400px]">
                  <div className="relative w-full h-[400px] flex justify-center mb-6">
                    <img
                      src={selectedEvent.images[currentImageIndex]}
                      alt={`${selectedEvent.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="object-contain w-full h-full rounded-md"
                    />

                    {selectedEvent.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-0 p-2 -translate-y-1/2 bg-black/50 rounded-r top-1/2 hover:bg-black/70"
                        >
                          <ArrowLeftIcon className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-0 p-2 -translate-y-1/2 bg-black/50 rounded-l top-1/2 hover:bg-black/70"
                        >
                          <ArrowRightIcon className="w-6 h-6 text-white" />
                        </button>

                        <div className="absolute bottom-2 flex gap-2 justify-center w-full">
                          {selectedEvent.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full ${
                                idx === currentImageIndex
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <ScrollArea
                    className="min-h-[130px] rounded-md"
                    type="always"
                  >
                    <div className="px-5">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: selectedEvent.fullContent,
                        }}
                        className="mb-4 text-lg text-justify text-white/90"
                      />
                    </div>

                    <ScrollBar />
                  </ScrollArea>
                </ScrollArea>
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    variant=""
                    className="text-black transition-all duration-300 bg-white hover:bg-white/90"
                  >
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </motion.div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};
