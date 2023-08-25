import React from "react"
import NavMenu from "./menu"
import CompanyLogo from "../company"

const Navigation = () => {
  return (
    <div className="flex h-20 fixed top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center gap-4">
        <CompanyLogo />

        <NavMenu />
      </div>
    </div>
  )
}

export default Navigation
