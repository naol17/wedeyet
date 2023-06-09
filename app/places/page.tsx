type PlaceImage = {
  image: string
}

const placeImages: PlaceImage[] = [
  {
    image: "https://unsplash.com/photos/zUNs99PGDg0",
  },
  {
    image: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    image: "https://unsplash.com/photos/zUNs99PGDg0",
  },
  {
    image: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    image: "https://unsplash.com/photos/zUNs99PGDg0",
  },
  {
    image: "https://unsplash.com/photos/6VhPY27jdps",
  },
]

const Places = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h1 className="text-5xl mt-2">Shope Name</h1>

      {/* place image slider  */}
      <section className="bg-gray-100">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {placeImages.map((place, i) => (
            <Card key={i} className="shadow-lg group">
              <Link href="/" className="group-hover:animate-zoomin">
                <CardContent className="relative p-0">
                  <img
                    src={place.image}
                    className="rounded-md !max-w-[500px]"
                    alt={place.name}
                  />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Places
