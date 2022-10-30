type Props = {
  children: React.ReactNode
}

const AuthLayoutSection: React.FC<Props> = ({ children }) => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-black'>
      {children}
    </main>
  )
}

export default AuthLayoutSection
