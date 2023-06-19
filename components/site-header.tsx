import { Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Input } from "./ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background flex items-center justify-between flex-wrap  pb-5 sm:pb-10 lg:pb-5">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-60 sm:mr-40 mt-8 sm:mt-12 lg:mt-5">
          <img src="/logo.png" className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="flex items-center justify-end flex-1 space-x-4 ">
          <nav className="flex items-center space-x-1 ">
            <MainNav items={siteConfig.mainNav} />

            <div className="flex border-2 rounded-lg mt-10 sm:mt-20 border-primary lg:mt-5">
              <Input
                placeholder="Search for a place"
                className="border-0 lg:w-80 md:w-40 sm:w-20"
              />

              <Button variant="ghost">
                <Search />
              </Button>
            </div>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
