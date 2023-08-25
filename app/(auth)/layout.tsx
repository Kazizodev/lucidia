import NavigationFluid from "@/components/Nav/NavFluid"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationFluid />
      {children}
    </div>
  )
}
