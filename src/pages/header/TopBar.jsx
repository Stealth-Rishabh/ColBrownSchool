import { Mail, Phone, SquareUser } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 block">
      <div className="sm:container md:max-w-6xl lg:max-w-[1400px] mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center flex-wrap sm:space-x-4 mb-2 sm:mb-0">
          <a
            href="mailto:principal@colbrownschool.com"
            className="flex items-center mr-2 sm:mr-0 hover:text-yellow-400"
          >
            <Mail className="h-4 w-4 mr-2" />
            principal@colbrownschool.com
          </a>
          <a
            href="tel:+916395114363"
            className="flex items-center hover:text-yellow-400"
          >
            <Phone className="h-4 w-4 mr-2" />
            +91 63951 14363
          </a>
        </div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap space-x-4">
          <Link to="/result" className="hover:text-yellow-400">
            View Result
          </Link>
          <Link to="/notices" className="hover:text-yellow-400">
            Notice(s)
          </Link>
          <Link to="/blog" className="hover:text-yellow-400">
            Blog
          </Link>
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto mt-2 sm:mt-0 sm:flex sm:space-x-4">
            <Link
              to="/contact-us"
              className="bg-green-600 flex items-center justify-center text-white px-4 py-1 rounded-md hover:bg-green-500"
            >
              <SquareUser className="h-4 w-4 mr-2" />
              Contact Us
            </Link>

            <Link
              to="/admissions/registration"
              className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-500 text-center sm:text-left"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
