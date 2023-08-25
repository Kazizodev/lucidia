import Link from "next/link"

const NavigationBar = () => {
  return (
    <div className="flex h-24 fixed top-0 z-50 w-full">
      <div className="px-4 flex items-center">
        <Link href={"/"} className="relative z-50 flex items-center text-lg font-medium lg:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Shop Inc.
        </Link>
      </div>
    </div>
  )
}

export default NavigationBar
