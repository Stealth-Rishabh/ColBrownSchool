import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/about/logo.png";
import PropTypes from 'prop-types';

const CrestElement = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.img
        src={logo}
        alt="logo"
        style={{ filter: isHovered ? "drop-shadow(0 0 5px #ffd700)" : "drop-shadow(0 0 5px #006400)" }}
        className="transition-transform duration-300 w-full h-[300px]"
      />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <span className="text-black text-xs">{title}</span>
        </motion.div>
      )}
    </div>
  );
};

CrestElement.propTypes = {
  title: PropTypes.string.isRequired,
};

const CrestAndMotto = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl text-gray-800 font-semibold mb-4">The Crest and Motto</h2>
            <p className="mb-4">
              The CBS crest is a symbol of our rich heritage and values. Each
              element represents a core aspect of our institution:
            </p>
            <ul className="list- list-inside mb-4 font-medium">
              <li>The Lion: Courage and strength</li>
              <li>The Shamrock: Good fortune and the Trinity</li>
              <li>The Torch: Knowledge and enlightenment</li>
            </ul>
            <p className="mb-4">
              Our motto, &quot;Magna Est Veritas&quot; (Truth is Great), encapsulates the
              foundational principle upon which CBS was built. It reminds us to
              always seek and uphold the truth in all our endeavors.
            </p>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="relative flex flex-col items-center h-full w-full justify-center" >
              <CrestElement
                // title="Lion"
              />
              <p className="text-black/80 text-base font-semibold mt-4">Magna Est Veritas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrestAndMotto;
