type Props = {
  children: React.ReactNode
}

const MainContentWrapper: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-slate-800 text-white p-6 md:w-9/12">
      {children}
    </main>
  )
}

export default MainContentWrapper
