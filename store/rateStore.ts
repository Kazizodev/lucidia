import { create } from "zustand"

interface RateStore {
  exchange: boolean
  changeRate: () => void
}

const useRate = create<RateStore>((set, get) => ({
  exchange: false,
  changeRate: () => set({ exchange: !get().exchange }),
}))

export default useRate
