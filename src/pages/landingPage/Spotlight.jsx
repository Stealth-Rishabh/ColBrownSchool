import { motion } from "framer-motion";
import spotlight from "../../assets/landing/spotlight.webp";
import Container from "../../components/wrappers/Container";

export default function Spotlight() {
  return (
    <section className="bg-[#E4E4E4]">
      <Container>
        <div className="relative">
          <div className="grid md:grid-cols-2 sm:gap-16 gap-5 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="aspect-square max-h-[450px] mx-auto relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={spotlight}
                  alt="Aerial view of Col. Brown School campus"
                  className="object-contain h-full w-full"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="space-y-1 after:h-[3px] after:w-10/12 after:bg-green-700/90 after:rounded-full after:inline-block after:mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span
                  className="block sm:text-3xl text-xl font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  A Spotlight on
                </motion.span>
                <motion.span
                  className="block sm:text-4xl text-3xl   font-bold text-red-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Col Brown School Alumni
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-gray-600 leading-relaxed sm:text-xl text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Colonel Brown Cambridge School was founded in March 1926 by Col.
                William Brown, specifically for Indian boys. This
                institution is an English medium residential school that
                embraces all boys, irrespective of their caste, creed, or social
                status.
              </motion.p>

              <motion.p
                className="text-gray-600 leading-relaxed sm:text-xl text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                The school is renowned among educational institutions in India,
                recognized as one of the premier ICSE boarding schools in
                Dehradun. It draws students not only from various parts of India
                but also from across the globe.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
