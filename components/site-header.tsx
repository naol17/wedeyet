import { Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Input } from "./ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="flex border-2 rounded-lg border-primary">
              <Input
                placeholder="Search for a place"
                className="border-0 w-80"
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
