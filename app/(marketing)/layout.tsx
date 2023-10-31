import Navigation from "@/components/Nav/Nav"
import FooterSection from "@/components/Footer"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-myscreen">
      <Navigation />
      {children}
      <FooterSection />
    </div>
  )
}
