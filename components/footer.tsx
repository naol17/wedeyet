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

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("")
  const [email, setEmail] = useState<string>("")
  const [inputEmail, setIemail] = useState("")
  const [emailError, setEmailError] = useState<string>("")

  const [feedback, setFeedback] = useState("")
  const [followUp, setFollowUp] = useState(true)
  const [data, setData] = useState("")

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = { feedback, text, email, followUp }

    if (!handleEmailChange) {
      setEmailError("Please enter a valid email address.")
      return
    }

    setEmailError("")

    try {
      const response = await fetch(
        "https://wedeyet.herokuapp.com/api/feedback/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRkNmFhZmZiODkwMDE2YjRiZmQzOTY2IiwiZW1haWwiOiJyZWRAZ21haWwuY29tIiwiaWF0IjoxNjkzMDc5MjUzLCJleHAiOjE2OTM1MTEyNTN9.KPKkOCAKTClnaKUPd-SthDj7-vYNraFWHPij7nE9fTM",
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setShowModal(true) // Show the modal on successful form submission
        console.log("hodhukana", data)
      } else {
        console.error("Form submission failed! isakana rakkoon")
      }
    } catch (error) {
      console.error("Form submission failed!", error)
    }
    console.log(data)
    alert("Thank you for your feedback! ")
    setText("")
    setFeedback("")
    setEmail("")
  }
  console.log(feedback, text, followUp)

  const [selectedRating, setSelectedRating] = useState<string>("")

  const handleRatingClick = (rating: string) => {
    setFeedback(rating)
  }
  const handleEmailChange = (): void => {
    // Email validation using regular expression
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(inputEmail)) {
      setEmail(inputEmail)
    }
  }

  // ///////////////////////////////////////////////////

  // //////////////////////////////////////////////////

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-2xl focus:outline-none bg-zinc-950 bg-opacity-25 dark:bg-gray-400 dark:bg-opacity-25">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg pr-8 shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none dark:bg-slate-950">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold mt-3">
                    Give us feedback
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right mt-[-3rem] "
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" opacity-7 h-8 w-8 text-xl block bg-primary text-white py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="mt-3">What do you think of our service?</p>
                  <div className="flex flex-row align-middle justify-center space-x-1 m-3">
                    <button
                      className={`p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full ${
                        feedback === "1" ? "bg-primary" : ""
                      }`}
                      onClick={() => handleRatingClick("1")}
                    >
                      <img src="/uf.png" alt="" />
                    </button>
                    <button
                      className={`p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full ${
                        feedback === "2" ? "bg-primary" : ""
                      }`}
                      onClick={() => handleRatingClick("2")}
                    >
                      <img src="/nf.png" alt="" />
                    </button>
                    <button
                      className={`p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full ${
                        feedback === "3" ? "bg-primary" : ""
                      }`}
                      onClick={() => handleRatingClick("3")}
                    >
                      <img src="/sm.png" alt="" />
                    </button>
                    <button
                      className={`p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full ${
                        feedback === "4" ? "bg-primary" : ""
                      }`}
                      onClick={() => handleRatingClick("4")}
                    >
                      <img src="/kf.png" alt="" />
                    </button>
                    <button
                      className={`p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full ${
                        feedback === "5" ? "bg-primary" : ""
                      }`}
                      onClick={() => handleRatingClick("5")}
                    >
                      <img src="/ss.png" alt="" />
                    </button>
                  </div>
                  <textarea
                    className="border border-primary rounded-md p-3 w-[100%] "
                    placeholder="This is . . ."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-2">
                  <form action="">
                    <input
                      className="ml-5 p-3 border border-primary rounded-md w-[90%]"
                      type="text"
                      placeholder="Enter Your Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p>{emailError}</p>}
                  </form>
                </div>
                <div className="ml-5 mb-3">
                  <p>May we follow you up on your feedback?</p>
                  <div className="flex flex-row mt-2">
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      className="ml-2  mr-2 p-10 h-5 w-5 accent-green-600 border border-red-500"
                      size={22}
                      checked
                    />
                    Yes{" "}
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      className="ml-2 mr-2 h-5 w-5 accent-green-600 dark:bg-white"
                      onClick={() => {
                        setFollowUp(false)
                      }}
                    />
                    No
                  </div>
                </div>
                <div className="flex items-center justify-start p-4 pl-7 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white shadow-md bg-primary active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                    onClickCapture={handleSubmit}
                  >
                    Send
                  </button>
                  <button
                    className="text-black background-transparent border rounded-md border-primary font-semibold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 dark:text-white"
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
