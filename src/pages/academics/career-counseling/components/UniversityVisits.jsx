import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin } from "lucide-react";
import Heading from "../../../../components/Heading";

const countries = [
  {
    name: "United Kingdom",
    icon: MapPin,
    universities: [
      "Kings College, London",
      "Durham University",
      "Edinburgh University",
    ],
  },
  {
    name: "United States",
    icon: Building2,
    universities: [
      "Stanford University",
      "University of California",
      "Purdue University",
    ],
  },
  {
    name: "Canada",
    icon: GraduationCap,
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
    ],
  },
];

export default function UniversityVisits() {
  return (
    <section className="sm:py-20 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Heading
          title="University Visits"
          titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-green-950"
          className="fadeIn lg:pb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country, index) => {
            const Icon = country.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-900 to-green-950 p-6 rounded-lg shadow-lg text-gray-50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">{country.name}</h3>
                </div>
                <ul className="space-y-2">
                  {country.universities.map((university, uIndex) => (
                    <li key={uIndex} className="flex items-center">
                      <span className="text-gray-200 mr-2">•</span>
                      {university}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
