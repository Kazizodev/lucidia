import { Metadata } from "next"
import { fetchData } from "@/lib/fetch"
import { Exchange } from "@/types/Exchange"
import { ProductApiModel, ProductModel } from "@/types/ProductModel"
import HeroSection from "@/components/Pages/home/hero"
import { BillboardModel } from "@/types/BillboardModel"
import ProductCard from "@/components/Pages/home/product-card"

export const metadata: Metadata = { title: "Home" }

const getBillboards = async () => {
  try {
    const res = await fetchData("/billboards?isActive=true", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}
const getFeaturedAppetizers = async () => {
  try {
    const res = await fetchData("/products?isFeatured=true&categoryId=89516ce4-dd88-4fac-91d8-890b3e4fe373", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}
const getFeaturedSalad = async () => {
  try {
    const res = await fetchData("/products?isFeatured=true&categoryId=dba4d4a9-c51c-4e13-93da-038f7c51e4ae", { next: { revalidate: 10 } })
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const billboards = (await getBillboards()) as unknown as BillboardModel[]
  const saladData = (await getFeaturedSalad()) as unknown as ProductApiModel
  const appetizersData = (await getFeaturedAppetizers()) as unknown as ProductApiModel

  const exchangeRate = appetizersData?.exchange as Exchange
  const featuredSalad = saladData?.products as ProductModel[]
  const featuredAppetizers = appetizersData?.products as ProductModel[]

  return (
    <main className="container">
      <HeroSection billboards={billboards} />

      <section>
        <h3>Featured Appetizers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 sm:py-6 lg:py-8">
          {featuredAppetizers.map((product, i) => (
            <ProductCard data={product} rate={parseFloat(exchangeRate.rate)} key={i} />
          ))}
        </div>
        <h3>Featured Chicken</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 sm:py-6 lg:py-8">
          {featuredSalad.map((product, i) => (
            <ProductCard data={product} rate={parseFloat(exchangeRate.rate)} key={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
