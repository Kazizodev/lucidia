"use client"
import { formatter } from "@/lib/utils"
import { Exchange } from "@/types/Exchange"
import Heading from "@/components/ui/heading"
import useCalculator from "@/store/calculatorStore"
import { Separator } from "@/components/ui/separator"

interface SummaryProps {
  exchange: Exchange
}

const Summary: React.FC<SummaryProps> = (props) => {
  const { products } = useCalculator()

  const exchangeRate = parseFloat(props.exchange?.rate)
  const total = products.reduce((acc, curr) => acc + parseFloat(curr.price), 0)
  console.log(total)

  return (
    <section className="md:p-2 flex-1">
      <Heading title="Summary" />

      <div className="my-4 grid gap-3">
        <div className="flex justify-between items-center my-2">
          <h4 className="md:text-lg md:font-medium">Exhange Rate</h4>
          <p className="md:text-lg md:font-medium text-blue-600">{formatter("LBP").format(exchangeRate)}</p>
        </div>

        <Separator />

        <div className="flex justify-between items-center my-2">
          <h4 className="md:text-lg md:font-medium">Total</h4>
          <p className="md:text-lg md:font-medium text-blue-600">{formatter("USD").format(total)}</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <h4 className="md:text-lg md:font-medium" />
          <p className="md:text-lg md:font-medium text-blue-600">{formatter("LBP").format(total * exchangeRate)}</p>
        </div>
      </div>
    </section>
  )
}

export default Summary
