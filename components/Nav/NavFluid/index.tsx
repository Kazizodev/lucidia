import CompanyLogo from "../company"

const NavigationFluid = () => {
  return (
    <div className="flex h-24 fixed top-0 z-50 w-full">
      <div className="px-4 flex items-center">
        <CompanyLogo fluid={true} />
      </div>
    </div>
  )
}

export default NavigationFluid
