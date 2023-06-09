import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <div className="container py-16 space-y-8 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center text-primary">
              <Image src="/logo.png" height={50} width={50} alt="logo" />
            </div>

            <p className="max-w-xs mt-4 text-gray-500">
              Simplifying Addis Ababa&apos;s navigation with ease. Discover,
              explore, and navigate the city hassle-free. Your go-to app for
              finding shops, cafes, hospitals, and more.
            </p>

            <ul className="flex gap-6 mt-8">
              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-6 h-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-6 h-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium ">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <Mail className="w-5 h-5 shrink-0" />

                    <span className="flex-1 text-gray-500">
                      info@wedeyet.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <Phone className="w-5 h-5 shrink-0" />

                    <span className="flex-1 text-gray-500">+251 917846893</span>
                  </Link>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <address className="-mt-0.5 flex-1 not-italic text-gray-500">
                    Addis Ababa, Ethiopia
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2023. Wedeyet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
