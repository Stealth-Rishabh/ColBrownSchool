import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


const menuItems = [
  {
    trigger: "ABOUT",
    items: ["Overview", "History", "Vision & Mission", "Leadership"],
  },
  {
    trigger: "ADMISSIONS",
    items: ["Process", "Fee Structure", "Scholarships", "FAQs"],
  },
  {
    trigger: "LEARNING",
    items: ["Curriculum", "Academics", "Faculty", "Library"],
  },
  {
    trigger: "BOARDING",
    items: ["Facilities", "Life at Campus", "Rules & Regulations"],
  },
  {
    trigger: "ENRICHMENT",
    items: ["Sports", "Arts", "Clubs", "Activities"],
  },
  {
    trigger: "EXPLORE STONEHILL",
    items: ["Campus Tour", "Infrastructure", "Location"],
  },
  {
    trigger: "PLACEMENTS",
    items: ["Overview", "Statistics", "Success Stories"],
  },
];

export const MainNav = () => {
  return (
    // <NavigationMenu className="hidden sm:block">
    //   <NavigationMenuList className="flex space-x-">
    //     {menuItems.map((menu) => (
    //       <NavigationMenuItem key={menu.trigger} className="relative">
    //         <NavigationMenuTrigger className="font-medium text-xs hover:text-yellow-600">
    //           {menu.trigger}
    //         </NavigationMenuTrigger>
    //         <NavigationMenuContent className="absolute left-0">
    //           <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-lg rounded-md">
    //             {menu.items.map((item) => (
    //               <li key={item}>
    //                 <a
    //                   href="#"
    //                   className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700"
    //                 >
    //                   <div className="text-sm font-medium leading-none">
    //                     {item}
    //                   </div>
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //     ))}
    //   </NavigationMenuList>
    // </NavigationMenu>
    <nav>
      <ul className=" items-center gap-6 text-base hidden sm:flex">
        {menuItems.map((menu) => (
          <li key={menu.trigger} className="hover:text-green-900 cursor-pointer hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-green-900 duration-300 transition-all hover:after:transition-all hover:-translate-y-1">
            {menu.trigger}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
