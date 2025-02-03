// import Image from "next/image"
import { ParallaxProvider } from "react-scroll-parallax";

import CareerHero from "./components/CareerHero";
import Services from "./components/Services";
import Workshops from "./components/Workshops";
import UniversityVisits from "./components/UniversityVisits";
import LanguagePrograms from "./components/LanguagePrograms";
import ContactCTA from "./components/ContactCTA";

export default function CareerCounseling() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-900/10">
        <main>
          <CareerHero />
          <Services />
          <Workshops />
          {/* <UniversityVisits /> */}
          <LanguagePrograms />
          <ContactCTA />
        </main>
      </div>
    </ParallaxProvider>
  );
}
