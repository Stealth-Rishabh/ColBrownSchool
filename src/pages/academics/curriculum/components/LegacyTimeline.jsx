import { motion } from "framer-motion"
  import { useState } from "react"
  import { ChevronDown, ChevronUp } from "lucide-react"

const timelineEvents = [
  {
    year: 1888,
    event: "School Founded",
    description:
      "Our institution was established with a vision of excellence in education. The founders laid the groundwork for a legacy that would span generations, focusing on holistic development and academic rigor.",
    image: "https://v0.dev/placeholder.svg?height=300&width=400",
  },
  {
    year: 1920,
    event: "Pre-IMA Classes Introduced",
    description:
      "Preparing students for the Indian Military Academy became a key focus. This initiative not only enhanced our academic offerings but also instilled discipline and leadership qualities in our students.",
    image: "https://v0.dev/placeholder.svg?height=300&width=400",
  },
  {
    year: 1945,
    event: "All India Hockey Championship",
    description:
      "Our school team won the prestigious national hockey tournament. This victory put our institution on the map and established our reputation for excellence in sports, particularly in hockey.",
    image: "https://v0.dev/placeholder.svg?height=300&width=400",
  },
  {
    year: 1960,
    event: "Expansion of Academic Programs",
    description:
      "New courses were added to provide a more comprehensive education. This expansion reflected our commitment to evolving with the times and preparing our students for a rapidly changing world.",
    image: "https://v0.dev/placeholder.svg?height=300&width=400",
  },
  {
    year: 2000,
    event: "Modernization of Campus Facilities",
    description:
      "State-of-the-art infrastructure was introduced to enhance learning. This modernization effort included new laboratories, a digital library, and smart classrooms, setting the stage for 21st-century education.",
    image: "https://v0.dev/placeholder.svg?height=300&width=400",
  },
]

export default function LegacyTimeline() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-200 to-green-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-green-950 mb-8 md:mb-12 text-center"
        >
          Legacy of Discipline, Sports, and Excellence
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <ChevronDown className="w-8 h-8 text-green-700 animate-bounce" />
        </motion.div>
        <div className="relative z-10">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-700 to-green-600 transform md:-translate-x-1/2 -z-10"></div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              year={event.year}
              event={event.event}
              description={event.description}
              image={event.image}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}








function TimelineEvent({ year, event, description, image, isEven }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center mb-12 md:mb-24 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-5/12">
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={image || "/placeholder.svg"} alt={event} className="w-full h-48 object-cover hidden sm:block" />
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-green-950 mb-2">{year}</h3>
            <h4 className="text-xl md:text-2xl font-semibold text-green-800 mb-3">{event}</h4>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isExpanded ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-base md:text-lg text-gray-700 mb-4">{description}</p>
            </motion.div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-green-700 hover:text-green-900 transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  <span className="mr-2">Read less</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span className="mr-2">Read more</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-start md:justify-center w-full md:w-2/12 mt-4 md:mt-0">
        <motion.div
          className="w-8 h-8 bg-green-700 rounded-full border-4 border-white shadow-md z-10"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="text-lg font-bold text-green-950 ml-4 md:hidden">{year}</div>
      </div>
    </motion.div>
  )
}

