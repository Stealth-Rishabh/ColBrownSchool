import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/about/message-banner.jpg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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

const MessageFromManagement = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/message-from-management", label: "About" },
    { label: "Message From Management" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Message"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <Heading
            title="Leadership Insights"
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
          subtitleClassName="text-gray-700"
          className="pt-12 mx-auto"
          />
          <LeadershipMessage />
        </Container>
      </section>
    </section>
  );
};

export default MessageFromManagement;

const leadershipData = [
  {
    id: 1,
    name: "Ms. Indubala Singh",
    position: "Proctor",
    image:
      "https://cbs.edustoke.com/wp-content/uploads/2024/11/rani-indubala-singh.jpg",
    message: `A 97-year school, Col Brown Cambridge School, has come a long way. It started in 1926 primarily for Indian Boys during the pre-Independence era; the alumni then, as today, belonged to distinguished families. The boys joined at the age of 5 and 6 years, and by the time they left, they were well-turned-out gentlemen. People preferred to send their boys to a boarding school to learn a disciplined life, and I must add here that that is the need of the hour. Today, children need boarding school more than before – here they are safe from many outside influences. We strongly believe in the values of truth, honesty, respect for the elderly, for parents, family, to respect women, and the law of the land.
    
    These values are the core of the Indian society. Our boys can relate to all these core values right from the beginning and we find that they have done exceedingly well in life today. They are in the armed forces, civil services, research, medicine, engineering, business, construction and education.You will find a Brownian in every nook and corner of the world. I hope that they will remember all that has been taught to them and our Late Principal Col (Dr.) T.F. O’Donells words that sums up our life “Eat well, sleep well, work hard, play hard, above all be a gentleman”.`,
  },
  {
    id: 2,
    name: "Mr. S.K. Tyagi",
    position: "Headmaster",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/sk-tyagi.jpg",
    message: `These values are the core of Indian society. Our boys can relate to all these core values right from the beginning, and we find that they have done exceedingly well in life today. They are in the armed forces, civil services, research, medicine, engineering, business, construction, and education. You will find a Brownian in every nook and corner of the world. I hope that they will remember all that has been taught to them and our Late Principal Col (Dr.) T.F. O’Donnell's words that sum up our life: “Eat well, sleep well, work hard, play hard, above all be a gentleman.”
    
    This year we have completed 97 years and remember with affection those who have come before us. Col. Brown School is a lifetime experience whether you are a student or a teacher. At a personal level, I have received more than I probably have given. The journey has been eventful, full of incidents and happenings – I cherish all of them; they have indeed become fond memories. None of it would have been possible without my boys, cooperative parents, and wonderful staff.`,
  },
];

const LeadershipMessage = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              className="w-full h-64 sm:h-80 duration-300 aspect-square object-cover"
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
                <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-700  to-gray-950 text-white">
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
                        <Button variant="">Close</Button>
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
