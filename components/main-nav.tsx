"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex flex-wrap items-center justify-between lg:pr-10 lg:pt-0  sm:mr-6  sm:mt-7 lg:bg-inherit ">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          // asi lawxin jiru
          className="flex items-center px-3 py-2 rounded text-primary mt-1 pt-10 mr-14  "
        >
          <svg
            className={`fill-current h-5 w-5 pt-[-20rem] ${
              isOpen ? "hidden" : "block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>

          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto xs:bg-slate-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:pt-0 lg:mt-0  lg:flex        ml-10 pl-3  mt-[-26rem] pt-[22rem]   ">
          <a
            href="#"
            className="block mt-1 pt-7 lg:pt-0 lg:inline-block lg:mt-0 text-white-200 mr-4 "
          >
            Home{" "}
          </a>

          <a
            href="#"
            className="block mt-1lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            place{" "}
          </a>

          <a
            href="#"
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            About{" "}
          </a>

          <a
            href="#"
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Contact{" "}
          </a>
        </div>
      </div>
    </nav>
  )
}

// <nav className="flex items-center justify-between flex-wrap p-6 mr-20">
//       <div className="block lg:hidden mt-8">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center rounded text-black-500 hover:text-primary mt-5"
//         >
//           <svg
//             className={`fill-current h-5 w-5 text-primary ${
//               isOpen ? "hidden" : "block"
//             }`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>

//           <svg
//             className={`fill-current h-5 w-5 text-primary ${
//               isOpen ? "block" : "hidden"
//             }`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//           </svg>
//         </button>
//       </div>

//       <div
//         className={`lg:flex w-full block flex-grow  lg:items-center lg:w-auto ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         {items?.length ? (
//           <nav className="text-sm lg:flex-grow mt-5">
//             {items?.map(
//               (item, index) =>
//                 item.href && (
//                   <Link
//                     key={index}
//                     href={item.href}
//                     className={cn(
//                       "lg:flex items-center text-sm font-medium text-muted-foreground",
//                       item.disabled && "cursor-not-allowed opacity-80"
//                     )}
//                   >
//                     {item.title}
//                   </Link>
//                 )
//             )}
//           </nav>
//         ) : null}
//         <div className="text-sm lg:flex-grow"></div>
//       </div>
//     </nav>
