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
  useMemo,
  useRef,
  useState,
} from "react"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api"
import axios from "axios"
import { ChevronRight, LocateFixed, Phone, Send, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import MapAutoComplete from "@/components/mapAutoComplete"

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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTY5NzcxNzQxOCwiZXhwIjoxNjk4MTQ5NDE4fQ.3iOtLZ0A1B55my3elCl-_ZxmS773wYuaEI3oEHrf0Qo",
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

  // ****************************************************
  // ***************                      ***************
  // ***************  Ad fetching Section ***************
  // ***************                      ***************
  // ****************************************************
  const [Ads, setAds] = useState<any[]>([])
  const AdsData = () => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTY5NzcxNzQxOCwiZXhwIjoxNjk4MTQ5NDE4fQ.3iOtLZ0A1B55my3elCl-_ZxmS773wYuaEI3oEHrf0Qo",
    }
    axios
      .get("https://wedeyet.herokuapp.com/api/banner/all", { headers })
      .then((response) => {
        setAds(response.data.Banner)
      })
      .catch((error) => alert("Please Check banner"))
  }

  useEffect(() => {
    AdsData()
  }, [])
  console.log("banner", Ads)

  // ****************************************************
  // ********                                ************
  // ******** Similar place fetching Section ************
  // ********                                ************
  // ****************************************************

  const [similarplace, setSimilarPlaces] = useState<any[]>([])
  const SimilarfetchData = () => {
    const params = new URLSearchParams(window.location.search)
    const subCategory = params.get("subCategory")
    console.log("inside subCategory", subCategory)
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZTg4OWI0NmIxNjExNmYyN2Y2MzMyIiwiZW1haWwiOiJhZG1pbkBudW5hLmNvbSIsImlhdCI6MTY5NzcxNzQxOCwiZXhwIjoxNjk4MTQ5NDE4fQ.3iOtLZ0A1B55my3elCl-_ZxmS773wYuaEI3oEHrf0Qo",
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

  //
  // map

  const libraries = useMemo(() => ["places"], [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAWoIkWZaUYa3hIw2HgaOn2XLEoBL09Efo",
    libraries: libraries as any,
  })

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  )

  const LoadingSpinner = () => {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center mt-20">
        <LoadingSpinner />
      </div>
    )
  }

  //

  return (
    <>
      {/*  */}
      <div className="flex items-center justify-center w-full h-full">
        {place.map(
          (
            place,

            i
          ) => (
            <h1 className="text-3xl mt-2">{place.name}</h1>
          )
        )}
      </div>

      <section className=" mt-5 dark:bg-inherit ">
        <div className="flex items-center justify-center lg:ml-40 lg:mr-14">
          <div
            className="flex overflow-x-auto hide-scroll-bar  py-6  gap-5 w-"
            ref={sliderRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {placeImages.map((place, i) => (
              <Card key={i} className=" shadow-lg group">
                <div
                  key={i}
                  className="slider-card shadow-lg group group-hover:animate-pulse"
                >
                  <CardContent className="relative p-0">
                    <img
                      src="https://source.unsplash.com/random/250x250"
                      // src={place.image}
                      className="rounded-md !max-w-[1000px]"
                    />
                    <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4"></div>
                  </CardContent>
                </div>
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

          i
        ) => (
          <div className="grid grid-cols-2 md:grid md:grid-cols-3 md:ml-20   lg:gap-5 md:gap-5 m-5 lg:ml-40 lg:mr-14       md:grid md:grid-cols-3  md:gap-5">
            <div className="col-span-1 lg:col-span-2 md:col-span-2 lg:pl-10 lg:pr-10 ">
              <GoogleMap
                options={mapOptions}
                zoom={14}
                center={{
                  lat: place.location.coordinates[0],
                  lng: place.location.coordinates[1],
                }}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                onLoad={() => console.log("Map Component Loaded...")}
              >
                <MarkerF
                  position={{
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1],
                  }}
                  onClick={() => {
                    const lat = place.location.coordinates[0]
                    const lng = place.location.coordinates[1]
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
                      "_blank"
                    )
                  }}
                  //
                />
                <MarkerF
                  position={{
                    lat: place.location.coordinates[0] - 0.0001, // Adjust the latitude slightly
                    lng: place.location.coordinates[1] - 0.0001, // Adjust the longitude slightly
                  }}
                  onClick={() => {
                    const lat = place.location.coordinates[0]
                    const lng = place.location.coordinates[1]
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
                      "_blank"
                    )
                  }}
                  //
                  icon={{
                    url: place.category.image || place.subCategory.name, // Use the API image if available, otherwise use a default marker image
                    scaledSize: new google.maps.Size(20, 20), // Set the size of the image
                    anchor: new google.maps.Point(7, 38), // Adjust the anchor point to move the marker upward
                  }}
                  // label={place.subCategory.name}
                />
              </GoogleMap>{" "}
            </div>
            <div className="col-span-1 lg:col-span-1 md:col-span-1  ml-5 p-2">
              <button
                className="flex gap-2 bg-primary hover:bg-green-600 text-white font-bold py-2 px-2 rounded"
                onClick={() => {
                  const lat = place.location.coordinates[0]
                  const lng = place.location.coordinates[1]
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
                    "_blank"
                  )
                }}
              >
                <LocateFixed className="h-4 w-4 sm:h-6 sm:w-6 lg:h-6 lg:w-6 lg:mt-1 text-white mt-2" />
                <span className="mr-3  text-white  sm:text-sm text-lg lg:text-base ">
                  Direction{" "}
                </span>
              </button>
              <div className="flex mt-3 ">
                <Button>
                  <a
                    href={`tel:${place.phoneNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Phone className="h-7 w-7 dark:text-white" />
                  </a>
                </Button>
                <p className=" text-sm sm:text-sm lg:text-base ml-2 pt-2">
                  {place.phoneNumber}
                </p>
              </div>
              <div className="flex mt-3 ">
                <Button>
                  <a
                    href={`https://t.me/${place.telegram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Send className="h-7 w-7 dark:text-white" />
                  </a>{" "}
                </Button>
                <p className="  text-sm sm:text-sm lg:text-base ml-2 pt-2">
                  {place.telegram}
                </p>
              </div>
            </div>
          </div>
        )
      )}

      <div className="mx-auto flex w-11/12 flex-col gap-6 ">
        <h2 className="justify-end text-lg text-center font-bold ">
          Description
        </h2>
        {place.map(
          (
            place,

            i
          ) => (
            <p className="lg:ml-32 lg:mr-14">{place.description}</p>
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
        <p className="lg:ml-28 lg:mr-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
          soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
          nobis soluta, eum consequatur dolor quidem dolore itaque illum
          possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi.
          Laborum necessitatibus nobis soluta, eum consequatur dolor quidem
          dolore itaque illum possimus quisquam iure.
        </p>
        <p className="lg:ml-28 mb-8 lg:mr-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
          soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
          nobis soluta, eum consequatur dolor quidem dolore itaque illum
          possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A illum soluta optio repellendus ullam aliquam nisi.
          Laborum necessitatibus nobis soluta, eum consequatur dolor quidem
          dolore itaque illum possimus quisquam iure.
        </p>
      </div>

      <section className="bg-gray-100 dark:bg-inherit lg:mr-16 lg:ml-40 ">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {Ads.map(
            (
              place: {
                [x: string]: any
                image: string | undefined
                name: any
                _id: any

                description: any
              },
              i: Key | null | undefined
            ) => (
              <Card key={i} className="shadow-lg group ">
                <CardContent className="relative p-0 ">
                  <img
                    // src={place.image}
                    src="https://source.unsplash.com/random/250x250"
                    className="rounded-md !max-w-[500px]"
                    alt={place.title}
                  />
                  <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4 bg-black bg-opacity-20">
                    <h3 className="w-full text-xl font-semibold border border-gray-500 p-1 ">
                      {place.title}
                    </h3>
                    <p className="border-b border-b-gray-700 p-1">
                      {place.description.length > 50
                        ? place.description.slice(0, 50) + "..."
                        : place.description}
                    </p>
                  </div>
                  <Badge className="absolute px-4 text-lg top-3 left-5 dark:text-white">
                    Ad
                  </Badge>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  )
}

export default page
