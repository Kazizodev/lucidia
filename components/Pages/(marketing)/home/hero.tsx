import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

const HeroSection = () => {
    return (
        <section className='py-4 sm:py-6 lg:py-8'>
            <div className="rounded-lg overflow-hidden">
                <div
                    style={{
                        backgroundImage: `url("https://rocketagency.com.au/wp-content/uploads/2022/05/ROCKET-eBook-The-Australian-eCommerce-Marketing2022-Cover-and-ads_Feature-scaled.jpg")`,
                    }}
                    className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                            Featured Products
                            <Button size="lg" className="w-full py-6 text-xl">
                                <ShoppingBag className="mr-2" />
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
