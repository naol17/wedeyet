"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link, Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Card, CardContent, CardDescription } from "./ui/card"
import { Input } from "./ui/input"

export function SiteHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([])
  const [places, setPlaces] = useState<any[]>([])
  const [searched, setSearched] = useState(false)

  // search query

  const fetchData = () => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRkNmFhZmZiODkwMDE2YjRiZmQzOTY2IiwiZW1haWwiOiJyZWRAZ21haWwuY29tIiwiaWF0IjoxNjkzMDc5MjUzLCJleHAiOjE2OTM1MTEyNTN9.KPKkOCAKTClnaKUPd-SthDj7-vYNraFWHPij7nE9fTM ",
    }
    axios
      .get("https://wedeyet.herokuapp.com/api/place/all", { headers })
      .then((response) => {
        setPlaces(response.data.Places)
        setSearched(true)
      })
      .catch((error) => alert("Please Check That You are Connected to Network"))
  }

  useEffect(() => {
    fetchData()
    // Filter the places based on the search query
    const filteredResults = places.filter((place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredPlaces(filteredResults)
  }, [searchQuery])
  console.log("searching", searchQuery)

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      {/* <header className="sticky top-0 z-40 w-full border-b bg-background flex items-center justify-between flex-wrap  pb-5 sm:pb-10 lg:pb-5">
        <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0 lg:ml-36 lg:mr-14">
          <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-60 sm:mr-40 mt-8 sm:mt-12 lg:mt-5">
            <img src="/logo.png" className="w-100 h-10 mr-2" alt="Logo" />
          </div>
          <div className="flex items-center justify-end flex-1 space-x-4 ">
            <nav className="flex items-center space-x-1 ">
              <MainNav items={siteConfig.mainNav} />

              <div className="flex border-2 rounded-lg mt-10 sm:mt-20 border-primary lg:mt-5">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
      </header> */}

      {/* **********************************************
////////////////////////////////////////////////// */}

      {/* <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {showMenu ? (
                    <path
                      className="hidden"
                      fillRule="evenodd"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  ) : (
                    <path
                      className="block"
                      fillRule="evenodd"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav> */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-white font-bold text-xl">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="ml-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a place"
                className="bg-inherit border-primary rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="dark:text-white hover:text-gray-400 focus:outline-none focus:text-white"
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {showMenu ? (
                    <path
                      className="hidden"
                      fillRule="evenodd"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  ) : (
                    <path
                      className="block"
                      fillRule="evenodd"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* ********************************************
       ************************************************ */}
      {searchQuery !== "" ? (
        <div className=" ml-8 md:mr-10 lg:mr-10 mr-4">
          {filteredPlaces.map((place) => (
            <a
              href={`/pages?id=${place._id}&subCategory=${place.subCategory.name}`}
            >
              <Card className="shadow-lg relative m-2 lg:mr-16  md:mr-16 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-white">
                <CardContent className="items-center gap-4 mt-2">
                  {place.name}
                </CardContent>
                <CardDescription className="ml-6 mb-2 -mt-5">
                  {place.description.length > 50
                    ? place.description.slice(0, 50) + "..."
                    : place.description}
                </CardDescription>
              </Card>
            </a>
          ))}
        </div>
      ) : null}
    </>
  )
}
