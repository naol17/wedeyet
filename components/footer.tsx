"use client"

import { ChangeEvent, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react"

import Feedback from "./feedback"

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("")
  const [email, setEmail] = useState<string>("")
  const [inputEmail, setIemail] = useState("")
  const [emailError, setEmailError] = useState<string>("")

  const [feedback, setFeedback] = useState("")
  const [followUp, setFollowUp] = useState(true)
  const [data, setData] = useState("")

  // ///////////////////////////////////////////////////

  // //////////////////////////////////////////////////

  return (
    <>
      <Feedback />

      {showModal ? <></> : null}
      <footer>
        <div className="container space-y-8 py-8 lg:space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2 lg:ml-24">
              <div className="flex items-center text-primary">
                <Image src="/logo.png" height={50} width={50} alt="logo" />
              </div>

              <p className="mt-4 max-w-xs text-gray-500 dark:text-white">
                Simplifying Addis Ababa&apos;s navigation with ease. Discover,
                explore, and navigate the city hassle-free. Your go-to app for
                finding shops, cafes, hospitals, and more.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <Link
                    href="https://www.facebook.com/"
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
                    href="https://www.instagram.com/"
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
                    href="https://twitter.com/"
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
                      href="/about"
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
                      href="/contact"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/#faq-section"
                      className="text-gray-500 transition hover:opacity-75"
                      // onClick={() => setShowModal(true)}
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
                      href="mailto:info@wedeyet.com"
                      target="blank"
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
                      href={`tel:${+251917846893}`}
                      target="blank"
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
