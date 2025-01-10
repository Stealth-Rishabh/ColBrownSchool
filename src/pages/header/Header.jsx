import TopBar from "./TopBar"
import  MainNav  from "./MainNav"
import logo from "../../assets/logo.png"
import Drawer from "./Drawer"
export function Header() {
  return (
    <header className="border-b shadow-sm">
      <TopBar />
      <div className="sm:container md:max-w-6xl lg:max-w-7xl  mx-auto   px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex flex-col items-start">
            <img src={logo} alt="Col Brown Cambridge School" className="bg-white p-2 rounded-md  h-16" />
           
          </a>
          <MainNav />
          <Drawer/>
        </div>
      </div>
    </header>
  )
}

