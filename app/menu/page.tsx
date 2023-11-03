import axiosApi from "@/lib/axios"
import { ProductModel } from "@/types/ProductModel"

const getProducts = async () => {
  try {
    const res = await axiosApi.get("/products?isFeatured=true&categoryId=f7a2870e-e968-481d-b2b0-ffe9f8928e2c")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const MenuPage = async () => {
  const products = (await getProducts()) as ProductModel[]
  return <>Hey</>
}

export default MenuPage
