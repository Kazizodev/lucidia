import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { CategoryModel } from "@/types/CategoryModel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface CategoriesNavProps {
  categories: CategoryModel[]
}

const CategoriesNav: React.FC<CategoriesNavProps> = (data) => {
  return (
    <section className="sticky top-20 bg-background z-50">
      <div className="flex justify-center items-center px-2 container">
        <ArrowLeft className="w-5 h-5 lg:hidden block mr-2" />
        <ScrollArea className="max-lg:w-[calc(100vw-(70px))] lg:w-full whitespace-nowrap py-5">
          <div className="flex max-sm:mx-2 sm:mx-0 justify-around sm:justify-between space-x-4 scrollbar-hidden">
            {data.categories.map((category, i) => (
              <Link
                key={i}
                href={`/menu#${category.name.toLowerCase()}`}
                className="font-semibold select-none text-muted-foreground hover:text-foreground text-center uppercase transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <ArrowRight className="w-5 h-5 lg:hidden block ml-2" />
      </div>
      <Separator />
    </section>
  )
}

export default CategoriesNav
