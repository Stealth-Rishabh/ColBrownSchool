import React from "react";
import Heading from "../../components/Heading";
import raj from "@/assets/almaMater/raj-kapoor.png";
import randhir from "@/assets/almaMater/randhir-kapoor.png";
import vir from "@/assets/almaMater/bhadra-singh.png";
import vp from "@/assets/almaMater/vp-singh.png";
import deependra from "@/assets/almaMater/deependra-singh.png";
import meiyang from "@/assets/almaMater/myan-chang.png";
import { alumniestimonials } from "./alumniTestimonials";
import Testimonials from "../landingPage/Testimonials";

const alumniData = [
  {
    name: "Raj Kapoor",
    role: "Indian actor and film director",
    image: raj,
  },
  {
    name: "Randhir Kapoor",
    role: "Indian retired actor and film producer",
    image: randhir,
  },
  {
    name: "Vir bhadra Singh",
    role: "Ex CM of Himachal Pradesh",
    image: vir,
  },
  {
    name: "VP Singh",
    role: "Ex Prime Minister of India",
    image: vp,
  },
  {
    name: "Lt. General Deependra Singh",
    role: "Lieutenant General",
    image: deependra,
  },
  {
    name: "Meiyang Chang",
    role: "Indian actor and television host",
    image: meiyang,
  },
];

const AlumniCard = ({ name, role, image }) => (
  <div className="block group relative cursor-pointer">
    <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={image}
        alt={`${name} image`}
        className="w-[400px] h-[400px] rounded-2xl mx-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-600/80 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
        <div className="text-center text-white p-6">
          <h4 className="text-2xl font-bold mb-2 capitalize transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {name}
          </h4>
          <p className="text-lg text-gray-200 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            {role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const NotableAlumni = () => {
  return (
    <section className="py-12 sm:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <Heading
          title="Our Notable Alumni"
          subtitle="Celebrating the achievements and contributions of our distinguished alumni who have made their mark in various fields across the globe"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {alumniData.map((alumni) => (
            <AlumniCard key={alumni.name} {...alumni} />
          ))}
        </div>
        <div className="mt-10">
          <Testimonials
            testimonialList={alumniestimonials}
            title="Alumni Testimonials"
            subtitle="Our alumni have shared their experiences, emphasizing the importance of both paid and unpaid roles in shaping their careers."
          />
        </div>
      </div>
    </section>
  );
};

export default NotableAlumni;
