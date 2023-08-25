"use client"

import Link from "next/link"
import { Icons } from "@/components/ui/icons"
import ListItem from "@/components/ui/list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Jumbutron */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.apple className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Markaz Studios</div>
                    <p className="text-sm leading-tight text-muted-foreground">Beautifully designed websites for your comfort.</p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/" title="Products">
                We are a web development company that specializes in building websites for small businesses.
              </ListItem>
              <ListItem href="/" title="Electronics">
                All electronics are made with the highest quality materials and are built to last.
              </ListItem>
              <ListItem href="/" title="Kitchen">
                We have a wide variety of kitchen appliances that will suit your needs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

         <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Jumbutron */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.apple className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Markaz Studios</div>
                    <p className="text-sm leading-tight text-muted-foreground">Beautifully designed websites for your comfort.</p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/" title="Products">
                We are a web development company that specializes in building websites for small businesses.
              </ListItem>
              <ListItem href="/" title="Electronics">
                All electronics are made with the highest quality materials and are built to last.
              </ListItem>
              <ListItem href="/" title="Kitchen">
                We have a wide variety of kitchen appliances that will suit your needs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
