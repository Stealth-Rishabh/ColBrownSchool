import { Parallax } from "react-scroll-parallax";
import { BookOpen, Users, Heart, Compass, GraduationCap } from "lucide-react";
import Heading from "../../../../components/Heading";

const workshops = [
  {
    title: "Subject Choices and their Implications on Careers",
    icon: BookOpen,
  },
  { title: "Subject Streams and their Possibilities", icon: Compass },
  { title: "Parent Connect - Importance of parental support", icon: Heart },
  { title: "Overview of Careers and Career Pathways", icon: Users },
  // { title: "Applying abroad and in India", icon: GraduationCap },
];

export default function Workshops() {
  return (
    <section className="sm:py-20 py-12 bg-gradient-to-r from-green-900 to-green-950 text-gray-50">
      <div className="container mx-auto px-4">
        <Heading
          title="Our Workshops"
          titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-gray-50"
          className="fadeIn lg:pb-10"
        />
        {/* <Parallax translateY={[-10, 10]}> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
                >
                  <Icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-200">
                    Gain insights and practical knowledge to guide your career
                    decisions.
                  </p>
                </div>
              );
            })}
          </div>
        {/* </Parallax> */}
      </div>
    </section>
  );
}
