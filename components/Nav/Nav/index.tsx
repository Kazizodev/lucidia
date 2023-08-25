import React from "react"
import CompanyLogo from "../company"

const Navigation = () => {
  return (
    <div className="flex h-24 fixed top-0 z-50 w-full">
      <div className="container flex items-center">
        <CompanyLogo />
      </div>
    </div>
  )
}

export default Navigation
