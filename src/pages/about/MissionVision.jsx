import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
import FacultyStaffSection from "./FacultyStaffSection";
// import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
const MissionVision = () => {
  // const breadcrumbItems = [
  //   { href: "/", label: "Home" },
  //   { href: "/about/mission-vision", label: "About" },
  //   { label: "Mission Vision" },
  // ];
  return (
    <section>
      {/* <ImgAndBreadcrumb
        title="Mission Vision"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      /> */}
      <section className=" relative z-10">
        {/* <Container> */}
          <Heading
            title="Our Mission and Vision"
            titleClassName="text-green-950 lg:text-5xl text-3xl lg:font-semibold font-bold"
            // subtitle="We strive to foster an inclusive environment that empowers individuals and promotes shared success."
            subtitleClassName="text-gray-600"
            className="pt-12 mx-auto lg:pb-10"
          />
          <LeadershipMessage />
        {/* </Container> */}
        {/* <div className="mx-auto bg-gray-50 py-12">
          <FacultyStaffSection />
        </div> */}
        {/* <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-gray-500 -z-10"
        /> */}

        {/* <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
      </section>
    </section>
  );
};

export default MissionVision;

const leadershipData = [
  {
    id: 1,
    name: "Col. T.F.O' Donnell",
    position: "Principal",
    image:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/dr-t-f-o-donnell-2-1.jpg",
    message: `Within a year or so Col. T.F. O'Donnell took over the school and the Cleaves left for Ireland. Col. T.F. O'Donnell carried on the good work. He was an erudite scholar and was partial toward literary writing which consumed most of his time. He wrote and published many books, some of which were taught in schools around the country. Two of his well-known works, "The Adventures of an SP" and "Cockpit of the East" are major literary works. The original manuscripts are preserved and kept in the library.

    The Second World War (1939 to 1945) saw the alumni of the school in action in Africa, Europe and the South East. With the end of the war, the political climate of the country started changing rapidly with the partition in 1947. The school suffered its 1st major blow as friends were ripped apart, for approximately 40% of the boys left to become the citizens of the newly formed State of Pakistan. The school saw gradual changes both in the staff and the students; by 1960 Mrs. 0′ Donnell, Mr. McIntosh the Vice-Principal and Col. 0'Donnell passed away; and by 1965 none of the European staff was left.`,
  },
  {
    id: 2,
    name: "Subedar Bhagwat Singh",
    position: "Bursar",
    image:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/subedar-bhagwat-singh.jpg",
    message: `Great contribution to the school was made by Kenneth Henry McIntosh, the Vice-Principal and in-charge of senior classes. It is to his credit that he inculcated in his students a love and interest for most co-curricular activities. Besides teaching English, he was the soft side of discipline and was the major balancing factor in a highly regimented school.

    After his death, his sister Dora McIntosh, Head Mistress of the Preparatory Department, migrated and settled down in Surrey. In 1958 Col. T.F. O'Donnell and the managing committee of the school appointed Mr. Narendra Singh as the Vice-Principal. Mr. Narendra Singh had joined the school in 1937. Earlier Subedar Bhagwat Singh had joined in 1935 as assistant to Cleave and became the Bursar in the forties after Major Cleave left, and remained so till his death in August 1960.`,
  },
  {
    id: 3,
    name: "Mr. Narendra Singh",
    position: "Principal",
    image:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/narender-singh.jpg",
    message: `With the death of Col. O'Donnell on 26th January 1960, the administration of the school was held by an Indian since Mr. Narendra Singh had already taken over as the Principal because of the Colonel's failing health. Both Subedar Bhagwat Singh and Narendra Singh had served in the Army together and were keen sportsmen. Mr. Narendra Singh studied at BHU from where he took his Masters in English.

    An excellent player and an avid fan of hockey, he was known to promote the sport both in school and U.P. A stickler for discipline, he believed in the ancient adage- 'Spare the rod and spoil the child'. Many old students 'fondly' remember that.`,
  },
  {
    id: 4,
    name: "Mr. Abhai Singh",
    position: "Principal",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/abhy-singh.jpg",
    message: `It would be unfair to the school motto, 'Truth is Great ', not to report that for reasons beyond comprehension the school progress did not only come to a stand-still but over the next fifteen years witnessed a slide backwards.

    The school went through very dark and trying times from 1969 to 1976, when the process of regeneration was set in motion. In 1976, Mr. Abhai Singh took over the reins of C.B.S. on his return from Canada after the death of Mr. Narendra Singh. An ex-Brownian, well-travelled, a keen sportsman, a voracious reader and a strong believer in the dignity of human labour, Mr. Abhai Singh's task was not an easy one. It is to his credit that he modernised living facilities for the boys and staff alike: he restructured the Dining Hall, the Library, and the Computer Lab; constructed new and better hostels like Ireland House, Patel House, Col. House, White House, Kitchner Block, and McIntosh House; created an open-air theatre: the Tamarind Theatre; and added underground water tanks to resolve the perennial water shortages.

    In order to protect his identity and to keep up with the changing times, new sets of clothes have been issued to the boys to be worn on different occasions. The boys just love their CBS T-shirts. In all the changes that have taken place, academics is given due importance. A dedicated competent staff helps the school achieve 100% result each year.`,
  },
];

const LeadershipMessage = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 relative z-1000">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {leadershipData.map((leader, index) => (
          <motion.div
            key={leader.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={leader.image || "/placeholder.svg"}
              alt={leader.name}
              className="w-full h-96 sm:brightness-75 sm:hover:brightness-100 duration-300 aspect-square object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-600 mb-4">{leader.position}</p>
              <Drawer
                open={openDrawer === leader.id}
                onOpenChange={(isOpen) =>
                  setOpenDrawer(isOpen ? leader.id : null)
                }
              >
                <DrawerTrigger asChild>
                  <Button className="w-full group">
                    <MessageCircle className="mr-1 h-4 w-4 mt-1 group-hover:rotate-[5deg] duration-300" />
                    Read Message
                    <motion.div
                      className="group-hover:ml-2 duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4 mt-1" />
                    </motion.div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-900  to-gray-950 text-white">
                  <motion.div
                    className="mx-auto w-full max-w-sm sm:max-w-2xl max-h-[90vh] "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DrawerHeader>
                      <DrawerTitle className="text-2xl font-bold text-left sm:text-center text-white">
                        {leader.name}
                      </DrawerTitle>
                      <DrawerDescription className="text-lg font-semibold text-left sm:text-center text-white/80">
                        {leader.position}
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0 text-white/90">
                      <p className=" text-justify max-h-[500px] overflow-y-auto scrollbar-hide scroll-smooth">
                        {leader.message.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button className="bg-white text-gray-950 hover:bg-gray-100 active:scale-95 duration-300 ">
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </motion.div>
                </DrawerContent>
              </Drawer>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
