import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/Header";
import Landing from "./pages/landingPage/Landing";
import Footer from "./pages/footer/Footer";
import LegacyCBS from "./pages/about/LegacyCBS";
import OurVisionaryLeaders from "./pages/about/OurVisionaryLeaders";
import MessageFromManagement from "./pages/about/MessageFromManagement";
import MissionVision from "./pages/about/MissionVision";
import Curriculum from "./pages/academics/curriculum/Curriculum";
import AdvancedPedagogy from "./pages/academics/AdvancedPedagogy";
import CareerCounseling from "./pages/academics/career-counseling/CareerCounseling";
import Overview from "./pages/boardingLife/Overview";
export default function App() {
  return (
    <>
      <Router>
        {/* Header */}
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
          <Route path="/about/mission-vision" element={<MissionVision />} />

          {/* Academics */}
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/advanced-pedagogy" element={<AdvancedPedagogy />} />
          <Route path="/academics/career-counselling" element={<CareerCounseling />} />

          {/* Boarding Life */}
          <Route path="/boarding-life/overview" element={<Overview />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}
