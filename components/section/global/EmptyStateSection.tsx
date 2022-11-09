// Lib
import { useRouter } from 'next/router'

type Props = {
  message: string,
  action: {
    label: string,
    url: string
  }
}

const EmptyStateSection: React.FC<Props> = ({ message, action }) => {

  const router = useRouter()

  return (
    <div className="p-6 bg-blue-500 text-white">
      <p className="text-lg font-medium">{message}</p>
      <button
        onClick={() => router.push(action.url)}
        className="w-full shadow-md hover:bg-white/80 py-2 px-4 bg-white text-black text-sm mt-1.5"
      >{action.label}</button>
    </div>
  )
}

export default EmptyStateSection
