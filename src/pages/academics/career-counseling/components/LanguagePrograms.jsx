import { Languages, BookOpen, GraduationCap } from "lucide-react";
import Heading from "../../../../components/Heading";
import img from "../../../../assets/academics/foriegn.webp";

const features = [
  {
    icon: Languages,
    title: "Multiple Language Options",
    desc: "We offer French, Urdu, Sanskrit, and Punjabi as part of our three-language formula, following the 'Common European Framework of Reference' from level A1 to C2.",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning Schedule",
    desc: "Classes are held on weekends and free evenings, fostering a 'wanting to learn' environment.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Development",
    desc: "Learning languages enhances listening ability, memory, creativity, and critical thinking—all of which contribute to overall learning and personal growth.",
  },
];

const FeatureItem = ({ feature }) => {
  return (
    <div className="col-span-12 md:col-span-4 bg-white/10 p-8 rounded-lg backdrop-filter backdrop-blur-lg hover:scale-105 transition-all duration-300">
      <div className="text-center flex flex-col items-center p-6 lg:p-8">
        <div className="flex justify-center items-center bg-white bg-opacity-10 w-12 h-12 rounded-lg mb-6">
          <feature.icon className="w-6 h-6" />
        </div>
        <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
        <p className="text-base leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
};

export default function LanguagePrograms() {
  return (
    <section className="sm:py-20 py-12 bg-gradient-to-r from-green-900 to-green-950 text-gray-50">
      <div className="container mx-auto px-4">
        {/* <Parallax translateY={[-20, 20]}> */}
        <div className="bg-white bg-opacity-10  overflow-hidden shadow-gray-800 shadow-lg rounded-lg backdrop-filter backdrop-blur-lg mb-12">
          <img
            src={img}
            alt="Language Programs"
            className="text-lg text-center h-40 sm:h-[500px] w-full object-cover mx-auto hover:scale-125 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Heading
              title="Foreign Language Programs"
              titleClassName="lg:text-5xl font-bold  text-center text-gray-50"
              className="fadeIn !lg:pb-0 !pb-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, i) => (
            <FeatureItem feature={feature} key={i} />
          ))}
        </div>
        {/* </Parallax> */}
      </div>
    </section>
  );
}
