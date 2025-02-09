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

import news from "../../assets/beyond-classroom/news-events/news-event-demo.jpg";
import wipro from "../../assets/beyond-classroom/news-events/wipro-earthian-award-ceremony-thumb.jpg";

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

const eventData = [
  {
    id: 1,
    date: "November 27, 2024",
    images: [news],
    title: "Ashwani Rinwa Obituary",
    excerpt:
      "We are deeply grieved to inform you about the sad demise of Ashwani Rinwa of batch of 1973, on the 22nd of November 2024.",
    fullContent: `We are deeply grieved to inform you about the sad demise of Ashwani Rinwa of batch of 1973, on the 22nd of November 2024.

We convey our heartfelt condolences to the family. May God give strength to the family to bear this loss fortitude

We pray for his departed soul.`,
  },
  {
    id: 2,
    date: "October 21, 2024",
    images: [news],
    title: "Sri. Vijay Kumar Farshwal Obituary",
    excerpt:
      "With profound grief and sorrow we inform you about the sudden demise of Sri. Vijay Kumar Farshwal , Advocate , an alumni of batch 1965 , who left for his heavenly abode on 9th October 24.",
    fullContent: `With profound grief and sorrow we inform you about the sudden demise of Sri. Vijay Kumar Farshwal , Advocate, an alumni of batch 1965 , who left for his heavenly abode on 9th October 24.

We pray for the departed soul and pray to God to give the strength to loved ones to bear the loss.`,
  },
  {
    id: 3,
    date: "October 5, 2024",
    images: [news],
    title:
      "Col. Brown Cambridge School rated amongst the top Boarding Schools in North India",
    excerpt:
      "The recognition of Col. Brown Cambridge School as one of the top Boarding School in North India is a validation of the unstinting efforts put in by the Staff and employees lead by a devoted Headmaster and its beloved students.",
    fullContent: `The recognition of Col. Brown Cambridge School as one of the top Boarding School in North India is a validation of the unstinting efforts put in by the Staff and employees lead by a devoted Headmaster and its beloved students.  The meaning of “MAGNA EST VERITAS” (LATIN’)’TRUTH IS GREAT’ is abundantly exemplified in their recognition.
 
(As assessed by The Times of India)`,
  },
  {
    id: 4,
    date: "May 18, 2024",
    images: [
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/05/wipro-earthian-award-ceremony-detail23.jpg",
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/05/wipro-earthian-award-ceremony-detail1.jpg",
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/05/wipro-earthian-award-ceremony-detail2-1.jpg",
    ],
    title: "Wipro Earthian Award Ceremony",
    excerpt:
      "Wipro Earthian Ceremony and Open day was organized by Nature Science Initiative at Him Jyoti School on Saturday 11th May 2024",

    fullContent: `<div style="text-transform: none;margin-bottom: 20px;">
      <p>Wipro Earthian Ceremony and Open day was organized by Nature Science Initiative at Him Jyoti School on Saturday 11th May 2024</p>

      <p style="margin-bottom: 10px;">Col Brown School team was awarded the top 40 award at the National level for Wipro Earthian 2023 Biodiversity category. Their work was excellent and very well received.</p>


      <p>The team comprising-</p>

      <ol>
        <li>
          <p>Veeral Singh</p>
        </li>
        <li>
          <p>Mrigank Kohli</p>
        </li>
        <li>
          <p>Surya Dev Narayana Sinha</p>
        </li>
        <li>
          <p>Hardik Chaudhary</p>
        </li>
        <li>Anushreya Semwal were awarded a cash prize of 10,000Rs and certificates.</li>
      </ol>

      <p style="margin-bottom: 10px;">The display exhibited by CBS Team was appreciated by Prof. Trevor Price from university of Chicago USA who was the chief guest for the event.</p>

      
      <p style="margin-bottom: 10px;">The exhibition was followed by quiz where Abhinav Vaibhav and Sarthak Singh bagged two prizes.</p>
    </div>`,
  },
  {
    id: 5,
    date: "April 5, 2024",
    images: [
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/04/farewell-party-class-12th.jpg",
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/04/farewell-party-class-12th-banner.jpg",
    ],
    title: "Farewell Party Report for Class 12th at Col. Brown Cambridge",
    excerpt:
      "The farewell party for the Class 12th students of Col. Brown Cambridge School was held on January 25, 2024",
    fullContent: `<div>
        <p style="margin-bottom: 10px;">The farewell party for the Class 12th students of Col. Brown Cambridge School was held on January 25, 2024, commencing at 7 p.m. The event was a memorable occasion filled with warmth, laughter, and heartfelt farewells.</p>


        <p style="margin-bottom: 10px;">The program commenced with an opening speech delivered by Agastya Chaudhary, setting the tone for the evening. Following the speech, the traditional cake cutting ceremony took place, symbolizing the sweet memories shared by the departing students and their peers.</p>


        <p style="margin-bottom: 10px;">The evening progressed with a delectable spread of starters that tantalized the taste buds of all attendees. The culinary delights were met with unanimous approval, adding to the festive ambiance of the occasion.</p>


        <p style="margin-bottom: 10px;">A DJ was stationed to provide musical entertainment, igniting the dance floor with infectious beats. Students reveled in the opportunity to showcase their dance moves, creating lasting memories of camaraderie and joy.</p>



        <p style="margin-bottom: 10px;">In a touching gesture of gratitude, the students of Class 12th presented gifts to their teachers as tokens of appreciation for their guidance and support throughout the academic year. Arpan Joel delivered a heartfelt thank-you speech, expressing sincere appreciation for the unwavering dedication of the teaching staff.</p>


        <p style="margin-bottom: 10px;">The evening culminated with a sumptuous dinner that satisfied both the palate and the soul. The delectable dishes served were a fitting conclusion to a memorable evening of celebration and camaraderie.</p>


        <p style="margin-bottom: 10px;">As the clock approached 10:30 p.m., the farewell party drew to a close, leaving behind cherished memories and bidding adieu to the Class 12th students of Col. Brown Cambridge School as they embarked on a new chapter in their lives.</p>


        <p style="margin-bottom: 10px;">The farewell party was a resounding success, epitomizing the spirit of unity, gratitude, and joy that defines Col. Brown Cambridge School's community.</p>


        <p style="margin-bottom: 10px;">– Arpan Joel</p>
      </div>`,
  },
  {
    id: 6,
    date: "February 19, 2024",
    images: [
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/02/migratory-bird1.jpg",
      "https://www.colbrownschool.com/cbs/wp-content/uploads/2024/02/migratory-bird2.jpg",
    ],
    title: "Migratory Bird Watching at Asan Barrage",
    excerpt:
      "Uttarakhand's Asan Barrage, a Ramsar site, is a birding haven in winters, hosting migrating birds from Central Asia, Northern Asia and Europe.",
    fullContent: `<div>
        <p style="margin-bottom: 10px;">Uttarakhand's Asan Barrage, a Ramsar site, is a birding haven in winters, hosting migrating birds from Central Asia, Northern Asia and Europe. On 9th February, under the Wipro Earthian program, 25 students from Col Brown Cambridge School along with their teachers, were taken for birding at Asan Barrage by Nature Science Initiative (NSI). The students spotted migratory birds such as the Red Crested Pochard, Tufted Duck, Common Pochard, Ruddy Shelduck, Eurasian Coot among other species.</p>

        <p style="margin-bottom: 10px;">The NSI team explained to the students why birds migrate, the role of wetlands as important bird habitats and how to conserve them. The students were encouraged to document the birds seen and make checklists. Through such engagements students learn about local biodiversity and nature based careers.</p>

        <p style="margin-bottom: 10px;">Dr. Soumya Prasad and Riddhima Karwa from NSI were resource persons for the sessions. Dr.Shruti Sharma, senior IFS was also present. She gave her valuable inputs to the students and sensitized them on issues like wildlife conservation. It was an enriching experience for the boys.</p>
      </div>`,
  },
];

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
