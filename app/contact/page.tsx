"use client"

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Mail, Send, User } from "lucide-react"

const Contact: React.FC = () => {
  interface FormData {
    name: string
    email: string
    message: string
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [emailError, setEmailError] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false) // Add state for the modal

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTcwMDU5OTE1MSwiZXhwIjoxNzAxMDMxMTUxfQ.zUVOViChrV_8QiWYCCkqP0C82X0GHpxkHntr1Dn1hvo",
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setShowModal(true) // Show the modal on successful form submission
        console.log("hodhukana", formData)
      } else {
        console.error("Form submission failed! isakana rakkoon")
      }
    } catch (error) {
      console.error("Form submission failed!", error)
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const closeModal = () => {
    setShowModal(false) // Function to close the modal
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-full mt-5">
        <h1 className="text-4xl">Contact Us</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center lg:mr-28 lg:ml-36 mr-12 ml-16 mt-10 ">
        <div className="lg:col-span-1 md:col-span-1 w-full p-6 ">
          <img
            src="./contact_us.svg"
            alt="Contact Us"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:col-span-1 md:col-span-1 w-full p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block  dark:text-white text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                <User size={16} className="inline-block mr-1" /> Name
              </label>
              <input
                className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block  dark:text-white text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                <Mail size={16} className="inline-block mr-1" /> Email
              </label>
              <input
                className="shadow  dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block  dark:text-white text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow  dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <Send size={16} className="inline-block mr-1" /> Submit
            </button>
          </form>
        </div>
        {/* Render the modal conditionally */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10 shadow-lg border-green-400 bg-slate-400 bg-opacity-25 dark:bg-gray-400 dark:bg-opacity-25">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-black">
                Success!
              </h2>
              <p className="dark:text-black">
                Your form has been submitted successfully.
              </p>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Contact
