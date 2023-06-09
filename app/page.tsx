import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
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
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

type Category = {
  name: string
  icon: LucideIcon
}

type NearbyPlace = {
  name: string
  description: string
  image: string
}

const categories: Category[] = [
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

const nearbyPlaces: NearbyPlace[] = [
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
  return (
    <>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex gap-10 pb-2 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
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

        <div className="grid h-[450px] grid-cols-4 gap-5">
          <div className="col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.236161626544!2d38.74860638768315!3d9.058379475241788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f350fce1a09%3A0x9b9773a5bb80aa81!2sSheger%20Park!5e0!3m2!1sen!2set!4v1686264906490!5m2!1sen!2set"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <ScrollArea className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto max-h-fit">
            {nearbyPlaces.map((place, i) => (
              <Card key={i} className="relative mb-4 bg-white shadow">
                <Link href="/">
                  <CardContent className="flex items-center gap-4 p-0">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-36 rounded-l-md"
                    />
                    <div className="">
                      <p className="text-lg font-semibold">{place.name}</p>
                      <p className="text-sm text-gray-500">
                        {place.description}
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
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
            quidem dolore itaque illum possimus quisquam iure.
          </p>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {nearbyPlaces.map((place, i) => (
            <Card key={i} className="shadow-md group">
              <Link href="/" className="group-hover:animate-pulse">
                <CardContent className="relative p-0">
                  <img
                    src={place.image}
                    className="rounded-md !max-w-[500px]"
                    alt={place.name}
                  />
                  <div className="absolute flex flex-col gap-2 text-white bottom-5 left-4">
                    <h3 className="w-full text-2xl font-semibold ">
                      {place.name}
                    </h3>
                    <p>
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
          ))}
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
    </>
  )
}
