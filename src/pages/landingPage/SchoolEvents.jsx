"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPreview } from "./VideoPreview";
import { NewsCard } from "./NewsCard";
import { EventCard } from "./EventCard";

import news from "../../assets/landing/events/news.png"
import wipro from "../../assets/landing/events/wipro.png"
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
    <div className="h-min py-12 ">
      <div className="max-w-[90vw] mx-auto sm:p-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-8 sm:space-y-0 sm:gap-12">
          {/* Left Column - News Section */}
          <div className="space-y-8 col-span-2">
            <h2 className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2">
              What&apos;s Coming Next ?
            </h2>
            <div className="grid sm:grid-cols-3 space-y-5 sm:space-y-0 sm:gap-5">
              <div className="col-span-2 grid h-[420px] overflow-hidden">
                <VideoPreview />
              </div>

              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <NewsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Events Section */}
          <div className="space-y-8 col-span-1">
            <h2 className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2">
              School Events
            </h2>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 ">
                <TabsTrigger value="upcoming" className=''>Upcoming</TabsTrigger>
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
          </div>
        </div>
      </div>
    </div>
  );
}