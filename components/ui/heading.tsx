type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold tracking-tight capitalize">{title}</h1>
    </div>
  )
}

export default Heading
