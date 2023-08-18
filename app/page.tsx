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
  BookOpen,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import FAQSection from "@/components/faqsection"
import MapAutoComplete from "@/components/mapAutoComplete"

const categories = [
  {
    name: "Universities",
    icon: BookOpen,
  },
  {
    name: "Shops",
    icon: ShoppingBag,
  },
  {
    name: "Hotels",
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
  const [selectedPlace, setSelectedPlace] = useState("")
  const [selectedCoordinates, setSelectedCoordinates] = useState<null | {
    lat: number
    lng: number
  }>(null)

  // const [selectedCoordinates, setSelectedCoordinates] = useState({
  //   lat: null,
  //   lng: null,
  // })
  // Fetch api
  const [places, setPlaces] = useState<any[]>([])
  const [caplaces, setCaPlaces] = useState<any[]>([])

  const fetchData = () => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRkNmFhZmZiODkwMDE2YjRiZmQzOTY2IiwiZW1haWwiOiJyZWRAZ21haWwuY29tIiwiaWF0IjoxNjkyMzY0NjA3LCJleHAiOjE2OTI3OTY2MDd9.kchKk9hLCF2JiRdmLNFlMTu3-ftbGtNS8T69ypsP3oA ",
    }
    axios
      .get("https://wedeyet.herokuapp.com/api/place/all", { headers })
      .then((response) => {
        setPlaces(response.data.Places)
      })
      .catch((error) => alert("Please Check That You are Connected to Network"))
  }

  const handleCategoryClick = (categoryName: any) => {
    const headers: any = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRkNmFhZmZiODkwMDE2YjRiZmQzOTY2IiwiZW1haWwiOiJyZWRAZ21haWwuY29tIiwiaWF0IjoxNjkyMzY0NjA3LCJleHAiOjE2OTI3OTY2MDd9.kchKk9hLCF2JiRdmLNFlMTu3-ftbGtNS8T69ypsP3oA ",
    }
    axios
      .get(
        `https://wedeyet.herokuapp.com/api/place/search?subCategory=${categoryName}`,
        {
          headers,
        }
      )
      .then((response) => {
        setPlaces(response.data.Place)
        console.log("caplace", response.data)
      })
      .catch((error) => alert("Sorry! Can't find place for that Category"))
    console.log("inside handler ", places)
    console.log("heaf", categoryName)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(places)
  }, [places])
  console.log("fuck", places)
  console.log("shabsteferkoale", places)
  // google map
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
      <div className="flex justify-center items-center mt-20 ">
        <LoadingSpinner />
      </div>
    )
  }
  const handleAddressSelect = (address: string, lat: number, lng: number) => {
    setSelectedPlace(address)
    setSelectedCoordinates({ lat, lng })
    setSelectedPlace("")
  }

  const handleMarker = () => {
    if (selectedCoordinates) {
      const { lat, lng } = selectedCoordinates
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
        "_blank"
      )
    }
  }

  // search

  return (
    <>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex gap-10 pb-2 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max mt-3 lg:ml-24 lg:mr-10">
          {categories.map((category, i) => (
            <Card key={i} className="shadow-md">
              <CardContent
                className="flex items-center justify-center gap-4 px-4 py-2 rounded group-hover:bg-primary group-hover:bg-opacity-40 "
                onClick={() => handleCategoryClick(category.name)}
              >
                <category.icon className="w-6 h-6 text-primary" />
                <p className="font-semibold ">{category.name}</p>
              </CardContent>
            </Card>
          ))}
          {categories.map((category, i) => (
            <Card key={i}>
              <CardContent
                className="flex items-center justify-center gap-4 px-4 py-2 rounded group-hover:bg-primary group-hover:bg-opacity-40"
                onClick={() => handleCategoryClick(category.name)}
              >
                <category.icon className="w-6 h-6 text-primary" />
                <p className="font-semibold ">{category.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="grid h-[450px] grid-cols-4 gap-5 md:bg-red-600 sm:bg-green-500 sm:grid-cols-1 lg:bg-yellow-400 "> */}
        <div className="h-[700px]  md:grid md:grid-cols-4 md:gap-2 md:h-[450px] lg:grid-cols-4 lg:ml-24 lg:mr-10">
          <div className="md:col-span-2 pb-2 h-[430px] md:pb-0 lg:col-span-3 lg:pb-0  ">
            <GoogleMap
              options={mapOptions}
              zoom={14}
              // center={mapCenter}
              center={selectedCoordinates || mapCenter}
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
                />
              ))}
              {selectedCoordinates && (
                <Marker
                  position={selectedCoordinates}
                  label={selectedPlace}
                  onClick={handleMarker}
                />
              )}
              {places.map((place: any, i: any) => (
                <MarkerF
                  position={{
                    lat: place.location.coordinates[0] - 0.0001, // Adjust the latitude slightly
                    lng: place.location.coordinates[1] - 0.0001, // Adjust the longitude slightly
                  }}
                  onClick={handleMarker}
                  //
                  icon={{
                    url: place.category.image || place.subCategory.name, // Use the API image if available, otherwise use a default marker image
                    scaledSize: new google.maps.Size(20, 20), // Set the size of the image
                    anchor: new google.maps.Point(7, 38), // Adjust the anchor point to move the marker upward
                  }}
                  // label={place.subCategory.name}
                />
              ))}

              <MapAutoComplete onAddressSelect={handleAddressSelect} />
            </GoogleMap>
          </div>
          <ScrollArea className="flex h-[300px] max-h-fit md:pt-0 gap-4 overflow-y-auto overflow-x-hidden sm:flex-row md:col-span-2 md:h-full md:p-2 lg:col-span-1 lg:h-full lg:flex-col lg:p-3  lg:pt-0">
            {places.map(
              (
                place: {
                  [x: string]: any
                  name: any
                  description: any
                  _id: any
                },
                i: Key | null | undefined
              ) => (
                <Card key={i} className="relative mb-4 bg-white shadow-lg">
                  <Link
                    href={`/pages?id=${place._id}&subCategory=${place.subCategory.name}`}
                  >
                    <CardContent className="flex items-center gap-4 p-0 dark:bg-slate-950 dark:border-white">
                      <img
                        // src={place.image}
                        src="https://source.unsplash.com/random/250x250"
                        alt={place.name}
                        className="h-full w-36 rounded-l-md"
                      />
                      <div className="">
                        <p className="text-lg font-semibold dark:text-white">
                          {place.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-white">
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

        <div className="gap-10 mt-4">
          <p className="mb-6 lg:ml-24 lg:mr-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possimus quisquam iure.
          </p>
          <p className="lg:ml-24 lg:mr-14">
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
      <section className="bg-gray-100 dark:bg-slate-900">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {places.map(
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
                <Link
                  href={`/pages?id=${place._id}&subCategory=${place.subCategory.name}`}
                >
                  <CardContent className="relative p-0 ">
                    <img
                      // src={place.image}
                      src="https://source.unsplash.com/random/250x250"
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
                    <Badge className="absolute px-4 text-lg top-3 left-5 dark:text-white">
                      Ad
                    </Badge>
                  </CardContent>
                </Link>
              </Card>
            )
          )}
        </div>
      </section>
      <section className="container grid  gap-6 pt-6 pb-8 md:py-10">
        <div className=" gap-6 mx-auto">
          <p className="mb-6 lg:ml-24 lg:mr-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum
            soluta optio repellendus ullam aliquam nisi. Laborum necessitatibus
            nobis soluta, eum consequatur dolor quidem dolore itaque illum
            possimus quisquam iure. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A illum soluta optio repellendus ullam aliquam
            nisi. Laborum necessitatibus nobis soluta, eum consequatur dolor
            quidem dolore itaque illum possimus quisquam iure.
          </p>
          <p className="lg:ml-24 lg:mr-14">
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
            <Card className="max-w-sm shadow-lg mb-5 lg:max-w-sm">
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
                    <h3 className="text-xl font-semibold ">{place.name} </h3>
                    <div className="text-base mt-10">
                      {" "}
                      <p className="text-sm mt-[-38px]">
                        {place.description.length > 35
                          ? place.description.slice(0, 35) + "..."
                          : place.description}
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex w-full flex-row rounded-t-none rounded-b-md  bg-primary text-lg text-white align-center pl-24 p-3  text-bold "
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
        <FAQSection />
      </section>
    </>
  )
}
