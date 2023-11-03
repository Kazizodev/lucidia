import { create } from "zustand"
import { ProductModel } from "@/types/ProductModel"

interface CalculatorStore {
  products: ProductModel[]
  addproduct: (product: ProductModel) => void
  productExists: (product: ProductModel) => boolean
  removeProduct: (id: string) => void
  clearCart: () => void
}

const useCalculator = create<CalculatorStore>((set, get) => ({
  products: [],
  productExists: (product: ProductModel) => {
    const currentproducts = get().products
    const productExists = currentproducts.find((c) => c.id === product.id)
    return !!productExists
  },
  addproduct: (product: ProductModel) => {
    const currentproducts = get().products
    const productExists = currentproducts.find((c) => c.id === product.id)
    if (productExists) return

    set({ products: [...get().products, product] })
  },
  removeProduct: (id: string) => set({ products: [...get().products.filter((c) => c.id !== id)] }),
  clearCart: () => set({ products: [] }),
}))

export default useCalculator
