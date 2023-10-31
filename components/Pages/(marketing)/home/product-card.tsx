import Image from "next/image"
import { ProductModel } from "@/types/ProductModel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  data: ProductModel
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
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
      <CardFooter className="flex-col items-start gap-2">
        <div>
          <p className="text-semibold text-lg">{data?.name}</p>
          <p className="text-sm text-primary/80">{data?.category.name}</p>
        </div>
        <div className="flex items-center justify-between">${data?.price}</div>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
