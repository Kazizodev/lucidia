import axiosApi from "@/lib/axios"
import { Exchange } from "@/types/Exchange"
import Item from "@/components/Pages/menu/item"
import { ProductModel } from "@/types/ProductModel"
import { CategoryModel } from "@/types/CategoryModel"
import CategoriesNav from "@/components/Pages/menu/categories"

const getProducts = async () => {
  try {
    const res = await axiosApi.get("/products")
    return res.data
  } catch (error) {
    console.log(error)
  }
}
const getCategories = async () => {
  try {
    const res = await axiosApi.get("/categories")
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const MenuPage = async () => {
  const data = await getProducts()
  const categories = (await getCategories()) as CategoryModel[]

  const exchange = data.exchange as Exchange
  const products = data.products as ProductModel[]

  const productsByCategory: { [key: string]: { category: string; products: ProductModel[] } } = {}
  products.forEach((product) => {
    const categoryId = product.categoryId.toString()
    if (!productsByCategory[categoryId]) productsByCategory[categoryId] = { category: product.category.toString(), products: [] }

    productsByCategory[categoryId].products.push(product)
  })

  return (
    <>
      <CategoriesNav categories={categories} />

      <main className="container mx-auto py-4 sm:py-6 lg:py-8">
        <div className="flex justify-between flex-wrap">
          {categories.map(
            (category) =>
              productsByCategory[category.id] && (
                <div key={category.id} className="py-4 w-full">
                  <h2 id={category.name.toLowerCase()} className="lg:text-3xl text-2xl text-center font-bold pb-2">
                    {category.name}
                  </h2>
                  <div className="flex justify-between flex-wrap my-4">
                    {productsByCategory[category.id].products.map((product, i) => (
                      <Item
                        key={i}
                        name={product.name}
                        description={product.description}
                        price={parseFloat(product.price)}
                        image={product.images[0].url}
                        rate={parseFloat(exchange.rate)}
                      />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </main>
    </>
  )
}

export default MenuPage
