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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTcwMTU0NTA0OSwiZXhwIjoxNzAxOTc3MDQ5fQ.Nsb8U7C8FOEO7aWyjNSt11JLKW7hLuL_szpSu7L5ai4",
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
      <nav className="sticky border-b-black dark:border-b-white  mb-5 shadow-md dark:shadow-md dark:shadow-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <div className="flex items-center justify-between h-16 ml-5">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-white font-bold text-xl">
                <img src="/logo.png" className="w-100 h-10 mr-2" alt="Logo" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className=" flex items-baseline space-x-4 mt-5">
                <a
                  href="/"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="about"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="contact"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="ml-4 mt-5">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a place"
                className="bg-gray-100 rounded-md px-4 py-2 text-black dark:text-black sm:w-72 md:w-64 lg:w-72 "
              />
            </div>
            <ThemeToggle />

            <div className="md:hidden sm:ml-5">
              <button
                type="button"
                className="text-black dark:text-white focus:text-black dark:focus:text-white mt-5"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {showMenu ? (
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  ) : (
                    <path
                      className="block"
                      d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mr-5">
                <a
                  href="/"
                  className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="about"
                  className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="contact"
                  className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
        <div
          className="ml-8 md:mr-10 lg:mr-10 mr-4"
          style={{
            overflowY: "scroll",
            maxHeight: "200px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
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
