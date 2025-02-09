import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/news-events.jpeg";
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



const images = [
  "https://pagedone.io/asset/uploads/1696244317.png",
  "https://pagedone.io/asset/uploads/1696244340.png",
  "https://pagedone.io/asset/uploads/1696244356.png"
];

// Complete event data from paste.txt

const eventData = [
  {
    id: 1,
    date: "Nov 27, 2024",
    image: images[0],
    title: "Ashwani Rinwa Obituary",
    excerpt: "We are deeply grieved to inform you about the sad demise of Ashwani Rinwa of batch of 1973.",
    fullContent: "We are deeply grieved to inform you about the sad demise of Ashwani Rinwa of batch of 1973, on the 22nd of November 2024."
  },
  {
    id: 2,
    date: "Oct 21, 2024",
    image: images[1],
    title: "Sri. Vijay Kumar Farshwal Obituary",
    excerpt: "With profound grief and sorrow we inform you about the sudden demise of Sri. Vijay Kumar Farshwal.",
    fullContent: "With profound grief and sorrow we inform you about the sudden demise of Sri. Vijay Kumar Farshwal, Advocate, an alumni of batch 1965, who left for his heavenly abode on 9th October 24."
  },
  {
    id: 3,
    date: "Oct 05, 2024",
    image: images[2],
    title: "Col. Brown Cambridge School Top Rating",
    excerpt: "Col. Brown Cambridge School rated amongst the top Boarding Schools in North India.",
    fullContent: "The recognition of Col. Brown Cambridge School as one of the top Boarding School in North India is a validation of the unstinting efforts put in by the Staff and employees lead by a devoted Headmaster and its beloved students."
  },
  {
    id: 4,
    date: "May 18, 2024",
    image: images[0],
    title: "Wipro Earthian Award Ceremony",
    excerpt: "Wipro Earthian Ceremony and Open day organized at Him Jyoti School.",
    fullContent: "Wipro Earthian Ceremony and Open day was organized by Nature Science Initiative at Him Jyoti School on Saturday 11th May 2024"
  },
  {
    id: 5,
    date: "Apr 05, 2024",
    image: images[1],
    title: "Farewell Party Report for Class 12th",
    excerpt: "The farewell party for the Class 12th students of Col. Brown Cambridge School.",
    fullContent: "The farewell party for the Class 12th students of Col. Brown Cambridge School was held on January 25, 2024"
  },
  {
    id: 6,
    date: "Feb 19, 2024",
    image: images[2],
    title: "Migratory Bird Watching at Asan Barrage",
    excerpt: "Uttarakhand's Asan Barrage hosts migrating birds from Central Asia.",
    fullContent: "Uttarakhand's Asan Barrage, a Ramsar site, is a birding haven in winters, hosting migrating birds from Central Asia, Northern Asia and Europe."
  },
  {
    id: 7,
    date: "Nov 28, 2023",
    image: images[0],
    title: "Obesity a global epidemic",
    excerpt: "Obesity, which is recognized as a global epidemic by the WHO, claims over 4 million lives annually.",
    fullContent: "Obesity, which is recognized as a global epidemic by the WHO, claims over 4 million lives annually."
  },
  {
    id: 8,
    date: "Oct 31, 2023",
    image: images[1],
    title: "CBS'MUN Report 2023",
    excerpt: "It is a great pleasure to bring a report of the second edition of CBS'MUN 2023.",
    fullContent: "It is a great pleasure to bring a report of the second edition of CBS'MUN 2023."
  },
  {
    id: 9,
    date: "Oct 03, 2023",
    image: images[2],
    title: "Butterfly walk",
    excerpt: "On 2nd October 23 the School organized a programme of Biodiversity.",
    fullContent: "On 2nd October 23 the School organized a programme of Biodiversity. Mr.Sanjai Sondhi graced the occasion."
  },
  {
    id: 10,
    date: "Oct 03, 2023",
    image: images[0],
    title: "SUPW Activity",
    excerpt: "Cleaning and organizing is a practice not a project.",
    fullContent: "'Cleaning and organizing is a practice not a project '. Putting the aforementioned statement into action, on 1st October, 2023 in wake of SUPW activity the school organized a cleanliness drive."
  },
  {
    id: 11,
    date: "Sep 25, 2023",
    image: images[1],
    title: "Inter House Football Final 23",
    excerpt: "The Final of Inter House Football match between Bursar House and Headmaster house.",
    fullContent: "The Final of Inter House Football match between Bursar House and Headmaster house was played at Col. Brown School grounds on A field. The student's participated enthusiastically."
  },
  {
    id: 12,
    date: "Apr 29, 2023",
    image: images[2],
    title: "SJA, Col Brown Cambridge School lift Heritage School Invitational Table Tennis Trophies",
    excerpt: "The final matches of the Heritage School Invitational Inter School Junior and Senior Boys' Table Tennis Tournament 2023.",
    fullContent: "The final matches of the Heritage School Invitational Inter School Junior and Senior Boys' Table Tennis Tournament 2023 were played on 29 April."
  },
  {
    id: 13,
    date: "Apr 20, 2023",
    image: images[0],
    title: "Col. Brown 81st Death Anniversary",
    excerpt: "Keeping alive the vision, the value and memories of Col. Brown in our hearts and minds.",
    fullContent: "Keeping alive the vision, the value and memories of Col. Brown in our hearts and minds, flowers were laid on his grave at the cemetery on his 81st Death Anniversary (18th April 23)"
  },
  {
    id: 14,
    date: "Apr 13, 2023",
    image: images[1],
    title: "Annual Prize Distribution Ceremony 2023",
    excerpt: "The Annual Prize Distribution Ceremony was conducted on 5th April 2023.",
    fullContent: "The Annual Prize Distribution Ceremony was conducted on 5th April 2023, Wednesday. The Chief Guest was Lt. Col. Ravi Kumar Tyagi, an alumnus of Col. Brown Cambridge School."
  },
  {
    id: 15,
    date: "Mar 30, 2023",
    image: images[2],
    title: "Wipro Earthian Regional Award in Uttarakhand 2023",
    excerpt: "Col. Brown School carries away the WIPRO EARTHIAN REGIONAL AWARD IN UTTRAKHAND 2023.",
    fullContent: "Col. Brown School carries away the WIPRO EARTHIAN REGIONAL AWARD IN UTTRAKHAND 2023. Wipro organised a competition based upon waste management."
  },
  {
    id: 16,
    date: "Mar 17, 2023",
    image: images[0],
    title: "Inter House PT Competition",
    excerpt: "Col. Brown School encourages Physical Training in children.",
    fullContent: "Col. Brown School encourages Physical Training in children as it prepares them for their future by strengthening them internally so that they can take any challenge head on."
  },
  {
    id: 17,
    date: "Mar 15, 2023",
    image: images[1],
    title: "Earthquake – Preparedness Drills",
    excerpt: "All work and no entertainment would make our children dull.",
    fullContent: "All work and no entertainment would make our children dull."
  },
  {
    id: 18,
    date: "Mar 09, 2023",
    image: images[2],
    title: "The School goes for a movie, Shahzada",
    excerpt: "All work and no entertainment would make our children dull.",
    fullContent: "All work and no entertainment would make our children dull."
  },
  {
    id: 19,
    date: "Feb 28, 2023",
    image: images[0],
    title: "Nestled in Dalanwala locality of Dehradun Col. Brown School",
    excerpt: "Col. Brown School offers a green campus which is a bird watchers paradise.",
    fullContent: "Nestled in Dalanwala locality of Dehradun Col. Brown School offers a green campus which is a bird watchers paradise."
  },
  {
    id: 20,
    date: "Feb 15, 2023",
    image: images[1],
    title: "Athletic Tea Party of Headmaster House",
    excerpt: "Headmaster House being the proud winner of the Athletic 'Tala House' trophy.",
    fullContent: "Headmaster House being the proud winner of the Athletic 'Tala House' trophy hosted ä tea party on 15th February 2023."
  },
  {
    id: 21,
    date: "Oct 18, 2022",
    image: images[2],
    title: "Model United Nations at Col Brown Cambridge School",
    excerpt: "The Model United Nations is a platform to expose students the world over.",
    fullContent: "The Model United Nations is a platform to expose students the world over to broaden their horizon of social, economic and political understanding of different societies."
  },
  {
    id: 22,
    date: "Oct 07, 2022",
    image: images[0],
    title: "An Exciting Game of Soccer",
    excerpt: "An extremely exciting football match was witnessed on the lush green fields.",
    fullContent: "On 3rd October '2022, an extremely exciting football match was witnessed on the lush green fields of Col. Brown School."
  },
  {
    id: 23,
    date: "Oct 06, 2022",
    image: images[1],
    title: "Feather in the Cap of Ayaan Saeed",
    excerpt: "Ayaan Saeed has qualified for the equestrian round in Delhi.",
    fullContent: "Ayaan Saeed from grade IX (Principal House) has qualified for the equestrian round in Delhi and will go to Bhopal for Nationals in December."
  },
  {
    id: 24,
    date: "Oct 04, 2022",
    image: images[2],
    title: "Nature Trail",
    excerpt: "Like winds and sunsets, wild things were taken for granted until progress began to do away with them.",
    fullContent: "Like winds and sunsets, wild things were taken for granted until progress began to do away with them."
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
        <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-between lg:gap-8">
          {eventData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full overflow-hidden border border-gray-300 shadow-lg group max-lg:max-w-xl rounded-2xl"
              whileHover={{ translateY: -5, transition: { duration: 0.2 } }} // Changed scale to translateY effect
            >
              <div className="flex items-center">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="object-cover w-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50 ">
                <span className="block mb-3 font-medium text-green-700">
                  {event.date}
                </span>
                <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900 ">
                  {event.title}
                </h4>
                <p className="mb-10 leading-6 text-gray-500 line-clamp-2">
                  {event.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(event)}
                  className="flex items-center gap-1 text-lg font-semibold text-green-800 transition-colors cursor-pointer hover:text-green-700 group "
                >
                  Read more <ArrowRightIcon className="w-4 h-4 mt-1 transition-all duration-300 group-hover:translate-x-1" />
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
        <DrawerContent className="text-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950">
          {selectedEvent && (
            <motion.div
              className="mx-auto w-full max-w-sm sm:max-w-2xl max-h-[90vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
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
                <div className="w-full max-h-[60vh] flex justify-center mb-6">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="object-contain max-w-full max-h-full rounded-md"
                  />
                </div>

                <div className="mt-4 max-h-[20vh] sm:max-h-[60vh] overflow-y-auto">
                  <p className="mb-4 text-sm text-justify text-white/90">
                    {selectedEvent.fullContent}
                  </p>
                </div>
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="" className="text-black transition-all duration-300 bg-white hover:bg-white/90">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </motion.div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};
