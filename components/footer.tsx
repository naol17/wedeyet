"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Minimize2Icon,
  Phone,
  Twitter,
} from "lucide-react"

import { Button } from "./ui/button"

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-2xl focus:outline-none bg-zinc-950 bg-opacity-20">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold mt-5">
                    Give us feedback
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right mt-[-3rem] mr-[-2rem]"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" opacity-7 h-8 w-8 text-xl block bg-primary text-white py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="mt-3">What do you think of our service?</p>
                  <div className="flex flex-row bg-slate-500 align-middle justify-center space-x-1 m-3">
                    <button className="p-2 bg-red-500 w-40 active:bg-red-950 ">
                      <span className="h-10 w-40" aria-label="sheep">
                        🐑
                      </span>
                    </button>
                    <button>4</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                  </div>
                  <textarea
                    className="border border-primary rounded-md p-3 "
                    placeholder="This is . . ."
                  ></textarea>
                </div>
                <div className="ml-5 mb-3">
                  <p>May we follow you up on your feedback?</p>
                  <div className="flex flex-row mt-2">
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      className="ml-2"
                      checked
                    />
                    Yes
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      className="ml-2"
                    />
                    No
                  </div>
                </div>
                <div className="flex items-center justify-start p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white shadow-md bg-primary active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                  <button
                    className="text-black background-transparent shadow-md border-primary font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <footer>
        <div className="container space-y-8 py-16 lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center text-primary">
                <Image src="/logo.png" height={50} width={50} alt="logo" />
              </div>

              <p className="mt-4 max-w-xs text-gray-500">
                Simplifying Addis Ababa&apos;s navigation with ease. Discover,
                explore, and navigate the city hassle-free. Your go-to app for
                finding shops, cafes, hospitals, and more.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <Twitter className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
              <div className="px-25 mt-5">
                <button
                  className="flex flex-row bg-primary text-white active:bg-green-700 
                   font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                  <span className="mr-2 text-white"> Feedback</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-medium">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Meet the Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium ">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <Mail className="h-5 w-5 shrink-0" />

                      <span className="flex-1 text-gray-500">
                        info@wedeyet.com
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <Phone className="h-5 w-5 shrink-0" />

                      <span className="flex-1 text-gray-500">
                        +251 917846893
                      </span>
                    </Link>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <MapPin className="h-5 w-5 shrink-0" />
                    <address className="-mt-0.5 flex-1 not-italic text-gray-500">
                      Addis Ababa, Ethiopia
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            &copy; 2023. Wedeyet. All rights reserved.
          </p>
        </div>
        {/* <!-- Small Modal --> */}
        <div
          id="small-modal"
          // tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Small modal
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="small-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              {/* <!-- Modal footer - */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="small-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="small-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        {/*  */}
      </footer>
    </>
  )
}

export default Footer
function fire(arg0: {
  title: string
  text: string
  icon: string
  showCancelButton: boolean
  confirmButtonColor: string
  cancelButtonColor: string
  confirmButtonText: string
  cancelButtonText: string
}) {
  throw new Error("Function not implemented.")
}
