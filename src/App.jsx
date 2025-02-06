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
// Contact
import ContactForm from "./pages/contact/ContactForm";
import Blog from "./pages/blog/Blog";
import Notice from "./pages/Notice";
// Error
import NotFound from "./pages/fallback/NotFound";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";


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

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Student Portal Route without Header/Footer */}
          <Route path="/result" element={<StudentPortal />} />

          {/* All other routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  {/* Landing */}
                  <Route path="/" element={<Landing />} />
                  {/* About */}
                  <Route path="/about/legacy-of-cbs" element={<LegacyCBS />} />
                  <Route
                    path="/about/our-visionary-leaders"
                    element={<OurVisionaryLeaders />}
                  />
                  <Route
                    path="/about/message-from-management"
                    element={<MessageFromManagement />}
                  />
                  <Route
                    path="/about/achievements"
                    element={<Achievements />}
                  />
                  {/* <Route path="/about/mission-vision" element={<MissionVision />} /> */}
                  <Route
                    path="/about/faculty-staff"
                    element={<FacultyStaffSection />}
                  />
                  <Route
                    path="/about/infrastructure"
                    element={<Infrastructure />}
                  />
                  {/* Academics */}
                  <Route
                    path="/academics/curriculum"
                    element={<Curriculum />}
                  />
                  <Route
                    path="/academics/advanced-pedagogy"
                    element={<AdvancedPedagogy />}
                  />
                  <Route
                    path="/academics/career-counselling"
                    element={<CareerCounseling />}
                  />

                  {/* Boarding Life */}
                  <Route
                    path="/boarding-life/overview"
                    element={<Overview />}
                  />
                  <Route
                    path="/boarding-life/classrooms"
                    element={<Classroom />}
                  />
                  <Route
                    path="/boarding-life/pastoral-care"
                    element={<PastoralCare />}
                  />
                  <Route
                    path="/boarding-life/sports-at-cbs"
                    element={<Sports />}
                  />
                  <Route
                    path="/boarding-life/safety-security"
                    element={<SafetySecurity />}
                  />
                  <Route
                    path="/boarding-life/medical-facilities"
                    element={<MedicalFacilities />}
                  />

                  <Route path="/boarding-life/hostel" element={<Hostel />} />
                  <Route path="/boarding-life/dining" element={<Dining />} />
                  <Route path="/boarding-life/library" element={<Library />} />

                  {/* Beyond Classroom */}
                  <Route
                    path="/beyond-classroom/adventure-excursion"
                    element={<AdventureExcursion />}
                  />
                  <Route
                    path="/beyond-classroom/clubs-at-cbs"
                    element={<ClubsAndSocieties />}
                  />
                  <Route
                    path="/beyond-classroom/news-and-events"
                    element={<NewsAndEvents />}
                  />

                  {/* Admissions  */}
                  <Route
                    path="/admissions/admission-procedure"
                    element={<AdmissionProcedure />}
                  />
                  <Route
                    path="/admissions/fee-details"
                    element={<FeeDetails />}
                  />
                  <Route
                    path="/admissions/registration"
                    element={<Registration />}
                  />
                  <Route path="/admissions/faqs" element={<FAQ />} />

                  {/* Alma Mater */}
                  <Route path="/alma-mater" element={<AlmaMater />} />

                  {/* Contact */}
                  <Route path="/contact-us" element={<ContactForm />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/notices" element={<Notice />} />
                  <Route path="*" element={<NotFound />} />
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
