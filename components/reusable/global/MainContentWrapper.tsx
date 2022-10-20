type Props = {
  children: React.ReactNode
}

const MainContentWrapper: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-full p-6 md:w-9/12">
      {children}
    </main>
  )
}

export default MainContentWrapper
