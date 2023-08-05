import React, { useState } from "react"
import { useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

interface MapAutoCompleteProps {
  onAddressSelect?: (address: string, lat: number, lng: number) => void
}
// export default function MapAutoComplete() {
export default function MapAutoComplete({
  onAddressSelect,
}: MapAutoCompleteProps) {
  const [lat, setLat] = useState(9.0567)
  const [lng, setLng] = useState(38.739)
  const [selectedPlace, setSelectedPlace] = useState("")

  const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string, lat: number, lng: number) => void
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        componentRestrictions: { country: "ET" }, // Restrict to Ethiopia
        location: new google.maps.LatLng(8.9806, 38.7578), // Coordinates for Addis Ababa
        radius: 50000,
      },
      debounce: 300,
      cache: 86400,
    })

    const renderSuggestions = () => {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
          description,
        } = suggestion

        return (
          <li
            key={place_id}
            onClick={() => {
              setValue(description, false)
              clearSuggestions()
              if (onAddressSelect) {
                getGeocode({ address: description }).then((results) => {
                  const { lat, lng } = getLatLng(results[0])
                  onAddressSelect(description, lat, lng)
                  setSelectedPlace(description)
                  setLat(lat)
                  setLng(lng)
                  setSelectedPlace("")
                })
              }
            }}
            className="bg-white p-4 border hover:bg-slate-300"
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        )
      })
    }

    return (
      <form>
        <label className="mt-10 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="flex flex-col">
          <div className="relative pt-10 pr-12 pl-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="absolute  w-4 h-4 text-gray-500 dark:text-gray-400 ml-12 mt-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={selectedPlace || value}
              disabled={!ready}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Hotels, Shops..."
              required
            />
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
          </div>
        </div>{" "}
        <button
          className="mb-[18.5rem] lg:mb-[19rem] md:mb-[19rem] pt-[-20rem] mr-12 p-2 text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => renderSuggestions()}
        >
          Search
        </button>
      </form>
    )
  }

  return (
    <>
      <PlacesAutocomplete
        onAddressSelect={(address, lat, lng) => {
          setSelectedPlace(address)
          setLat(lat)
          setLng(lng)
          if (onAddressSelect) {
            onAddressSelect(address, lat, lng)
          }
        }}
      />
      {lat && lng && (
        <div>
          <p>Selected Place: {selectedPlace}</p>
          <p>Latitude: {lat}</p>
          <p>Longitude: {lng}</p>

          {/* Render your map component here using lat and lng */}
        </div>
      )}
    </>
  )
}
