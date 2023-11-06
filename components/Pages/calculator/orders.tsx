"use client"
import Image from "next/image"
import { X } from "lucide-react"
import { Fragment } from "react"
import { formatter } from "@/lib/utils"
import Heading from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import useCalculator from "@/store/calculatorStore"
import { Separator } from "@/components/ui/separator"

const Orders: React.FC = () => {
  const { products, removeProduct } = useCalculator()

  return (
    <>
      <Heading title="Order" />

      {products.length > 0 ? (
        <div className="flex flex-col gap-4 my-8">
          <Separator />
          {products.map((product) => (
            <Fragment key={product.id}>
              <div key={product.id} className="grid grid-cols-7 max-sm:grid-cols-4 gap-4 w-full">
                <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
                  <Image
                    src={product.images[0].url}
                    fill
                    alt={product.name}
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="aspect-square rounded-lg object-cover select-none"
                  />
                </div>
                <h4 className="col-span-3 text-lg font-semibold max-md:text-base max-sm:text-sm flex items-center">{product.name}</h4>
                <p className="col-span-2 flex items-center">{formatter("usd").format(parseFloat(product.price))}</p>

                <div className="flex items-center justify-end">
                  <Button size="icon" variant="destructive" onClick={() => removeProduct(product.id)}>
                    <X className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                  </Button>
                </div>
              </div>
              <Separator />
            </Fragment>
          ))}
        </div>
      ) : (
        <p className="py-4 text-md text-muted-foreground">No orders yet</p>
      )}
    </>
  )
}

export default Orders
