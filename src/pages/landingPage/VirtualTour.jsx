import Container from "../../components/wrappers/Container";
import hostel from "../../assets/boarding-life/Hostel (2).webp";
import atheletics from "../../assets/landing/Athelete.webp";
import student from "../../assets/landing/Alumni.jpg";
import news from "../../assets/landing/news-events.jpg";
import student2 from "../../assets/landing/Facility.webp";
import logo from "../../assets/landing/360-view.gif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VirtualTour = () => {
  const cardVariants = (delay) => ({
    initial: { rotateY: 0 },
    animate: {
      rotateY: 360,
      transition: {
        duration: 1.2,
        delay,
        ease: "easeInOut",
      },
    },
  });

  return (
    <Container className="pb-0 lg:pb-0">
      <div className="grid sm:grid-cols-4">
        <Link
          to="/boarding-life/hostel"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
            variants={cardVariants(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={hostel}
              alt=""
              className="object-cover w-full h-full scale-105"
            />
          </motion.div>
        </Link>

        <Link
          to="/boarding-life/hostel"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden bg-green-900 h-60 flex items-center justify-center"
            variants={cardVariants(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl font-light font-mono">Hostel</h1>
          </motion.div>
        </Link>

        <Link
          to="/boarding-life/sports-at-cbs"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
            variants={cardVariants(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={atheletics}
              alt=""
              className="object-cover w-full h-full scale-105"
            />
          </motion.div>
        </Link>

        <Link
          to="/boarding-life/sports-at-cbs"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden bg-red-900 h-60 flex items-center justify-center"
            variants={cardVariants(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl font-light font-mono">
              Atheletics
            </h1>
          </motion.div>
        </Link>

        <Link
          to="/about/infrastructure"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden bg-gray-800 h-60 flex items-center justify-center"
            variants={cardVariants(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl font-light font-mono">
              Facilities
            </h1>
          </motion.div>
        </Link>

        <motion.div
          className="sm:col-span-2 overflow-hidden  grid justify-center items-center"
          variants={cardVariants(1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={logo} alt="" className="h-32" />
            <p className="sm:text-2xl font-semibold text-center font-mon p-6">
              Take a Virtual Tour 360° view
            </p>
          </div>
        </motion.div>
        <Link
          to="/beyond-classroom/news-and-events"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
            variants={cardVariants(1.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={news}
              alt=""
              className="object-cover w-full h-full scale-105"
            />
          </motion.div>
        </Link>

        <Link
          to="/about/infrastructure"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
            variants={cardVariants(1.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={student2}
              alt=""
              className="object-cover w-full h-full scale-105"
            />
          </motion.div>
        </Link>

        <Link
          to="/alma-mater"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden bg-red-900 h-60 flex items-center justify-center"
            variants={cardVariants(1.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl font-light font-mono">Alumni</h1>
          </motion.div>
        </Link>
        <Link
          to="/alma-mater"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
            variants={cardVariants(1.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={student}
              alt=""
              className="object-cover w-full h-full scale-105"
            />
          </motion.div>
        </Link>
        <Link
          to="/beyond-classroom/news-and-events"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.div
            className="overflow-hidden bg-green-800 h-60 flex items-center text-center justify-center"
            variants={cardVariants(2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl font-light font-mono">
              School <br /> News & Updates
            </h1>
          </motion.div>
        </Link>
      </div>
    </Container>
  );
};

export default VirtualTour;
