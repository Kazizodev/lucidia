import { Skeleton } from "@/components/ui/skeleton"

const LoadingPage = () => {
  return (
    <main className="container mx-auto min-h-[calc(100vh-180px)] py-10">
      <section className="flex max-md:flex-col gap-x-10">
        <div className="flex-[2] pb-7">
          <Skeleton className="w-[100px] h-9" />
          <Skeleton className="w-[130px] h-6 my-4" />
        </div>

        <div className="flex-1 md:p-2">
          <Skeleton className="w-[140px] h-9" />

          <div className="my-4 space-y-2">
            <Skeleton className="w-full h-9" />
            <Skeleton className="w-full h-9" />
            <Skeleton className="w-full h-9" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoadingPage
