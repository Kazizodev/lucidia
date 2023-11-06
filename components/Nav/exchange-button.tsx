"use client"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import useRate from "@/store/rateStore"
import { usePathname } from "next/navigation"

const ExchangeButton = () => {
  const pathname = usePathname()
  const { exchange, changeRate } = useRate()

  return (
    <div onClick={changeRate} className={cn("fixed bottom-5 max-2xl:right-5 ", pathname === "/calculator" && "hidden")}>
      <Button role="link" variant="default" className="rounded-[50%] w-16 h-16 shadow-xl text-base font-semibold border-slate-400 relative active:bg-yellow-400">
        {exchange ? "LBP" : "USD"}
      </Button>
    </div>
  )
}

export default ExchangeButton
