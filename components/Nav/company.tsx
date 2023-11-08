import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Beef } from "lucide-react"

const CompanyLogo = ({ fluid }: { fluid?: boolean }) => {
  return (
    <Link href={"/"} className={cn("relative z-50 flex items-center sm:text-lg font-medium select-none", fluid && "lg:text-white")}>
      <Beef className="h-6 w-6 mr-2" />
      Shop Inc.
    </Link>
  )
}

export default CompanyLogo
