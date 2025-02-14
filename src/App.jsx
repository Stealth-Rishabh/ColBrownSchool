import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/Header";
import Landing from "./pages/landingPage/Landing";
import StudentPortal from "./pages/login/StudentPortal";
import Footer from "./pages/footer/Footer";
// About
import LegacyCBS from "./pages/about/LegacyCBS";
import OurVisionaryLeaders from "./pages/about/OurVisionaryLeaders";
import MessageFromManagement from "./pages/about/MessageFromManagement";
import Achievements from "./pages/about/Achievements";

import Infrastructure from "./pages/about/Infrastructure";
// import MissionVision from "./pages/about/MissionVision";
import FacultyStaffSection from "./pages/about/FacultyStaffSection";
// Academics
import Curriculum from "./pages/academics/curriculum/Curriculum";
import AdvancedPedagogy from "./pages/academics/AdvancedPedagogy";
import CareerCounseling from "./pages/academics/career-counseling/CareerCounseling";
// Boarding Life
import Overview from "./pages/boardingLife/Overview";
import Classroom from "./pages/boardingLife/Classroom";
import PastoralCare from "./pages/boardingLife/PastoralCare";
import SafetySecurity from "./pages/boardingLife/SafetySecurity";
import MedicalFacilities from "./pages/boardingLife/MedicalFacilities";
import Hostel from "./pages/boardingLife/Hostel";
import Dining from "./pages/boardingLife/Dining";
import Library from "./pages/boardingLife/Library";
// Beyond Classroom
import Sports from "./pages/beyondClassroom/Sports";
import AdventureExcursion from "./pages/beyondClassroom/AdventureExcursion";
import ClubsAndSocieties from "./pages/beyondClassroom/ClubsAndSocieties";
import NewsAndEvents from "./pages/beyondClassroom/NewsAndEvents";
// Admissions
import AdmissionProcedure from "./pages/admissions/AdmissionProcedure";
import FeeDetails from "./pages/admissions/FeeDetails";

import Registration from "./pages/admissions/Registration";
import FAQ from "./pages/admissions/FAQ";

// Alma Mater
import AlmaMater from "./pages/almaMater/AlmaMater";
import NotableAlumni from "./pages/almaMater/NotableAlumni";
// Contact
import ContactForm from "./pages/contact/ContactForm";
import Blog from "./pages/blog/Blog";
import Notice from "./pages/Notice";
import Newsletter from "./pages/Newsletter";
// Error
import NotFound from "./pages/fallback/NotFound";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { routeMetadata } from "./config/metadata";
import SportsGallery from "./pages/beyondClassroom/SportsGallery";
import { EnquiryModal } from "@/components/EnquiryModal";
// Add ScrollToTop component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed animate-bounce z-50 bg-yellow-500 hover:bg-yellow-600 text-black bottom-6 right-6 h-9 w-9 rounded-md shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

