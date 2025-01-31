import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import img1 from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { motion } from "framer-motion";
import about from "../../assets/boarding-life/Care5.jpg";
import green from "../../assets/landing/Integrity.jpg";
import nineteen from "../../assets/landing/respect.webp";

export default function Legacy() {
  return (
    <section className="bg-green-950">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-24">
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className="sm:text-lg font-medium text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Legacy
              </motion.p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                A Century of Excellence in Education
              </h1>
              <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                At Col Brown, we are dedicated to nurturing the minds of future
                leaders. Our mission is to foster a community of respect,
                integrity, and academic achievement.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  Core Values
                </h2>
                <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                  Integrity, Respect, Excellence, and Innovation guide our
                  educational philosophy.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  Educational Philosophy
                </h2>
                <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                  We believe in holistic development, preparing students for
                  real-world challenges.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="outline">Learn More</Button>
              <Button className="group border-white border">
                Sign Up{" "}
                <ArrowRightIcon className="w-4 h-4 mt-1 group-hover:ml-2 duration-300 transition-all" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full px-4 lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center -mx-3 sm:-mx-4">
              <motion.div
                className="w-full pr-3 sm:px-4 xl:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="py-3 sm:py-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.img
                    src={green}
                    alt=""
                    className="w-full rounded-2xl shadow-2xl aspect-square sm:h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="w-full px-3 sm:px-4 xl:w-1/2"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div className="relative z-10 my-4">
                  <motion.img
                    src={nineteen}
                    alt=""
                    className="w-full rounded-2xl  shadow-2xl aspect-square sm:h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  className="py-3 sm:py-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.img
                    src={about}
                    alt=""
                    className="w-full rounded-2xl shadow-2xl aspect-square sm:h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/* <motion.div
            className="flex-1 bg-gray-800 rounded-lg overflow-hidden drop-shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={img1}
              alt="Educational Excellence"
              className="object-cover scale-125 w-full h-full hover:scale-150 duration-300 transition-all"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}
