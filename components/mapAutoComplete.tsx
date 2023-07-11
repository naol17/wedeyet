import React, { useState } from "react"
import { useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

export default function MapAutoComplete() {
  const [lat, setLat] = useState(9.0567)
  const [lng, setLng] = useState(38.739)

  const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string) => void
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      // requestOptions: { componentRestrictions: { country: "Ethiopia" } },
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
              onAddressSelect && onAddressSelect(description)
            }}
            className="bg-white p-4 border"
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
                className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-12 mt-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={value}
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
          type="submit"
          className="mb-[18.5rem] pt-[-20rem] mr-12 p-2 text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
    )
  }

  return (
    <>
      <PlacesAutocomplete
        onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results) => {
            const { lat, lng } = getLatLng(results[0])

            setLat(lat)
            setLng(lng)
          })
        }}
      />
    </>
  )
}
