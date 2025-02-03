import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Parallax } from "react-parallax";
import img from "../../assets/landing/bg1.webp";
import { Link } from "react-router-dom";
const VisionLivesOn = () => {
  return (
    <Parallax
      bgImage={img}
      bgImageAlt="Vision Lives On"
      bgImageStyle={{ filter: "sepia(0.7) brightness(0.7)" }}
      strength={500}
      className="h-[60vh] sm:min-h-screen flex items-center object-cover justify-center"
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white relative z-10 max-w-4xl mx-auto p-6"
      >
        <h2 className="text-4xl md:text-5xl   mb-4">The Vision Lives On</h2>
        <p className="text-sm sm:text-xl mb-8">
          CBS continues to uphold the values and principles of its founders,
          adapting to modern educational needs while preserving its rich
          heritage.
        </p>
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <Button size="lg">Discover CBS Today</Button>
        </Link>
      </motion.div>
    </Parallax>
  );
};

export default VisionLivesOn;
