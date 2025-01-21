import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Parallax } from "react-parallax"
import { Briefcase, GraduationCap, Globe, Languages } from "lucide-react"

const CareerCounselling = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const Section = ({ title, children, icon, bgColor }) => (
    <motion.section
      ref={ref}
      className={`py-20 px-4 ${bgColor}`}
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          {icon}
          <h2 className="text-4xl font-bold ml-4 text-gray-800">{title}</h2>
        </div>
        {children}
      </div>
    </motion.section>
  )

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://source.unsplash.com/random/1920x1080?school,counselling"
        strength={500}
        className="h-screen"
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <motion.h1
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Career Counselling
            </motion.h1>
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Guiding You Towards a Bright Future
            </motion.p>
          </div>
        </div>
      </Parallax>

      {/* Introduction */}
      <Section title="Our Approach" icon={<Briefcase className="text-5xl text-blue-600" />} bgColor="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Welham Boys' School, we understand the importance of professional career advice in today's rapidly
            changing work environment. Our career counselling program is designed to inform academic choices, train
            students to seek thrill in their field of inquiry, and prepare them for the future while keeping an open
            mind.
          </p>
        </div>
      </Section>

      {/* Workshops */}
      <Section
        title="Career Workshops"
        icon={<GraduationCap className="text-5xl text-green-600" />}
        bgColor="bg-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "Subject Choices and their Implications on Careers",
            "Subject Streams and their Possibilities",
            "Importance of Parental Support in Career Decisions",
            "Overview of Careers and Career Pathways",
            "Applying Abroad and in India",
          ].map((workshop, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{workshop}</h3>
              <p className="text-gray-600">Gain insights and make informed decisions about your future.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Facilitation */}
      <Section title="Test Facilitation" icon={<Globe className="text-5xl text-purple-600" />} bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "IELTS (International English Language Testing System)",
            "TOEFL (Test of English as a Foreign Language)",
            "SAT (Scholastic Aptitude Test)",
            "SAT Subject Tests",
            "CLAT (Common Law Admission Test)",
            "Aptitude Test for Class X",
            "Personal Essay Writing",
            "Statement of Purpose (SOP) Guidance",
            "Curriculum Vitae (CV) Preparation",
          ].map((test, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-center text-gray-800 font-medium">{test}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* University Connections */}
      <Section
        title="Global University Connections"
        icon={<Globe className="text-5xl text-red-600" />}
        bgColor="bg-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We have established strong relationships with universities worldwide, organizing visits and tours to provide
            our students with firsthand experience and information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                country: "United Kingdom",
                universities: [
                  "Kings College, London",
                  "Durham University",
                  "Edinburgh University",
                  "University of Birmingham",
                ],
              },
              {
                country: "United States",
                universities: [
                  "Stanford University",
                  "University of California",
                  "Purdue University",
                  "Fordham University",
                ],
              },
              {
                country: "Canada",
                universities: [
                  "University of Toronto",
                  "University of British Columbia",
                  "University of Waterloo",
                  "McGill University",
                ],
              },
            ].map((region, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{region.country}</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {region.universities.map((uni, i) => (
                    <li key={i}>{uni}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Foreign Languages */}
      <Section
        title="Foreign Language Program"
        icon={<Languages className="text-5xl text-yellow-600" />}
        bgColor="bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Welham Boys' School, we offer a robust Foreign Language Program including French, German, and Sanskrit.
            Our curriculum follows the 'Common European Framework of Reference' from levels A1 to C2.
          </p>
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Benefits of Learning Foreign Languages</h3>
            <ul className="text-left list-disc list-inside">
              <li>Increased listening ability</li>
              <li>Enhanced memory and creativity</li>
              <li>Improved critical thinking skills</li>
              <li>Exposure to diverse world views</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl mb-8">
            Take the first step towards a successful career. Schedule a counselling session today!
          </p>
          <motion.button
            className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Welham Boys' School</h3>
            <p>Nurturing Future Leaders Since 1937</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>5, Circular Road, Dalanwala, Dehradun - 248001</p>
            <p>Phone: +91-135-2656000</p>
            <p>Email: info@welhamboys.org</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Academics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Life
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CareerCounselling
