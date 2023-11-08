import { Exchange } from "./Exchange"
import { ImageModel } from "./ImageModel"
import { CategoryModel } from "./CategoryModel"

export interface ProductModel {
  id: string
  name: string
  price: string
  createdAt: string
  updatedAt: string
  categoryId: string
  description: string
  isFeatured: boolean
  isArchived: boolean
  restaurantId: string
  images: ImageModel[]
  category: CategoryModel
}

export interface ProductApiModel {
  products: ProductModel[]
  exchange: Exchange
}
