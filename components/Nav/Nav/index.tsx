import Cart from '../cart'
import NavMenu from './menu'
import { Menu } from 'lucide-react'
import CompanyLogo from '../company'
import ToggleButton from '../toggle'
import ProfileButton from '../profile'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navigation = () => {
    return (
        <header className="flex h-20 fixed top-0 z-50 w-full bg-background border-b">
            <div className="container flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="h-5 w-5 md:hidden" />
                        </SheetTrigger>
                        <SheetContent side="top" className="w-full">
                            <nav className=""></nav>
                        </SheetContent>
                    </Sheet>
                    <CompanyLogo />

                    <NavMenu />
                </div>

                <div className="flex items-center gap-4">
                    <div className="space-x-1">
                        <ToggleButton />

                        <Cart />
                    </div>

                    <ProfileButton />
                </div>
            </div>
        </header>
    )
}

export default Navigation
