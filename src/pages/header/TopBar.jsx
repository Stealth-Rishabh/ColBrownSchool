import {  Mail, Phone, SquareUser } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 hidden sm:block">
      <div className="sm:container md:max-w-6xl lg:max-w-[1400px]    mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <a
            href="mailto:principal@colbrownschool.com"
            className="flex items-center hover:text-yellow-400"
          >
            <Mail className="h-4 w-4 mr-2" />
            principal@colbrownschool.com
          </a>
          <a
            href="tel:+919395114383"
            className="flex items-center hover:text-yellow-400"
          >
            <Phone className="h-4 w-4 mr-2" />
            +91 93951 14383
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/result" className="hover:text-yellow-400">
            View Result
          </Link>
          <Link to="/notices" className="hover:text-yellow-400">
            Notice(s)
          </Link>
          <Link to="/blog" className="hover:text-yellow-400">
            Blog
          </Link>

          <Link
            to="/contact-us"
            className="bg-green-600 flex items-center text-white px-4 py-1 rounded-md hover:bg-green-500"
          >
            <SquareUser className="h-4 w-4 mr-2" />
            Contact Us

          </Link>

          <Link
            to="/admissions/registration"
            className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-500"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
