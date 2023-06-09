import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { LocateFixed, Phone, Send, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

type PlaceImage = {
  image: string
}

const placeImages: PlaceImage[] = [
  {
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    image: "https://source.unsplash.com/random/300x300",
  },
  {
    image: "https://source.unsplash.com/random/300x300",
  },
  {
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
      <div className="container space-y-5 py-8 lg:space-y-16">
        <div className="grid grid-cols-2 ml-6">
          <div>
            <div className="grid grid-cols-2">
              <div className="py-10 lg:space-y-10">
                <div>
                  <Button>
                    <LocateFixed className="h-6 w-6" />
                    <span className="mr-2"></span> Direction
                  </Button>
                  <p className="space-y-5">placename</p>
                </div>
              </div>
              <div className="mr-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.236161626544!2d38.74860638768315!3d9.058379475241788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f350fce1a09%3A0x9b9773a5bb80aa81!2sSheger%20Park!5e0!3m2!1sen!2set!4v1686264906490!5m2!1sen!2set"
                  width="100%"
                  height="90%"
                ></iframe>
              </div>
            </div>
          </div>

          <div className=" ml-16">
            <div className="grid grid-cols-2">
              <div>
                <Button>
                  <Phone className="h-7 w-7" />
                </Button>
              </div>
              <div>+251 91784 6893</div>
            </div>
            <div className="grid grid-cols-2 mt-4">
              <div>
                <Button>
                  <Send className="h-7 w-7" />
                </Button>
              </div>
              <div>
                <p className="align justify-start">Somebody@Telegram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Places
