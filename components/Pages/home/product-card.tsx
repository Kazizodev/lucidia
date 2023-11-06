"use client"
import Image from "next/image"
import useRate from "@/store/rateStore"
import { cn, formatter } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import useCalculator from "@/store/calculatorStore"
import { ProductModel } from "@/types/ProductModel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  data: ProductModel
  rate: number
}

const ProductCard: React.FC<ProductCardProps> = ({ data, rate }) => {
  // ? get zustand calculatorStore state
  const { exchange } = useRate()
  const { addproduct, productExists, removeProduct } = useCalculator()

  const handleOrder = () => {
    if (productExists(data)) {
      removeProduct(data.id)
      toast({ title: "❌ Product removed from order", duration: 2000 })
    } else {
      addproduct(data)
      toast({ title: "👍 Product added to order", duration: 2000 })
    }
  }

  return (
    <Card className="rounded-lg border-2 outline-0 focus:ring-2 hover:ring-2 ring-primary transition-all duration-300">
      <CardContent className="pt-4">
        <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
          <Image
            src={data.images[0].url}
            alt={data.name}
            fill
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="aspect-square rounded-lg object-cover select-none transition-all duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-3">
        <div>
          <p className="text-semibold text-lg">{data.name}</p>
          <p className="text-sm text-primary/80">{data.category.name}</p>
        </div>

        <p className={cn("flex items-center w-full", exchange && "justify-end")}>
          {exchange ? formatter("LBP").format(parseFloat(data.price) * rate) : formatter("USD").format(parseFloat(data.price))}
        </p>

        <Button className="w-full " variant={productExists(data) ? "destructive" : "default"} onClick={handleOrder}>
          {productExists(data) ? "Remove" : "Add"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
