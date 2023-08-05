/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

"use client"

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from "react"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { ChevronRight, LocateFixed, Phone, Send, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

// type PlaceImage = {
//   image: string
//   name: string
//   description: string
// }

const placeImages = [
  {
    name: "Akko Coffee",
    image: "https://source.unsplash.com/random/300x300",
    description:
      "adipisicing elit. A illum soluta optio repellendus ullam adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor quidem dolore itaque illum possimus quisquam iure.",
  },
  {
    name: "Coffecology Coffee",
    description:
      "adipisicing elit. A illum soluta optio repellendus ullam adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor quidem dolore itaque illum possimus quisquam iure.",

    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Chaka Coffee",
    description:
      "adipisicing elit. A illum soluta optio repellendus ullam adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor quidem dolore itaque illum possimus quisquam iure.",

    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "kaldis Coffee",
    description:
      "adipisicing elit. A illum soluta optio repellendus ullam adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor quidem dolore itaque illum possimus quisquam iure.",

    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "mina Coffee",
    description:
      "adipisicing elit. A illum soluta optio repellendus ullam adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor quidem dolore itaque illum possimus quisquam iure.",

    image: "https://source.unsplash.com/random/300x300",
  },
]

const page = () => {
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    // console.log("wayoo", id)
  }
  const [users, setUsers] = useState<any[]>([])
  const [place, setPlaces] = useState<any[]>([])
  const fetchData = () => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    console.log("inside fetch", id)
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YTFiMTU3ODUyODRlYmEwNjYyOTY5IiwiZW1haWwiOiJudW5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MTI2Nzg3MCwiZXhwIjoxNjkxNjk5ODcwfQ.cCC-Ok9qdZthR8QoNCez8NO4Z9UnC6fknAbj_7Kw86s ",
    }
    axios
      .get(`https://wedeyet.herokuapp.com/api/place/get/${id}`, { headers })
      .then((response) => {
        setUsers(response.data)
        setPlaces(response.data.Place)
        console.log(response.data)
      })
      .catch((error) => alert("Please Check That You are Connected to Network"))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [similarplace, setSimilarPlaces] = useState<any[]>([])
  const SimilarfetchData = () => {
    const params = new URLSearchParams(window.location.search)
    const subCategory = params.get("subCategory")
    console.log("inside subCategory", subCategory)
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YTFiMTU3ODUyODRlYmEwNjYyOTY5IiwiZW1haWwiOiJudW5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MTI2Nzg3MCwiZXhwIjoxNjkxNjk5ODcwfQ.cCC-Ok9qdZthR8QoNCez8NO4Z9UnC6fknAbj_7Kw86s ",
    }
    axios
      .get(
        `https://wedeyet.herokuapp.com/api/place/search?subCategory=${subCategory}`,
        {
          headers,
        }
      )
      .then((response) => {
        setSimilarPlaces(response.data.Place)
        console.log(response.data)
      })
      .catch((error) => alert("Please Check That You are Connected to Network"))
  }

  useEffect(() => {
    SimilarfetchData()
  }, [])
  console.log("similar", similarplace)
  if (!place) {
    return <p>Loading...</p>
  }

  // image slider
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentCard, setCurrentCard] = useState(0)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 250 // Adjust the scroll distance
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 250 // Adjust the scroll distance
    }
  }
  const scrollLef = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }

  const scrollRigh = () => {
    if (currentCard < 4) {
      setCurrentCard(currentCard + 1)
    }
  }

  //

  return (
    <>
      {/*  */}
      <div className="flex items-center justify-center w-full h-full">
        {place.map(
          (
            place,
            //  {
            //   // category: any
            //   name: any
            // },
            i
          ) => (
            <h1 className="text-3xl mt-2">{place.name}</h1>
          )
        )}
      </div>

      <section className="bg-gray-100 mt-5">
        <div className="flex items-center justify-center">
          <div
            className="flex overflow-x-auto hide-scroll-bar  py-6  gap-5 w-"
            ref={sliderRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {placeImages.map((place, i) => (
              <Card key={i} className=" shadow-lg group">
                <Link href="/" className="group-hover:animate-pulse">
                  <div key={i} className="slider-card shadow-lg group">
                    <CardContent className="relative p-0">
                      <img
                        src="https://source.unsplash.com/random/250x250"
                        // src={place.image}
                        className="rounded-md !max-w-[1000px]"
                      />
                      <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4"></div>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <div className=" align-middle justify-center flex gap-10">
          <button
            className="px-4 py-2 bg-green-500 rounded-full text-white"
            onClick={scrollLeft}
          >
            &lt;
          </button>
          <button
            className="px-4 py-2 bg-green-500 rounded-full text-white"
            onClick={scrollRight}
          >
            &gt;
          </button>{" "}
        </div>
      </section>

      {place.map(
        (
          place,
          //  {
          //   // category: any
          //   name: any
          // },
          i
        ) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-5 gap-2 lg:w-full">
            <div className="flex justify-center  ">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 m-5 gap-3 lg:w-full">
                <div className="flex justify-center h-11 md:mt-14 lg:mt-14 ">
                  <button className="flex gap-2 bg-primary hover:bg-green-600 text-white font-bold py-2 px-2 rounded">
                    <LocateFixed className="h-4 w-4 sm:h-6 sm:w-6 lg:h-6 lg:w-6 text-white mt-2" />
                    <span className="mr-3  text-white  sm:text-sm text-lg lg:text-base ">
                      Direction{" "}
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center   ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.236161626544!2d38.74860638768315!3d9.058379475241788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f350fce1a09%3A0x9b9773a5bb80aa81!2sSheger%20Park!5e0!3m2!1sen!2set!4v1686264906490!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
                <p className="mt-2 ml-7 w-fit">{place.name}</p>
              </div>
            </div>

            <div className="flex justify-center  ">
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1  m-5 gap-6 mt-5 lg:w-full md:ml">
                <div className="flex justify-center md:justify-start  mr-11 md:mr-1 ml-3 lg:mr-8">
                  <Button>
                    <Phone className="h-7 w-7" />
                  </Button>
                  <p className=" text-sm sm:text-sm lg:text-base ml-1 pt-2">
                    {place.phoneNumber}
                  </p>
                </div>
                <div className="flex justify-center md:justify-start mr-3 md:mr-10 lg:mr-8 ">
                  <Button>
                    <Send className="h-7 w-7" />
                  </Button>
                  <p className="  text-sm sm:text-sm lg:text-base ml-1 pt-2">
                    {place.telegram}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      <div className="mx-auto flex w-11/12 flex-col gap-6">
        <h2 className="justify-end text-lg text-center font-bold">
          Description
        </h2>
        {place.map(
          (
            place,
            //  {
            //   // category: any
            //   name: any
            // },
            i
          ) => (
            <p>{place.description}</p>
          )
        )}
      </div>
      <section>
        <div className="mt-4">
          {" "}
          <h2 className="justify-end text-lg text-center font-bold">
            Similar Place
          </h2>
        </div>
        <div className="container flex gap-10 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {similarplace.map(
            (
              place,
              //  {
              //   // category: any
              //   name: any
              // },
              i: any
            ) => (
              <Card key={i} className="max-w-sm shadow-lg">
                <Link
                  href={`/pages?id=${place._id}&subCategory=${place.subCategory.name}`}
                >
                  <CardContent className="flex flex-col justify-center p-0">
                    <img
                      src="https://source.unsplash.com/random/250x250"
                      className="max-w-sm rounded-md rounded-b-none"
                      alt="placeholder"
                    />
                    <div className="flex flex-col gap-2 p-4">
                      <h2 className="text-xl font-semibold">{place.name}</h2>
                      <p>{place.category.name}</p>
                    </div>
                    <Button className="mt-6 w-full rounded-t-none text-lg">
                      Go <ChevronRight />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            )
          )}
        </div>
      </section>
      <div className="flex flex-col w-11/12 gap-6 mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
          soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
          nobis soluta, eum consequatur dolor quidem dolore itaque illum
          possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi.
          Laborum necessitatibus nobis soluta, eum consequatur dolor quidem
          dolore itaque illum possimus quisquam iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
          soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
          nobis soluta, eum consequatur dolor quidem dolore itaque illum
          possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi.
          Laborum necessitatibus nobis soluta, eum consequatur dolor quidem
          dolore itaque illum possimus quisquam iure.
        </p>
      </div>
      <section>
        {/* <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {placeImages.map((place, i) => (
              <Card key={i} className="shadow-lg group bg-gray-100 ">
                <Link href="/" className="group-hover:animate-pulse">
                  <CardContent className="relative p-0">
                    <img
                      // src={place.image}
                      src="https://source.unsplash.com/random/300x300"
                      className="rounded-md lg:!max-w-[700px] md:!max-w-[500px] sm:!max-w-[500px]"
                      alt={place.name}
                    />
                    <Badge className="absolute left-5 top-3 px-4 text-lg md:top-3 md:left-3 md:text-sm sm:text-xs xsm:left-2 sm:top-1">
                      Add
                    </Badge>
                  </CardContent>
                </Link>
                <div className="">
                  <h2 className="ml-5 mb-5 mt-5">Descriptionss</h2>
                  <p className="ml-5 mb-4">{place.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </section>
      <section>
        <div className="container flex gap-5 py-5 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {similarplace.map(
            (
              place,

              i
            ) => (
              <Card key={i} className="max-w-sm shadow-lg">
                <Link
                  href={`/pages?id=${place._id}&subCategory=${place.subCategory.name}`}
                  className="group-hover:animate-pulse"
                >
                  <CardContent className="flex flex-col justify-center p-0">
                    <img
                      src="https://source.unsplash.com/random/250x250"
                      className="max-w-sm rounded-md rounded-b-none"
                      alt="placeholder"
                    />
                    <div className="flex flex-col gap-2 p-4">
                      <h3>{place.name}</h3>
                      <h2 className="ml-5 mb-5 mt-5">Description</h2>
                      <p className="ml-5 mb-4">
                        {place.description.length > 30
                          ? place.description.slice(0, 30) + "..."
                          : place.description}
                      </p>
                    </div>
                    <Badge className="absolute left-5 top-3 px-4 text-lg md:top-3 md:left-3 md:text-sm sm:text-xs sm:left-2 sm:top-1">
                      Add
                    </Badge>
                  </CardContent>
                </Link>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  )
}

export default page
