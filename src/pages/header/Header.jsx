import TopBar from "./TopBar"
import  MainNav  from "./MainNav"

export function Header() {
  return (
    <header className="border-b shadow-sm">
      <TopBar />
      <div className="sm:container md:max-w-6xl lg:max-w-7xl  mx-auto   px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex flex-col items-start">
            <div className="text-2xl font-bold text-green-700">Col Brown</div>
            <div className="text-xl font-semibold text-green-600">Cambridge School</div>
            <div className="text-xs text-gray-500">SINCE 1926</div>
          </a>
          <MainNav />
        </div>
      </div>
    </header>
  )
}

