import Heading from "../../components/Heading";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import Container from "../../components/wrappers/Container";
import img from "../../assets/landing/bg1.webp";
import { useMemo } from "react";
// import Stats from "../../components/Stats";
// import Newsletter from "../../components/Newsletter";
// import AboutSidebar from "../../components/AboutSidebar";
import { clubsData } from "./clubsData";
import {
  Calendar,
  ImageIcon,
  Laptop,
  Music,
  Coins,
  Users,
  Box,
  Lightbulb,
  MessageCircle,
  Globe,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";

const ClubsAndSocieties = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    {
      href: "/beyond-classroom/clubs-at-cbs",
      label: "Beyond Classroom",
    },
    { label: "Clubs At CBS" },

  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Clubs At CBS"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}

      />
      <Container className="container grid ">
        <Heading
          title="Clubs At CBS"
          titleClassName="text-green-950  lg:text-5xl"
          subtitleClassName="text-gray-500  m-0 lg:text-lg lg:font-normal lg:max-w-full lg:"
          subtitle="Discover the vibrant clubs at IIM, where students can explore their interests, develop new skills, and connect with peers."
          className="pt-12"

        />
        <EventGallery />
      </Container>
      {/* <div className="bg-gray-50"></div> */}
      {/* <Stats />
      <Newsletter /> */}
    </div>
  );
};

export default ClubsAndSocieties;
const clubs = [
  "All Clubs",
  "IT Club",
  "Maestros Club",
  "Finance Club",
  "HR Club",
  "Operations Club",
  "E-Cell Club",
  "Soft Skills Club",
  "Global Voices Club",
  "Research Club",
  "Sports Club",
];

const clubIcons = {
  "All Clubs": Calendar,
  "IT Club": Laptop,
  "Maestros Club": Music,
  "Finance Club": Coins,
  "HR Club": Users,
  "Operations Club": Box,
  "E-Cell Club": Lightbulb,
  "Soft Skills Club": MessageCircle,
  "Global Voices Club": Globe,
  "Research Club": BookOpen,
  "Sports Club": Trophy,
};

function EventGallery() {
  const [selectedClub, setSelectedClub] = useState("All Clubs");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const events = useMemo(() => clubsData, []);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setIsDrawerOpen(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4  gap-y-8">
      <div className="self-start col-span-1 sidebar h-max sticky top-2  rounded-xl sm:top-12 z-10">
        <div className="sticky top-0 flex flex-col h-full  transition-all duration-150 border sm:shadow-sm border-slate-50 bg-green-950 hover:bg-green-900 hover:shadow-md rounded-xl sm:max-h-max max-h-60 overflow-y-auto scrollbar-hide scroll-smooth shadow-lg">
          <h3 className=" p-4  self-start sticky top-0 text-xl font-bold text-white border-b border-slate-200 bg-green-950 w-full">
            Clubs at CBS
          </h3>
          <div className="flex flex-col gap-4 p-4">
          {clubs.map((club) => {
            const Icon = clubIcons[club];
            return (
              <div
                key={club}
                onClick={() => {
                  setSelectedClub(club);
                  setSelectedEvent(null);
                }}
                className={`w-full flex items-center gap-2 text-left text-sm cursor-pointer hover:text-green-950 hover:bg-slate-50 duration-300 transition-all rounded-md p-2 ${
                  club === selectedClub
                    ? "bg-slate-50 text-green-950 font-bold"
                    : " text-white font-medium"
                }`}
              >
                <Icon className="w-4 h-4" /> {club}
              </div>
            );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-3 gap-4 events md:grid-cols-2 lg:grid-cols-3">
        {events[selectedClub].map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden transition-all duration-150 shadow-sm group h-max hover:shadow-md rounded-xl hover:-translate-y-2"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-[16/9] overflow-hidden ">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />

                {event.photoCount && (
                  <div className="absolute flex items-center gap-1 px-2 py-1 text-sm text-white rounded-md bottom-2 right-2 bg-black/70">
                    <ImageIcon className="w-4 h-4" />
                    <span>{event.photoCount} Photos</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={event.date}>{event.date}</time>
              </div>
              <h3 className="mb-2 text-xl font-bold transition-all duration-300 line-clamp-1 hover:text-primary-color hover:line-clamp-none">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {event.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-green-950"
                onClick={() => handleImageClick(event)}
              >
                View Gallery
              </Button>
            </CardFooter>
          </Card>
        ))}
        {events[selectedClub].length === 0 && (
          <div className="py-12 text-center col-span-full">
            <p className="text-muted-foreground">
              No events found for {selectedClub}
            </p>
          </div>
        )}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="text-white bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300">
          {selectedEvent && (
            <motion.div
              className="mx-auto w-full max-w-sm sm:max-w-2xl max-h-[90vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold text-left text-black sm:text-center">
                  {selectedEvent.title}
                </DrawerTitle>
                <DrawerDescription className="text-lg font-semibold text-left sm:text-center text-black/80">
                  {selectedEvent.date}
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0 text-black/90 max-h-[60vh] overflow-y-auto scrollbar-hide scroll-smooth">
                {selectedEvent.gallery && selectedEvent.gallery.length > 0 ? (
                  <Carousel
                    className="w-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="flex">
                      {selectedEvent.gallery.map((image, index) => (
                        <CarouselItem
                          key={index}
                          className="flex items-center justify-center basis-full"
                        >
                          <div className="w-full max-h-[60vh] flex justify-center">
                            <img
                              src={image}
                              alt={`Gallery image ${index + 1}`}
                              className="object-contain max-w-full max-h-full rounded-md"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "60vh",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute z-10 -translate-y-1/2 left-2 top-1/2" />
                    <CarouselNext className="absolute z-10 -translate-y-1/2 right-2 top-1/2" />
                  </Carousel>
                ) : (
                  <div className="w-full max-h-[60vh] flex justify-center">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="object-contain max-w-full max-h-full rounded-md"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "60vh",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                <div className="mt-4 ">
                  {selectedEvent.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 text-sm text-justify text-black/90"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="" className="text-white bg-gray-950">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </motion.div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
