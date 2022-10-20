type Props = {
  children: React.ReactNode,
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full md:w-10/12 lg:w-8/12 mx-auto px-2 ${className}`}>
      {children}
    </div>
  )
}

export default Container
