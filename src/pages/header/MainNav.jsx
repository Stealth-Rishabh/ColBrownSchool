import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const menuItems = [
  {
    trigger: "ABOUT",
    items: [
      { name: "Legacy of CBS", path: "/about/legacy-of-cbs" },
      { name: "Our Visionary Leaders", path: "/about/our-visionary-leaders" },
      {
        name: "Message from the Management",
        path: "/about/message-from-management",
      },
      { name: "Mission & Vision", path: "/about/mission-vision" },
    ],
  },
  {
    trigger: "ADMISSIONS",
    items: [
      { name: "Process", path: "/admissions/process" },
      { name: "Fee Structure", path: "/admissions/fee-structure" },
      { name: "Scholarships", path: "/admissions/scholarships" },
      { name: "FAQs", path: "/admissions/faqs" },
    ],
  },
  {
    trigger: "LEARNING",
    items: [
      { name: "Curriculum", path: "/learning/curriculum" },
      { name: "Academics", path: "/learning/academics" },
      { name: "Faculty", path: "/learning/faculty" },
      { name: "Library", path: "/learning/library" },
    ],
  },
  {
    trigger: "BOARDING",
    items: [
      { name: "Facilities", path: "/boarding/facilities" },
      { name: "Life at Campus", path: "/boarding/campus-life" },
      { name: "Rules & Regulations", path: "/boarding/rules" },
    ],
  },
  {
    trigger: "ENRICHMENT",
    items: [
      { name: "Sports", path: "/enrichment/sports" },
      { name: "Arts", path: "/enrichment/arts" },
      { name: "Clubs", path: "/enrichment/clubs" },
      { name: "Activities", path: "/enrichment/activities" },
    ],
  },
  {
    trigger: "EXPLORE STONEHILL",
    items: [
      { name: "Campus Tour", path: "/explore/campus-tour" },
      { name: "Infrastructure", path: "/explore/infrastructure" },
      { name: "Location", path: "/explore/location" },
    ],
  },
  {
    trigger: "PLACEMENTS",
    items: [
      { name: "Overview", path: "/placements/overview" },
      { name: "Statistics", path: "/placements/statistics" },
      { name: "Success Stories", path: "/placements/success-stories" },
    ],
  },
];

export const MainNav = () => {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="flex space-x-">
        {menuItems.map((menu) => (
          <NavigationMenuItem key={menu.trigger} className="relative">
            <NavigationMenuTrigger className="font-medium text-xs hover:text-yellow-600">
              {menu.trigger}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0">
              <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-lg rounded-md">
                {menu.items.map(({ name, path }) => (
                  <li key={name}>
                    <Link // Using Link from react-router-dom
                      to={path} // Updated to use the path
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700"
                    >
                      <div className="text-sm font-medium leading-none">
                        {name} {/* Updated to use the name */}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
    // <nav>
    //   <ul className=" items-center gap-6 text-base hidden sm:flex">
    //     {menuItems.map((menu) => (
    //       <li key={menu.trigger} className="hover:text-green-900 cursor-pointer hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-green-900 duration-300 transition-all hover:after:transition-all hover:-translate-y-1">
    //         {menu.trigger}
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default MainNav;
