import Container from "../../components/wrappers/Container";
import { motion } from "framer-motion";

export default function AboutCBB() {
  return (
    <>
      <Container className="lg:py-12">
        {/* <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto"> */}
        <div className="flex flex-wrap items-center justify-between ">
          <motion.div
            className="w-full px-4 lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center -mx-3 sm:-mx-4">
              <motion.div
                className="w-full px-3 sm:px-4 xl:w-1/2"
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
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover"
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
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover"
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
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full px-4 lg:w-1/2 xl:w-5/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mt-10 lg:mt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="block mb-2 text-lg font-semibold text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                About the Legacy of
              </motion.span>
              <motion.h2
                className="mb-5 text-4xl font-bold text-dark dark:text-white sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Col. Brown School
              </motion.h2>
              <motion.p
                className="mb-5 text-lg text-body-color dark:text-dark-6 text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Colonel Brown Cambridge School was established in March 1926 by
                Col. William Brown and Mrs. Brown for Indian boys. It is an
                English medium residential school, welcoming all boys regardless
                of caste, creed, or social status.
              </motion.p>
              <motion.p
                className="mb-8 text-lg text-body-color dark:text-dark-6 text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                The school holds a prestigious place among educational
                institutions in India, being one of the top ICSE boarding
                schools in Dehradun. It attracts students not only from across
                India but also from around the world.
              </motion.p>
              <motion.a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* </div>
      </section> */}
      </Container>
    </>
  );
}