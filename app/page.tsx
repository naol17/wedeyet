/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

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
import { useRouter } from "next/navigation"
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
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import MapAutoComplete from "@/components/mapAutoComplete"

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
  const [users, setUsers] = useState<any[]>([])
  const [places, setPlaces] = useState<any[]>([])

  const fetchData = () => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YTFiMTU3ODUyODRlYmEwNjYyOTY5IiwiZW1haWwiOiJudW5hQGdtYWlsLmNvbSIsImlhdCI6MTY5MDI1MTA2MSwiZXhwIjoxNjkwMzM3NDYxfQ.HLru9oSZiYr1BCs8gpbtrK1U8UzunW24sCkRX6igHzc",
    }
    axios
      .get("https://wedeyet.herokuapp.com/api/place/all", { headers })
      .then((response) => {
        setUsers(response.data)
        setPlaces(response.data.Places)
      })
      .catch((error) => alert("Please Check That You are Connected to Network"))
  }

  useEffect(() => {
    fetchData()
  }, [])

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
    return <h1 className="align-middle text-lg justify-center">Loading...</h1>
  }

  // map search autoCom
  const router = useRouter()

  return (
    <>
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
            <GoogleMap
              options={mapOptions}
              zoom={14}
              center={mapCenter}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              onLoad={() => console.log("Map Component Loaded...")}
            >
              {places.map((place: any, i: any) => (
                <MarkerF
                  position={{
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1],
                  }}
                  label={place.subCategory.name}
                />
              ))}
              <MapAutoComplete />
            </GoogleMap>
          </div>
          <ScrollArea className="flex h-[300px] max-h-fit gap-4 overflow-y-auto overflow-x-hidden sm:flex-row md:col-span-2 md:h-full md:p-2 lg:col-span-1 lg:h-full lg:flex-col lg:p-3">
            {places.map(
              (
                place: {
                  name: any
                  description: any
                  _id: any
                },
                i: Key | null | undefined
              ) => (
                <Card key={i} className="relative mb-4 bg-white shadow-lg">
                  <Link href={`/pages?id=${place._id}`}>
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
          {places.map(
            (
              place: {
                image: string | undefined
                name: any
                _id: any

                description: any
              },
              i: Key | null | undefined
            ) => (
              <Card key={i} className="shadow-lg group ">
                <Link href={`/pages?id=${place._id}`}>
                  <CardContent className="relative p-0 ">
                    <img
                      // src={place.image}
                      src="https://source.unsplash.com/random/300x300"
                      className="rounded-md !max-w-[500px]"
                      alt={place.name}
                    />
                    <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4">
                      <h3 className="w-full text-xl font-semibold border border-gray-500 p-1 ">
                        {place.name}
                      </h3>
                      <p className="border-b border-b-gray-700 p-1">
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
          {places.map((place: any, i: any) => (
            <Card className="max-w-sm shadow-lg mb-32">
              <Link href={`/pages?id=${place._id}`}>
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
                        illum possimus quisquam iure gftr hhsgeep hhsgeep
                        hhsgeep.
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
                      alert("buttoncicked ")
                    }}
                  >
                    Go
                    <ChevronRight />
                  </button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
