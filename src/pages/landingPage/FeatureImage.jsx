import Container from "../../components/wrappers/Container";
import boarding from "../../assets/landing/boarding.webp";
import academics from "../../assets/landing/academics.webp";
import sports from "../../assets/landing/sports.webp";
import coCurricular from "../../assets/landing/co-curricular.webp";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

const FeatureImage = () => {
  const data = [
    {
      title: "Boarding Life",
      image: boarding,
      path: "/boarding",
    },
    {
      title: "Academics",
      image: academics,
      path: "/academic",
    },
    {
      title: "Sports",
      image: sports,
      path: "/sports",
    },
    {
      title: "Co-Curricular",
      image: coCurricular,
      path: "/co-curricular",
    },
  ];

  return (
    <Container className="-mt-20 md:-mt-40 z-10 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 group lg:grid-cols-4 sm:gap-0 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x: index % 2 === 0 ? -50 : 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[3/4] duration-300 transition-all hover:scale-[0.99] overflow-hidden rounded-t-2xl shadow-2xl sm:shadow-lg"
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="absolute z-10 bottom-0 left-0 right-0 p-4 flex flex-col gap-4 -mb-14 duration-300 transition-all group-hover:mb-0 items-center justify-center"
            >
              <p className="text-white sm:text-2xl text-lg font-bold tracking-wider">
                {item.title}
              </p>
              <Button className="group">
                <p className="text-white text-lg font-bold">Learn More</p>
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureImage;
