import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./pages/header/Header"
import Landing from "./pages/landingPage/Landing"
import Footer from "./pages/footer/Footer"
import LegacyCBS from './pages/about/LegacyCBS';
export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about/legacy-cbs" element={<LegacyCBS />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

  


