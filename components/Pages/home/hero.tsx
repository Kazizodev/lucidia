import { BillboardModel } from "@/types/BillboardModel"

const HeroSection = ({ billboards }: { billboards: BillboardModel[] }) => {
  if (billboards.length === 0) return null
  else
    return (
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div
            style={{ backgroundImage: `url(${billboards[0].imageUrl})` }}
            className="rounded-lg relative aspect-square bg-foreground/5 md:aspect-[2.4/1] overflow-hidden bg-cover dark:opacity-80"
          />
        </div>
      </section>
    )
}

export default HeroSection
