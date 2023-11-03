"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Calculator } from "lucide-react"
import { usePathname } from "next/navigation"

const CalculatorIcon = () => {
  const pathname = usePathname()

  return (
    <Link href="/calculator" className={cn("fixed bottom-5 max-2xl:right-5 ", pathname === "/calculator" && "hidden")}>
      <Button role="link" variant="default" size="icon" className="rounded-[50%] w-16 h-16 shadow-xl border-slate-400 relative">
        <Calculator className="w-7 h-7" />
      </Button>
    </Link>
  )
}

export default CalculatorIcon
