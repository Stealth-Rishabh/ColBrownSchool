import HeroSection from "./components/HeroSection"
import AcademicExcellence from "./components/AcademicExcellence"
import SubjectsAndStreams from "./components/SubjectsAndStreams"
import CampusAndLocation from "./components/CampusAndLocation"
import LegacyTimeline from "./components/LegacyTimeline"
import SchoolMottoAndCrest from "./components/SchoolMottoAndCrest"
import CallToAction from "./components/CallToAction"

export default function Curriculum() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <HeroSection />
      <AcademicExcellence />
      <SubjectsAndStreams />
      <CampusAndLocation />
      <LegacyTimeline />
      <SchoolMottoAndCrest />
      <CallToAction />
    </main>
  )
}

