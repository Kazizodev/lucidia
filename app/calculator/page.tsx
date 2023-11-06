import { fetchData } from "@/lib/fetch"
import { Exchange } from "@/types/Exchange"
import Orders from "@/components/Pages/calculator/orders"
import Summary from "@/components/Pages/calculator/summary"

const getExchangeRate = async () => {
  try {
    const res = await fetchData("/exchange", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}

const CalculatorPage = async () => {
  const exchangeRate = (await getExchangeRate()) as unknown as Exchange

  return (
    <main className="container mx-auto py-10 min-h-[calc(100vh-180px)]">
      <div className="flex max-md:flex-col gap-x-10">
        <section className="flex-[2] pb-7">
          <Orders />
        </section>

        {exchangeRate && <Summary exchange={exchangeRate} />}
      </div>
    </main>
  )
}

export default CalculatorPage
