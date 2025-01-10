"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPreview } from "./VideoPreview";
import { NewsCard } from "./NewsCard";
import { EventCard } from "./EventCard";
import { motion } from "framer-motion";

import news from "../../assets/landing/events/news.webp";
import wipro from "../../assets/landing/events/wipro.webp";
export default function SchoolEvents() {
  const newsItems = [
    {
      date: "OCTOBER 21, 2024",
      title: "Obituary",
      image: news,
      type: "NEWS",
    },
    {
      date: "OCTOBER 5, 2024",
      title:
        "Col. Brown Cambridge School rated amongst the top Boarding Schools in North India",
      image: news,
      type: "NEWS",
    },
    {
      date: "MAY 18, 2024",
      title: "Wipro Earthian Award Ceremony",
      image: wipro,
      type: "EVENTS",
    },
    // {
    //   date: "APRIL 9, 2024",
    //   title: "Farewell Party Report for Class 12th at Col. Brown Cambridge",
    //   image: "https://v0.dev/placeholder.svg?height=60&width=60",
    //   type: "NEWS & EVENTS",
    // },
  ];

  const events = [
    {
      date: { day: "23", month: "DEC" },
      title: "Build Education Website Using WordPress",
      time: "08:00 - 17:00",
      location: "Chicago, US",
    },
    {
      date: { day: "15", month: "DEC" },
      title: "Applying Natural Laws to Technology and Society",
      time: "08:00 - 17:00",
      location: "Venice, Italy",
    },
    {
      date: { day: "30", month: "SEP" },
      title: "Roundtable discussion on STEAM education",
      time: "08:00 - 17:00",
      location: "NewYork, USA",
    },
  ];

  return (
    <div className="h-min py-12">
      <div className="max-w-[90vw] mx-auto sm:p-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-8 sm:space-y-0 sm:gap-12">
          {/* Left Column - News Section */}
          <motion.div
            className="space-y-8 col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What&apos;s Coming Next ?
            </motion.h2>
            <div className="grid sm:grid-cols-3 space-y-5 sm:space-y-0 sm:gap-5">
              <motion.div
                className="col-span-2 grid h-[420px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <VideoPreview />
              </motion.div>

              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <NewsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Events Section */}
          <motion.div
            className="space-y-8 col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              School Events
            </motion.h2>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 ">
                <TabsTrigger value="upcoming" className="">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} index={index} />
                ))}
              </TabsContent>
              <TabsContent value="past">
                <div className="text-center py-8 text-muted-foreground">
                  No past events to display
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
