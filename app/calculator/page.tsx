import Orders from "@/components/Pages/calculator/orders"

const CalculatorPage = () => {
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-3 max-md:grid-cols-1 py-10 gap-10">
        <section className="col-span-2">
          <Orders />
        </section>

        <section>
          <h4>Order summary</h4>
        </section>
      </div>
    </main>
  )
}

export default CalculatorPage