// Add metadata configuration object
const useMetaTags = (pathname) => {
  useEffect(() => {
    const metadata = routeMetadata[pathname] || {
      title: "CBS School",
      description: "CBS School - Excellence in Education",
      keywords: "CBS, school, education",
    };

    document.title = metadata.title;

    // Update meta tags
    const metaTags = {
      description: metadata.description,
      keywords: metadata.keywords,
      "og:title": metadata.title,
      "og:description": metadata.description,
      "twitter:title": metadata.title,
      "twitter:description": metadata.description,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(name.includes("og:") ? "property" : "name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });
  }, [pathname]);
};

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <EnquiryModal />
        <Routes>
          {/* Student Portal Route without Header/Footer */}
          <Route
            path="/result"
            element={
              <MetaWrapper pathname="/result">
                <StudentPortal />
              </MetaWrapper>
            }
          />

          {/* All other routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  {/* Landing */}
                  <Route
                    path="/"
                    element={
                      <MetaWrapper pathname="/">
                        <Landing />
                      </MetaWrapper>
                    }
                  />
                  {/* About */}
                  <Route
                    path="/about/legacy-of-cbs"
                    element={
                      <MetaWrapper pathname="/about/legacy-of-cbs">
                        <LegacyCBS />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/about/our-visionary-leaders"
                    element={
                      <MetaWrapper pathname="/about/our-visionary-leaders">
                        <OurVisionaryLeaders />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/about/message-from-management"
                    element={
                      <MetaWrapper pathname="/about/message-from-management">
                        <MessageFromManagement />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/about/achievements"
                    element={
                      <MetaWrapper pathname="/about/achievements">
                        <Achievements />
                      </MetaWrapper>
                    }
                  />
                  {/* <Route path="/about/mission-vision" element={<MissionVision />} /> */}
                  <Route
                    path="/about/faculty-staff"
                    element={
                      <MetaWrapper pathname="/about/faculty-staff">
                        <FacultyStaffSection />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/about/infrastructure"
                    element={
                      <MetaWrapper pathname="/about/infrastructure">
                        <Infrastructure />
                      </MetaWrapper>
                    }
                  />
                  {/* Academics */}
                  <Route
                    path="/academics/curriculum"
                    element={
                      <MetaWrapper pathname="/academics/curriculum">
                        <Curriculum />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/academics/advanced-pedagogy"
                    element={
                      <MetaWrapper pathname="/academics/advanced-pedagogy">
                        <AdvancedPedagogy />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/academics/career-counselling"
                    element={
                      <MetaWrapper pathname="/academics/career-counselling">
                        <CareerCounseling />
                      </MetaWrapper>
                    }
                  />

                  {/* Boarding Life */}
                  <Route
                    path="/boarding-life/overview"
                    element={
                      <MetaWrapper pathname="/boarding-life/overview">
                        <Overview />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/classrooms"
                    element={
                      <MetaWrapper pathname="/boarding-life/classrooms">
                        <Classroom />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/pastoral-care"
                    element={
                      <MetaWrapper pathname="/boarding-life/pastoral-care">
                        <PastoralCare />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/sports-at-cbs"
                    element={
                      <MetaWrapper pathname="/boarding-life/sports-at-cbs">
                        <Sports />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/sports-at-cbs/:sport"
                    element={
                      <MetaWrapper pathname="/boarding-life/sports-at-cbs/:sport">
                        <SportsGallery />
                      </MetaWrapper>
                    }
                  />
                  {/* <Route
                    path="/boarding-life/safety-security"
                    element={<SafetySecurity />}
                  /> */}

                  <Route
                    path="/boarding-life/medical-facilities"
                    element={
                      <MetaWrapper pathname="/boarding-life/medical-facilities">
                        <MedicalFacilities />
                      </MetaWrapper>
                    }
                  />

                  <Route
                    path="/boarding-life/hostel"
                    element={
                      <MetaWrapper pathname="/boarding-life/hostel">
                        <Hostel />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/dining"
                    element={
                      <MetaWrapper pathname="/boarding-life/dining">
                        <Dining />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/boarding-life/library"
                    element={
                      <MetaWrapper pathname="/boarding-life/library">
                        <Library />
                      </MetaWrapper>
                    }
                  />

                  {/* Beyond Classroom */}
                  <Route
                    path="/beyond-classroom/adventure-excursion"
                    element={
                      <MetaWrapper pathname="/beyond-classroom/adventure-excursion">
                        <AdventureExcursion />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/beyond-classroom/clubs-at-cbs"
                    element={
                      <MetaWrapper pathname="/beyond-classroom/clubs-at-cbs">
                        <ClubsAndSocieties />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/beyond-classroom/news-and-events"
                    element={
                      <MetaWrapper pathname="/beyond-classroom/news-and-events">
                        <NewsAndEvents />
                      </MetaWrapper>
                    }
                  />

                  {/* Admissions  */}
                  <Route
                    path="/admissions/admission-procedure"
                    element={
                      <MetaWrapper pathname="/admissions/admission-procedure">
                        <AdmissionProcedure />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/admissions/fee-details"
                    element={
                      <MetaWrapper pathname="/admissions/fee-details">
                        <FeeDetails />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/admissions/registration"
                    element={
                      <MetaWrapper pathname="/admissions/registration">
                        <Registration />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/admissions/faqs"
                    element={
                      <MetaWrapper pathname="/admissions/faqs">
                        <FAQ />
                      </MetaWrapper>
                    }
                  />

                  {/* Alma Mater */}
                  <Route
                    path="/alma-mater"
                    element={
                      <MetaWrapper pathname="/alma-mater">
                        <AlmaMater />
                      </MetaWrapper>
                    }
                  />

                  <Route
                    path="/notable-alumni"
                    element={
                      <MetaWrapper pathname="/notable-alumni">
                        <NotableAlumni />
                      </MetaWrapper>
                    }
                  />
                  {/* Contact */}
                  <Route
                    path="/contact-us"
                    element={
                      <MetaWrapper pathname="/contact-us">
                        <ContactForm />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/blog"
                    element={
                      <MetaWrapper pathname="/blog">
                        <Blog />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/notices"
                    element={
                      <MetaWrapper pathname="/notices">
                        <Notice />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="/newsletter"
                    element={
                      <MetaWrapper pathname="/newsletter">
                        <Newsletter />
                      </MetaWrapper>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <MetaWrapper pathname="*">
                        <NotFound />
                      </MetaWrapper>
                    }
                  />
                </Routes>
                <Footer />
              </>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

// MetaWrapper component
const MetaWrapper = ({ children, pathname }) => {
  useMetaTags(pathname);
  return children;
};
