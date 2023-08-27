import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
    return (
        <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
        </Button>
    )
}

export default Cart
