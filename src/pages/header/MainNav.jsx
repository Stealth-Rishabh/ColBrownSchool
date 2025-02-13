import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CalendarPdf from "../../assets/calendar-january-may-2025.pdf";
import {
  ChevronDown,
  Home,
  Building2,
  GraduationCap,
  BookOpen,
  Hotel,
  Sparkles,
  UserPlus,
  Contact,
  History,
  Users,
  MessageSquare,
  Target,
  ScrollText,
  Brain,
  HeartHandshake,
  Library,
  Users2,
  Shield,
  Stethoscope,
  Building,
  UtensilsCrossed,
  Trophy,
  Club,
  Newspaper,
  ClipboardList,
  Receipt,
  FileCheck,
  HelpCircle,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    trigger: "Home",
    path: "/",
    icon: <Home className="w-4 h-4 mr-2" />,
  },
  {
    trigger: "About",
    icon: <Building2 className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Legacy of CBS",
        path: "/about/legacy-of-cbs",
        icon: <History className="w-4 h-4 mr-2" />,
      },
      {
        name: "Our Visionary Leaders",
        path: "/about/our-visionary-leaders",
        icon: <Users className="w-4 h-4 mr-2" />,
      },
      {
        name: "Message from the Management",
        path: "/about/message-from-management",
        icon: <MessageSquare className="w-4 h-4 mr-2" />,
      },
      {
        name: "Achievements",
        path: "/about/achievements",
        icon: <Trophy className="w-4 h-4 mr-2" />,
      },
      // {
      //   name: "Faculty & Staff",
      //   path: "/about/faculty-staff",
      //   icon: <Users2 className="w-4 h-4 mr-2" />,
      // },
      {
        name: "Infrastructure",
        path: "/about/infrastructure",
        icon: <Building className="w-4 h-4 mr-2" />,
      },
    ],
  },
  {
    trigger: "Academics",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Curriculum",
        path: "/academics/curriculum",
        icon: <ScrollText className="w-4 h-4 mr-2" />,
      },
      {
        name: "Advanced Pedagogy",
        path: "/academics/advanced-pedagogy",
        icon: <Brain className="w-4 h-4 mr-2" />,
      },
      {
        name: "Career Counselling",
        path: "/academics/career-counselling",
        icon: <HeartHandshake className="w-4 h-4 mr-2" />,
      },
      {
        name: "Calendar",
        pdf: CalendarPdf,
        icon: <Calendar className="w-4 h-4 mr-2" />,
      },
    ],
  },

  {
    trigger: "Boarding Life",
    icon: <Hotel className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Overview",
        path: "/boarding-life/overview",
        icon: <Building2 className="w-4 h-4 mr-2" />,
      },
      {
        name: "Pastoral Care",
        path: "/boarding-life/pastoral-care",
        icon: <HeartHandshake className="w-4 h-4 mr-2" />,
      },
      // {
      //   name: "Safety & Security",
      //   path: "/boarding-life/safety-security",
      //   icon: <Shield className="w-4 h-4 mr-2" />,
      // },
      {
        name: "Sports at CBS",
        path: "/boarding-life/sports-at-cbs",
        icon: <Trophy className="w-4 h-4 mr-2" />,
      },

      {
        name: "Medical Facilities",
        path: "/boarding-life/medical-facilities",
        icon: <Stethoscope className="w-4 h-4 mr-2" />,
      },
      {
        name: "Hostel",
        path: "/boarding-life/hostel",
        icon: <Building className="w-4 h-4 mr-2" />,
      },
      {
        name: "Dining",
        path: "/boarding-life/dining",
        icon: <UtensilsCrossed className="w-4 h-4 mr-2" />,
      },
      {
        name: "Library",
        path: "/boarding-life/library",
        icon: <BookOpen className="w-4 h-4 mr-2" />,
      },
    ],
  },
  {
    trigger: "Beyond Classroom",
    icon: <Sparkles className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Adventure & Excurssion",
        path: "/beyond-classroom/adventure-excursion",
        icon: <Trophy className="w-4 h-4 mr-2" />,
      },
      {
        name: "Clubs at CBS",
        path: "/beyond-classroom/clubs-at-cbs",
        icon: <Club className="w-4 h-4 mr-2" />,
      },

      {
        name: "News & Events",
        path: "/beyond-classroom/news-and-events",
        icon: <Newspaper className="w-4 h-4 mr-2" />,
      },
    ],
  },
  {
    trigger: "Admissions",
    icon: <UserPlus className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Admission Procedure",
        path: "/admissions/admission-procedure",
        icon: <ClipboardList className="w-4 h-4 mr-2" />,
      },
      {
        name: "Fee Details",
        path: "/admissions/fee-details",
        icon: <Receipt className="w-4 h-4 mr-2" />,
      },
      {
        name: "Registration",
        path: "/admissions/registration",
        icon: <FileCheck className="w-4 h-4 mr-2" />,
      },
      // {
      //   name: "Transfer Certificate",
      //   path: "/admissions/transfer-certificate",
      //   icon: <FileCheck className="w-4 h-4 mr-2" />,
      // },
      {
        name: "FAQs",
        path: "/admissions/faqs",
        icon: <HelpCircle className="w-4 h-4 mr-2" />,
      },
    ],
  },
  {
    trigger: "Alma Mater",
    icon: <Contact className="w-4 h-4 mr-2" />,
    items: [
      {
        name: "Alma Mater",
        path: "/alma-mater",
        icon: <GraduationCap className="w-4 h-4 mr-2" />,
      },
      {
        name: "Notable Alumni", 
        path: "/notable-alumni",
        icon: <Users className="w-4 h-4 mr-2" />,
      },
    ],
  },
  // {
  //   trigger: "Contact Us",
  //   path: "/contact-us",
  //   icon: <Contact className="w-4 h-4 mr-2" />,
  // },
];

const MainNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef();

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden lg:block " ref={navRef}>
      <ul className="relative z-20 flex space-x-6">
        {menuItems.map((menu, index) => (
          <li
            key={menu.trigger}
            className="relative group text-sm hover:text-green-900 duration-300 transition-all cursor-pointer hover:-translate-y-1 "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {menu.items ? (
              <div className="relative flex flex-col items-center">
                <button className="flex items-center text-foreground hover:text-primary focus:outline-none p-2 hover:bg-gray-100 rounded-md font-serif text-base">
                  {menu.icon}
                  {menu.trigger}
                  <motion.div
                    animate={{ rotate: activeMenu === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute w-max min-w-48 top-full"
                      style={{ transformOrigin: 'top center' }}
                    >
                      <motion.ul
                        className="z-20 py-2 mt-9 bg-white rounded drop-shadow-lg border font-serif text-base border-gray-200"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                          open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                              type: "spring",
                              bounce: 0,
                              duration: 0.7,
                              delayChildren: 0.3,
                              staggerChildren: 0.05,
                            },
                          },
                          closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                              type: "spring",
                              bounce: 0,
                              duration: 0.3,
                            },
                          },
                        }}
                      >
                        {menu.items.map((item) => (
                          <motion.li
                            className="p-2"
                            key={item.name}
                            variants={{
                              open: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 24,
                                },
                              },
                              closed: {
                                opacity: 0,
                                y: 20,
                                transition: { duration: 0.2 },
                              },
                            }}
                          >
                            {item.pdf ? (
                              <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 rounded-md hover:font-semibold duration-300 transition-all text-gray-700 hover:bg-gray-100 text-base hover:text-green-900"
                                onClick={handleLinkClick}
                              >
                                <motion.div
                                  whileHover={{ x: 10 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 24,
                                  }}
                                  className="flex items-center"
                                >
                                  {item.icon}
                                  {item.name}
                                </motion.div>
                              </a>
                            ) : (
                              <Link
                                to={item.path}
                                onClick={handleLinkClick}
                                className="block px-4 py-2 rounded-md hover:font-semibold duration-300 transition-all text-gray-700 hover:bg-gray-100 text-sm hover:text-green-900"
                              >
                                <motion.div
                                  whileHover={{ x: 10 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 24,
                                  }}
                                  className="flex items-center"
                                >
                                  {item.icon}
                                  {item.name}
                                </motion.div>
                              </Link>
                            )}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={menu.path}
                className="text-foreground hover:text-primary"
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex items-center hover:text-green-900 duration-100 transition-all cursor-pointer hover:-translate-y-1 p-2 rounded-md hover:bg-gray-100 font-serif text-base"
                >
                  {menu.icon}
                  {menu.trigger}
                </motion.div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

// text-foreground hover:text-primary text-sm hover:text-green-900 cursor-pointer hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-green-900 duration-300 transition-all hover:after:transition-all hover:-translate-y-1
