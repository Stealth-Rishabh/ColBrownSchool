import TopBar from "./TopBar";
import MainNav from "./MainNav";
import logo from "../../assets/logo.png";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Add delay using setTimeout
      setTimeout(() => {
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }, 100); // 100ms delay
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={` shadow-sm z-50 bg-white/70 backdrop-blur-sm transition-all duration-500 ${
        isVisible ? 'sticky top-0 translate-y-0' : 'relative -translate-y-full'
      }`}
    >
      <TopBar />
      <div className="sm:container md:max-w-6xl lg:max-w-[1400px]  mx-auto py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex flex-col items-start">
            <img
              src={logo}
              alt="Col Brown Cambridge School"
              className="bg-whit p-2 rounded-md  h-16"
            />
          </a>
          <MainNav />
          <Drawer />
        </div>
      </div>
    </header>
  );
}
