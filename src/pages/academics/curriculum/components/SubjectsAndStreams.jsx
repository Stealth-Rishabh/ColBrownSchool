"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subjects = {
  preparatory: {
    note: `<strong>Note:</strong> In class VI the students have the option to choose any one of the following languages:<ol type="1">
    <li class="font-bold">Urdu</li>
    <li class="font-bold">Punjabi</li>
    <li class="font-bold">Sanskrit</li>
    <li class="font-bold">French</li>
  </ol>
`,

    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Sciences"],
  },
  seniorMiddleScience: {
    note: "",
    subjects: [
      "English",
      "Hindi/Urdu/Punjabi",
      "History",
      "Geography",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer/Physical Education/Art/Yoga",
    ],
  },
  seniorMiddleCommerce: {
    note: "",
    subjects: [
      "English",
      "Hindi/Urdu/Punjabi",
      "History",
      "Geography",
      "Mathematics/Economics",
      "Commercial studies",
      "Computer/Physical Education/Art/Yoga",
    ],
  },
  seniorSecondaryScience: {
    note: "",
    subjects: [
      "English",
      "Physics",
      "Chemistry",
      "Mathematics/Biology",
      "Computer/Physical Education/Art/Yoga",
      "Education/Hindi/Psychology/Art",
    ],
  },
  seniorSecondaryCommerce: {
    note: "",
    subjects: [
      "English",
      "Accounts",
      "Commerce",
      "Economics",
      "Mathematics/Physical Education/Hindi/Psychology/Art",
    ],
  },
  seniorSecondaryHumanities: {
    note: "",
    subjects: [
      "English",
      "History",
      "Geography/Economics",
      "Political Science",
      "Physical Education/Hindi/Psychology/Art",
    ],
  },
};

export default function SubjectsAndStreams() {
  const [activeTab, setActiveTab] = useState("preparatory");

  const tabLabels = {
    preparatory: "Junior School (IV-VIII)",
    seniorMiddleScience: "Science (IX-X)",
    seniorMiddleCommerce: "Commerce (IX-X)",
    seniorSecondaryScience: "Science (XI-XII)",
    seniorSecondaryCommerce: "Commerce (XI-XII)",
    seniorSecondaryHumanities: "Humanities (XI-XII)",
  };
  return (
    <section id="subjects-and-streams" className="py-12 md:py-16 bg-slate-400">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-green-950 mb-6 md:mb-8 text-center">
          Subjects and Streams
        </h2>
        <div className="flex flex-wrap justify-center mb-6 md:mb-8">

          {Object.keys(subjects).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 md:px-4 md:py-2 m-1 md:mx-2 text-sm md:text-base rounded-full ${
                activeTab === tab
                  ? "bg-green-900 text-white"
                  : "bg-white text-green-950"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {subjects[activeTab].subjects.map((subject, index) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-green-950 mb-2 break-words">
                  {subject}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 text-left">
          <div
            className="text-lg text-gray-800 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mt-2"
            dangerouslySetInnerHTML={{ __html: subjects[activeTab].note }}
          />
        </div>
      </div>
    </section>
  );
}
