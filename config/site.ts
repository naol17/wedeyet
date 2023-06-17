export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Wedeyet",
  description:
    "Wedeyet is an innovative mobile application designed to assist users in navigating Addis Ababa, the capital city of Ethiopia. With a focus on enhancing user experiences, Wedeyet provides valuable information on various establishments such as shops, cafes, hospitals, and more. The app aims to simplify the process of finding and accessing essential services within the city, making it easier for residents and visitors alike to explore and engage with their surroundings.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      className: "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4",
    },
    {
      title: "Places",
      href: "/places",
      className: "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4",
    },
    {
      title: "About",
      href: "/about",
      className: "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4",
    },
    {
      title: "Contact",
      href: "/contact",
      className: "block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4",
    },
  ],
}
