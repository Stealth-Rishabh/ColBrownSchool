import { motion, useScroll, useTransform } from "framer-motion";
import SocialLinks from "./SocialLinks";
import WhatsAppButton from "./WhatsAppButton";
import LinkSection from "./LinkSection";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const footerLinks = {
    "Quick Links": [
      { name: "About CBS", href: "/about/legacy-of-cbs" },
      { name: "Admissions", href: "/admissions/admission-procedure" },
      { name: "Blog", href: "/blog" },
      { name: "Alumni Registration", href: "/alma-mater" },
      { name: "View Result", href: "/result" },
      { name: "Register Now", href: "/admissions/registration" },
      { name: "Contact", href: "/contact-us" },
    ],
    "Campus Life": [
      { name: "Hostel", href: "/boarding-life/hostel" },
      { name: "Facilities", href: "/about/infrastructure" },
      { name: "Activities", href: "/beyond-classroom/clubs-at-cbs" },
      // { name: "Photo Gallery", href: "#" },
      // { name: "Video Gallery", href: "#" },
    ],
    Academics: [
      { name: "News & Events", href: "/beyond-classroom/news-and-events" },
      { name: "Fee Structure", href: "/admissions/fee-details" },
      { name: "Newsletter", href: "#" },
      {
        name: "Calendar",
        href: "https://col-brown-school.vercel.app/assets/calendar-january-may-2024-Dre_knEo.pdf",
        target: 1,
      },
      { name: "Notice(s)", href: "/notices" },
    ],
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* <WhatsAppButton /> */}

      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1 }}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-2 p-4 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={logo}
                  alt="Col Brown Cambridge School"
                  width={200}
                  height={60}
                  className="bg-white p-2"
                />
              </motion.div>
            </Link>
            <motion.address
              className="not-italic space-y-3 text-sm "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                5 Kasturba Road, Dalanwala
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Dehradun – 248 001
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Uttarakhand, India
              </motion.p>
              <motion.p
                className="pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="tel:+916395114363"
                  className="hover:text-white transition-colors inline-flex items-center group"
                >
                  <motion.span className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  +91 63951 14363
                </a>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=principal@colbrownschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center group break-all sm:break-normal"
                >
                  <motion.span className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  principal@colbrownschool.com
                </a>
              </motion.p>
            </motion.address>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links, target], index) => (
            <LinkSection
              key={title}
              title={title}
              links={links}
              target={target}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-sm text-gray-400 text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              © Col. Brown Cambridge School {new Date().getFullYear()}. All
              Rights Reserved
            </motion.p>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
