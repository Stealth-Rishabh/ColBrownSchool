import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Heading from "../../../../components/Heading";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="sm:py-20 py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-center gap-4 mb-6"
        >
          <span className="w-10 h-10 hidden sm:block">
            <PhoneCall className="sm:w-10 sm:h-10 w-5 h-5 mt-2 text-green-950" />
          </span>
          <h2 className="sm:text-5xl text-3xl font-extrabold text-green-950">
            Ready to Shape Your Future?
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sm:text-xl text-base mb-8 text-green-950"
        >
          Get in touch with our expert career counselors and take the first step
          towards a bright future.
        </motion.p>
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-green-900 to-green-950 text-gray-50 px-8 py-3 rounded-full text-lg font-semibold hover:from-green-950 hover:to-black transition duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
