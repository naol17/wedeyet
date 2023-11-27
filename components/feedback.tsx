/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from "react"

function Feedback() {
  const [showModal, setShowModal] = useState(false)
  const [showModall, setShowModall] = useState(false)

  const [text, setText] = useState("")
  const [inputEmail, setIemail] = useState("")
  const [emailError, setEmailError] = useState<string>("")
  const [txtError, setTxtError] = useState<string>("")

  const [feedback, setFeedback] = useState("")
  const [followUp, setFollowUp] = useState(true)
  const [data, setData] = useState("")

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (text.trim() === "") {
      setTxtError("Text area cannot be empty")
      return
    }
    if (!handleEmailChange()) {
      setEmailError("Please enter a valid email address.")
      return
    }

    setTxtError("")
    setEmailError("")
    const data = { feedback, text, inputEmail, followUp }

    try {
      const response = await fetch(
        "https://wedeyet.herokuapp.com/api/feedback/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTcwMTExNzg4OSwiZXhwIjoxNzAxNTQ5ODg5fQ.FOlto_cZ2Pne88OAZzs7q8Q8cXf2zl5Euceif__EqbA",
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setShowModall(true) // Show the modal on successful form submission
        console.log("hodhukana", data)
      } else {
        console.error("Form submission failed! isakana rakkoon")
      }
    } catch (error) {
      console.error("Form submission failed!", error)
      setShowModall(true)
    }

    console.log(data)
    // alert("Thank you for your feedback! ")
    setText("")
    setFeedback("")
    setIemail("")
  }

  console.log(feedback, text, inputEmail, followUp)

  const [selectedRating, setSelectedRating] = useState<string>("")

  const handleRatingClick = (rating: string) => {
    setFeedback(rating)
  }

  const handleEmailChange = (): boolean => {
    // Email validation using regular expression
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(inputEmail)) {
      setIemail(inputEmail)
      return true
    }
    return false
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-2xl focus:outline-none bg-zinc-950 bg-opacity-25 dark:bg-gray-400 dark:bg-opacity-25">
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        <div className="border-0 rounded-lg pr-8 shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none dark:bg-slate-950">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold mt-3">Give us feedback</h3>
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
              onBlur={() => {
                if (text.trim() === "") {
                  setTxtError("Text area cannot be empty")
                } else {
                  setTxtError("")
                }
              }}
            ></textarea>
            {txtError && <p className="text-red-600">{txtError}</p>}
          </div>
          <div className="mb-2">
            <form action="">
              <input
                className="ml-5 p-3 border border-primary rounded-md w-[90%]"
                type="text"
                placeholder="Enter Your Email address"
                value={inputEmail}
                onChange={(e) => setIemail(e.target.value)}
              />
              {emailError && <p className="text-red-600 ml-5">{emailError}</p>}
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
              onClick={handleSubmit}
              // onClickCapture={() => setShowModall(true)}
            >
              Send
            </button>
            <button
              className="text-black background-transparent border rounded-md border-primary font-semibold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 dark:text-white"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {showModall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl ">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl font-semibold">Thank You!</h3>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-gray-600 text-lg leading-relaxed">
                  Thank you for your feedback!
                </p>
              </div>

              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setShowModall(false)}
              >
                <span className="opacity-7 h-8  text-2xl block align-middle text-center ml">
                  Ok
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feedback
