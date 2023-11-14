import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingPage = () => {
  return (
    <main>
      <div className="sticky top-20 bg-background z-50">
        <section className="container mx-auto grid grid-flow-col rounded py-5">
          <div className="flex items-center justify-center">
            <Skeleton className="w-full h-6 rounded" />
          </div>
        </section>
        <Separator />
      </div>

      <section className="container mx-auto py-4 sm:py-6 lg:py-8">
        <div className="flex justify-between flex-wrap">
          <div className="py-4 w-full">
            <div className="flex items-center justify-center">
              <Skeleton className="h-[2.5em] w-[300px] font-bold pb-2" />
            </div>
            <div className="flex justify-between flex-wrap my-4">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="lg:w-[48%] w-full mb-4">
                  <div className="flex">
                    <Skeleton className="mt-[0.30rem] mr-2 rounded-lg transition-all select-none object-cover bg-muted w-[50px] h-[50px]" />
                    <div className="flex flex-col w-full">
                      <Skeleton className="w-full h-[2em]" />
                      <Skeleton className="mt-1 w-full h-[1em]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoadingPage
