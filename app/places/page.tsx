const Places = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h1 className="text-5xl mt-2">Shope Name</h1>

      {/* place image slider  */}
      <section className="bg-gray-100">
        <div className="container flex gap-6 py-6 overflow-x-auto overflow-y-hidden hide-scroll-bar max-w-max">
          {nearbyPlaces.map((place, i) => (
            <Card key={i} className="shadow-lg group">
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
    </div>
  )
}

export default Places
