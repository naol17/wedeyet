import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, LocateFixed, Phone, Send, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

type PlaceImage = {
  image: string
  name: string
  description: string
}

const placeImages: PlaceImage[] = [
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

const Places = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-full h-full">
        <h1 className="text-5xl mt-2">Shope Name</h1>

        {/* place image slider  */}
      </div>
      <section className="bg-gray-100 mt-5">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {placeImages.map((place, i) => (
            <Card key={i} className="shadow-lg group">
              <Link href="/" className="group-hover:animate-pulse">
                <CardContent className="relative p-0">
                  <img
                    src={place.image}
                    className="rounded-md !max-w-[500px]"
                  />
                  <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4"></div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
      {/*  */}
      <div className="container space-y-5 py-8 lg:space-y-16 sm:space-y-5 sm:grid-cols-1">
        <div className="grid grid-cols-2 ml-6 sm:ml-[-20px] ">
          <div>
            <div className="grid grid-cols-2">
              <div className="py-10 lg:space-y-10">
                <div className="lg:px-25 md:px-10">
                  <Button>
                    <LocateFixed className="h-6 w-6" />
                    <span className="mr-2"></span> Direction
                  </Button>
                </div>
              </div>
              <div className=" mr-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.236161626544!2d38.74860638768315!3d9.058379475241788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f350fce1a09%3A0x9b9773a5bb80aa81!2sSheger%20Park!5e0!3m2!1sen!2set!4v1686264906490!5m2!1sen!2set"
                  width="100%"
                  height="70%"
                ></iframe>
              </div>
              <p className="mt-0 ">placename</p>
            </div>
          </div>

          <div className=" ml-16">
            <div className="grid grid-cols-2">
              <div>
                <Button>
                  <Phone className="h-7 w-7" />
                </Button>
              </div>
              <div className="align-start justify-start">+251 91784 6893</div>
            </div>
            <div className="mt-4 grid grid-cols-2">
              <div>
                <Button>
                  <Send className="h-7 w-7" />
                </Button>
              </div>
              <div>
                {/* <p className="align-center justify-start">Somebody@Telegram</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-11/12 flex-col gap-6">
        <h2 className="justify-end text-lg text-center font-bold">
          Description
        </h2>
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
        <div className="mt-4">
          {" "}
          <h2 className="justify-end text-lg text-center font-bold">
            Similar Place
          </h2>
        </div>
        <div className="container flex gap-10 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {placeImages.map((place, i) => (
            <Card className="max-w-sm shadow-lg">
              <CardContent className="flex flex-col justify-center p-0">
                <img
                  src="https://source.unsplash.com/random/300x300"
                  className="max-w-sm rounded-md rounded-b-none"
                  alt="placeholder"
                />
                <div className="flex flex-col gap-2 p-4">
                  <h2 className="text-xl font-semibold">{place.name}</h2>
                </div>
                <Button className="w-full text-lg rounded-t-none">
                  Go <ChevronRight />
                </Button>
              </CardContent>
            </Card>
          ))}
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
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {placeImages.map((place, i) => (
            <Card key={i} className="shadow-lg group bg-gray-100 ">
              <Link href="/" className="group-hover:animate-pulse">
                <CardContent className="relative p-0">
                  <img
                    src={place.image}
                    className="rounded-md lg:!max-w-[700px] md:!max-w-[500px] sm:!max-w-[500px]"
                    alt={place.name}
                  />
                  <Badge className="absolute left-5 top-3 px-4 text-lg md:top-3 md:left-3 md:text-sm sm:text-xs xsm:left-2 sm:top-1">
                    Add
                  </Badge>
                </CardContent>
              </Link>
              <div className="">
                <h2 className="ml-5 mb-5 mt-5">Description</h2>
                <p className="ml-5 mb-4">{place.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <div className="container flex gap-5 py-5 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {placeImages.map((place, i) => (
            <Card key={i} className="shadow-lg group bg-gray-100 ">
              <Link href="/" className="group-hover:animate-pulse">
                <CardContent className="relative p-0">
                  <img
                    src={place.image}
                    className="rounded-md lg:!max-w-[300px] md:!max-w-[250px] sm:!max-w-[200px]"
                    alt={place.name}
                  />
                  <Badge className="absolute left-5 top-3 px-4 text-lg md:top-3 md:left-3 md:text-sm sm:text-xs sm:left-2 sm:top-1">
                    Add
                  </Badge>
                </CardContent>
              </Link>
              <div className="">
                <h2 className="ml-5 mb-5 mt-5">Description</h2>
                <p className="ml-5 mb-4">{place.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

export default Places
