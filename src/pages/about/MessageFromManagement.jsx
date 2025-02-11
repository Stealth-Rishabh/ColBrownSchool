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
import { ScrollArea } from "@/components/ui/scroll-area";

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
    message: `The Proctor Mrs.Indu Bala Singh is a dynamic and compassionate lady, who expertly balances administration acumen with a warm child-centered approach.

As a seasoned educator and skilled administrator she has earned the respect A and admiration of both staff and students alike.

A firm believer in the importance of holistic development, she encourages our students to excel not only academically but also in sports and extracurricular activities. She fosters a spirit of friendly competition and teamwork in our children.

Under her expert guidance the school is thriving and our students are growing to be confident, well rounded individuals`,
  },
  {
    id: 2,
    name: "Mr. S.K. Tyagi",
    position: "Headmaster",
    image: "https://cbs.edustoke.com/wp-content/uploads/2024/11/sk-tyagi.jpg",
    message: `Our Headmaster Mr.S.K.Tyagi, is an esteemed member of the educational fraternity, a committed teacher, a pillar of strength and a driving force behind the school's growth and success. A visionary educator, he is always looking towards the future, seeking innovative and forward-looking schemes to enrich the educational experience of our children. His tireless efforts to stay ahead of the curve has enabled our school to remain at the very forefront of educational excellence. This reflects not just in the children's educational endeavours but also in the various co-curricular and extra-curricular activities that they participate in.`,
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
                <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white h-[60vh]">
                  <motion.div
                    className="mx-auto w-full max-w-sm sm:max-w-2xl h-full"
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
                    <ScrollArea className="h-[32vh] px-4">
                      <div className="text-white/90">
                        <p className="text-justify">
                          {leader.message.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>
                    </ScrollArea>
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
