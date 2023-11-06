"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Navigation: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-4">
      <Link href="/" className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", pathname == "/" && "text-primary")}>
        Home
      </Link>
      <Link href="/menu" className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", pathname == "/menu" && "text-primary")}>
        Menu
      </Link>
      <Link href="/calculator" className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", pathname == "/menu" && "text-primary")}>
        Order
      </Link>
    </nav>
  )
}

export default Navigation
