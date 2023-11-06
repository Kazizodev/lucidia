import { Metadata } from "next"
import { fetchData } from "@/lib/fetch"
import { ProductModel } from "@/types/ProductModel"
import HeroSection from "@/components/Pages/home/hero"
import { BillboardModel } from "@/types/BillboardModel"
import ProductCard from "@/components/Pages/home/product-card"
import { Exchange } from "@/types/Exchange"

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
}

const getBillboards = async () => {
  try {
    const res = await fetchData("/billboards?isActive=true", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}
const getExchangeRate = async () => {
  try {
    const res = await fetchData("/exchange", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}
const getFeaturedDrinks = async () => {
  try {
    const res = await fetchData("/products?isFeatured=true&categoryId=f7a2870e-e968-481d-b2b0-ffe9f8928e2c", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}
const getFeaturedChicken = async () => {
  try {
    const res = await fetchData("/products?isFeatured=true&categoryId=22933449-ecb4-407f-9792-5abd601f78c0", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const exchangeRate = (await getExchangeRate()) as unknown as Exchange
  const billboards = (await getBillboards()) as unknown as BillboardModel[]
  const featuredDrinks = (await getFeaturedDrinks()) as unknown as ProductModel[]
  const featuredChicken = (await getFeaturedChicken()) as unknown as ProductModel[]

  return (
    <main className="container">
      <HeroSection billboards={billboards} />

      <section>
        <h3>Featured Drinks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 sm:py-6 lg:py-8">
          {featuredDrinks.map((product, i) => (
            <ProductCard data={product} rate={parseFloat(exchangeRate.rate)} key={i} />
          ))}
        </div>
        <h3>Featured Chicken</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 sm:py-6 lg:py-8">
          {featuredChicken.map((product, i) => (
            <ProductCard data={product} rate={parseFloat(exchangeRate.rate)} key={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
