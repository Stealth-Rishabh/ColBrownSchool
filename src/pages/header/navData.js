// import CalendarPdf from "../../assets/calendar-january-may-2024.pdf";

export const navlinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "Legacy of CBS", path: "/about/legacy-of-cbs" },
      { name: "Our Visionary Leaders", path: "/about/our-visionary-leaders" },
      {
        name: "Message from the Management",
        path: "/about/message-from-management",
      },
      { name: "Achievements", path: "/about/achievements" },
      // { name: "Faculty & Staff", path: "/about/faculty-staff" },
      { name: "Infrastructure", path: "/about/infrastructure" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    submenu: [
      { name: "Curriculum", path: "/academics/curriculum" },
      { name: "Advanced Pedagogy", path: "/academics/advanced-pedagogy" },
      { name: "Career Counselling", path: "/academics/career-counselling" },
      // { name: "Calendar", path: "/academics/calendar", pdf: CalendarPdf },
    ],
  },
  {
    name: "Boarding Life",
    path: "/boarding-life",
    submenu: [
      { name: "Overview", path: "/boarding-life/overview" },
      { name: "Pastoral Care", path: "/boarding-life/pastoral-care" },
      // { name: "Safety & Security", path: "/boarding-life/safety-security" },
      { name: "Sports at CBS", path: "/boarding-life/sports-at-cbs" },
      { name: "Medical Facilities", path: "/boarding-life/medical-facilities" },
      { name: "Hostel", path: "/boarding-life/hostel" },
      { name: "Dining", path: "/boarding-life/dining" },
      { name: "Library", path: "/boarding-life/library" },
    ],
  },
  {
    name: "Beyond Classroom",
    path: "/beyond-classroom",
    submenu: [
      {
        name: "Adventure & Excurssion",
        path: "/beyond-classroom/adventure-excursion",
      },
      { name: "Clubs at CBS", path: "/beyond-classroom/clubs-at-cbs" },
      { name: "News & Events", path: "/beyond-classroom/news-and-events" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
    submenu: [
      { name: "Admission Procedure", path: "/admissions/admission-procedure" },
      { name: "Fee Details", path: "/admissions/fee-details" },
      { name: "Registration", path: "/admissions/registration" },
      { name: "FAQs", path: "/admissions/faqs" },
    ],
  },
  {
    name: "Alma Mater",
    path: "/alma-mater",
    submenu: [
      { name: "Alma Mater", path: "/alma-mater" },
      { name: "Notable Alumni", path: "/notable-alumni" },
    ],
  },
  { name: "Contact Us", path: "/contact-us" },
];
