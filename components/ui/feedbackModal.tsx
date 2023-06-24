"use client"

import { useState } from "react"

export default function feedbackModal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-2xl focus:outline-none bg-zinc-950 bg-opacity-20">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg pr-8 shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">
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
                    <button className="p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full">
                      <img src="/uf.png" alt="" />
                    </button>
                    <button className="p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full">
                      <img src="/nf.png" alt="" />
                    </button>
                    <button className="p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full">
                      <img src="/sm.png" alt="" />
                    </button>
                    <button className="p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full">
                      <img src="/kf.png" alt="" />
                    </button>
                    <button className="p-2 bg-green-200 w-16 h-16 active:bg-primary rounded-full">
                      <img src="/ss.png" alt="" />
                    </button>
                  </div>
                  <textarea
                    className="border border-primary rounded-md p-3 w-[100%] "
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
                      className="ml-2  mr-2 p-10 h-5 w-5 accent-green-600 border border-red-500"
                      size={22}
                      checked
                    />
                    Yes{" "}
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      className="ml-2 mr-2 h-5 w-5 accent-green-600"
                    />
                    No
                  </div>
                </div>
                <div className="flex items-center justify-start p-4 pl-7 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white shadow-md bg-primary active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                  <button
                    className="text-black background-transparent border rounded-md border-primary font-semibold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
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
    </>
  )
}
