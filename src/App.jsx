import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/Header";
import Landing from "./pages/landingPage/Landing";
import Footer from "./pages/footer/Footer";
import LegacyCBS from "./pages/about/LegacyCBS";
import OurVisionaryLeaders from "./pages/about/OurVisionaryLeaders";
import MessageFromManagement from "./pages/about/MessageFromManagement";
import MissionVision from "./pages/about/MissionVision";
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
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}
