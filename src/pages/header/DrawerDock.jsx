import { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { navlinks } from "./navData";
import { Link } from "react-router-dom";

const DrawerDock = (props) => {
  const CollapsibleNavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors">
          {item.name}
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="pl-4 space-y-1">
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <SheetClose asChild>
                  {subItem.pdf ? (
                    <a
                      href={subItem.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 w-fit text-sm text-slate-200 hover:bg-white/10 rounded transition-colors"
                    >
                      {subItem.name}
                    </a>
                  ) : (
                    <Link
                      to={subItem.path}
                      className="block py-2 px-4 w-fit text-sm text-slate-200 hover:bg-white/10 rounded transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  )}
                </SheetClose>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden block">
        <button className="p-2 text-black  rounded lg:hidden">
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu text-white"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-green-900 bg-opacity-90  overflow-auto border-none">
        <SheetHeader>
          <SheetTitle className="text-white text-2xl font-bold text-left">
            Col. Brown School
          </SheetTitle>
          <SheetDescription className="text-white text-left pt-5">
            <nav>
              <ul className="space-y-1">
                {navlinks.map((item, index) => (
                  <li key={index}>
                    {item.submenu ? (
                      <CollapsibleNavItem item={item} />
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={item.path}
                          className="block py-2 px-4 w-fit text- font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerDock;
