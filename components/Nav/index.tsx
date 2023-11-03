import CompanyLogo from "./company"
import Navigation from "./navigation"
import { ModeToggle } from "@/components/ui/mode-toggle"

const Navbar = () => {
  return (
    <header className="flex h-20 fixed top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <CompanyLogo />

          <Navigation />
        </div>

        <div className="flex items-center gap-1">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar
