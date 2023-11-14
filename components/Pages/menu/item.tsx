"use client"
import Image from "next/image"
import { useState } from "react"
import useRate from "@/store/rateStore"
import { cn, formatter } from "@/lib/utils"

type Props = {
  name: string
  description: string
  price: number
  image: string
  rate: number
}

const Item = ({ name, description, price, image, rate }: Props) => {
  const [full, setFull] = useState(false)
  const { exchange } = useRate()

  return (
    <div className="lg:w-[48%] w-full mb-4 transition-all duration-500">
      <div className={cn("flex gap-y-2", full && "flex-col")}>
        <Image
          src={image}
          draggable="false"
          onClick={() => setFull(!full)}
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`mt-[0.30rem] mr-2 rounded-lg transition-all select-none object-cover bg-muted ${full ? "w-full h-[350px]" : "w-[50px] h-[50px]"}`}
          alt={name}
        />
        <div className="flex flex-col w-full">
          <div className="flex align-end">
            <h3 className="font-bold lg:text-2xl md:text-xl text-lg leading-none">{name}</h3>
            <div className="radial-circle flex flex-1 h-[4px] relative bg-repeat-x mx-2 self-center md:self-end" />
            <p className="font-bold lg:text-lg text-base">{exchange ? formatter("LBP").format(price * rate) : formatter("usd").format(price)}</p>
          </div>

          <p className="mt-1 whitespace-pre-line font-[400] text-muted-foreground text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
