import { ImageModel } from "./ImageModel"
import { CategoryModel } from "./CategoryModel"

export interface ProductModel {
  id: string
  restaurantId: string
  categoryId: string
  name: string
  price: string
  isFeatured: boolean
  isArchived: boolean
  createdAt: string
  updatedAt: string
  images: ImageModel[]
  category: CategoryModel
}
