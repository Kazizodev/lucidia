import NavigationFluid from "@/components/Nav/NavFluid"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationFluid />
      {children}
    </div>
  )
}
