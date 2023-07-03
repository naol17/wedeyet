"use client"

// import { error } from "console"
import { error, trace } from "console"
import {
  JSX,
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useMemo,
  useState,
} from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api"
import axios from "axios"
import {
  Car,
  ChevronLeft,
  ChevronRight,
  Coffee,
  LucideIcon,
  MoreHorizontal,
  MoreVertical,
  ShoppingBag,
  TreePine,
  Utensils,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// type Category = {
//   name: string
//   icon: LucideIcon
// }

// type NearbyPlace = {
//   name: string
//   description: string
//   image: string
// }

const categories = [
  {
    name: "Transport",
    icon: Car,
  },
  {
    name: "Shops",
    icon: ShoppingBag,
  },
  {
    name: "Restaurants",
    icon: Utensils,
  },
  {
    name: "Cafes",
    icon: Coffee,
  },
  {
    name: "Parks",
    icon: TreePine,
  },
]

const nearbyPlaces = [
  {
    name: "Birr",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Abyssinia",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Birr",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Abyssinia",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Birr",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Abyssinia",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Birr",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    name: "Abyssinia",
    description: "Ethiopian Restaurant",
    image: "https://source.unsplash.com/random/300x300",
  },
]

export default function IndexPage() {
  // Fetch api
  const [users, setUsers] = useState([])
  const [location, setLocation] = useState([])
  const [lat, setLat] = useState([])
  const [lng, setLng] = useState([])
  const fetchData = () => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YTFiMTU3ODUyODRlYmEwNjYyOTY5IiwiZW1haWwiOiJudW5hQGdtYWlsLmNvbSIsImlhdCI6MTY4ODM0MDA3NCwiZXhwIjoxNjg4NDI2NDc0fQ.h3CjPlAHMA38vH_5Un_xnq1UZ9hPQKygsylDSH1k-1g",
    }
    fetch(" https://wedeyet.herokuapp.com/api/place/all ", { headers })
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        setUsers(data)
      })
      .catch((error) => console.log("Error", error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("the data", users)
  const placeResponce = Object.values(users)
  console.log("placeResponse", placeResponce)
  const nearbyPlaces = placeResponce[1]
  console.log("inner array", nearbyPlaces)

  // Map rendering

  const libraries = useMemo(() => ["places"], [])
  const mapCenter = useMemo(() => ({ lat: 9.0567, lng: 38.739 }), [])

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

  if (!isLoaded) {
    return <h1 className="align-middle justify-center text-lg">Loading...</h1>
  }
  return (
    <>
      {/* <div>
        {nearbyPlace.map((place: any, i: any) => (
          <li>
            {place.location.coordinates[0]}lang{place.location.coordinates[1]}
          </li>
        ))}
      </div>
      <div></div> */}

      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex gap-10 pb-2 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max mt-3">
          {categories.map((category, i) => (
            <Card key={i} className="shadow-md">
              <Link href="/" className="group ">
                <CardContent className="flex items-center justify-center gap-4 px-4 py-2 rounded group-hover:bg-primary group-hover:bg-opacity-40">
                  <category.icon className="w-6 h-6 text-primary" />
                  <p className="font-semibold ">{category.name}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
          {categories.map((category, i) => (
            <Card key={i}>
              <Link href="/" className="group ">
                <CardContent className="flex items-center justify-center gap-4 px-4 py-2 rounded group-hover:bg-primary group-hover:bg-opacity-40">
                  <category.icon className="w-6 h-6 text-primary" />
                  <p className="font-semibold ">{category.name}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* <div className="grid h-[450px] grid-cols-4 gap-5 md:bg-red-600 sm:bg-green-500 sm:grid-cols-1 lg:bg-yellow-400 "> */}
        <div className="h-[700px]  md:grid md:grid-cols-4 md:gap-2 md:h-[450px] lg:grid-cols-4">
          <div className="md:col-span-2 pb-2 h-[400px] md:pb-0 lg:col-span-3  ">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.236161626544!2d38.74860638768315!3d9.058379475241788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f350fce1a09%3A0x9b9773a5bb80aa81!2sSheger%20Park!5e0!3m2!1sen!2set!4v1686264906490!5m2!1sen!2set"
              width="100%"
              height="100%"
            ></iframe> */}
            {nearbyPlaces.map((place: any, i: any) => (
              <GoogleMap
                options={mapOptions}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                onLoad={() => console.log("Map Component Loaded...")}
              >
                <MarkerF
                  position={{
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1],
                    // mapCenter
                  }}
                  // icon={Car}
                />
              </GoogleMap>
            ))}
          </div>
          <ScrollArea className="h-[300px] md:h-full lg:h-full md:col-span-2 md:p-2 lg:col-span-1 lg:p-3 flex lg:flex-col sm:flex-row gap-4 overflow-x-hidden overflow-y-auto max-h-fit">
            {nearbyPlaces.map(
              (
                place: {
                  name: any
                  description: any
                },
                i: Key | null | undefined
              ) => (
                <Card key={i} className="relative mb-4 bg-white shadow-lg">
                  <Link href="/">
                    <CardContent className="flex items-center gap-4 p-0">
                      <img
                        // src={place.image}
                        src="https://source.unsplash.com/random/300x300"
                        alt={place.name}
                        className="h-full w-36 rounded-l-md"
                      />
                      <div className="">
                        <p className="text-lg font-semibold">{place.name}</p>
                        <p className="text-sm text-gray-500">
                          {place.description.length > 25
                            ? place.description.slice(0, 25) + "..."
                            : place.description}
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            )}
          </ScrollArea>
        </div>

        <div className="flex flex-col w-11/12 gap-6 mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possimus quisquam iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possums quisquam iure.
          </p>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {nearbyPlaces.map(
            (
              place: {
                image: string | undefined
                name: any

                description: any
              },
              i: Key | null | undefined
            ) => (
              <Card key={i} className="shadow-lg group ">
                <Link href="/" className="group-hover:animate-pulse">
                  <CardContent className="relative p-0 ">
                    <img
                      // src={place.image}
                      src="https://source.unsplash.com/random/300x300"
                      className="rounded-md !max-w-[500px]"
                      alt={place.name}
                    />
                    <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4">
                      <h3 className="w-full text-xl font-semibold bg-primary p-1 ">
                        {place.name}
                      </h3>
                      <p className="bg-green-500">
                        {place.description.length > 50
                          ? place.description.slice(0, 50) + "..."
                          : place.description}
                      </p>
                    </div>
                    <Badge className="absolute px-4 text-lg top-3 left-5">
                      Add
                    </Badge>
                  </CardContent>
                </Link>
              </Card>
            )
          )}
        </div>
      </section>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col w-11/12 gap-6 mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possimus quisquam iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possimus quisquam iure.
          </p>
        </div>
      </section>
      <section>
        <div className="container flex gap-10 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {nearbyPlaces.map((place: any, i: any) => (
            <Card className="max-w-sm shadow-lg mb-32">
              <CardContent className="flex flex-col justify-center p-0">
                <img
                  src="https://source.unsplash.com/random/300x300"
                  className="max-w-sm rounded-md rounded-b-none"
                  alt="placeholder"
                />
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-xl font-semibold ">
                    {place.name}{" "}
                    <span className="text-white invisible">
                      illum possimus quisquam iure gftr hhsgeep.
                    </span>
                  </h3>
                  <p className="text-sm mt-[-38px]">
                    {place.description.length > 35
                      ? place.description.slice(0, 35) + "..."
                      : place.description}
                  </p>
                </div>
                <button
                  className="flex w-full flex-row rounded-t-none rounded-b-md  bg-primary text-lg text-white align-center pl-32 p-3  text-bold "
                  onClick={() => {
                    alert("ghjk")
                  }}
                >
                  Go
                  <ChevronRight />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
