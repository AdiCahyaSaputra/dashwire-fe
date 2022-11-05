// Icons
import UserIcon from '../../../asset/svg/user.svg'

type Props = {
  author: string,
  is_author: number
}

const AuthorList: React.FC<Props> = ({ author, is_author }) => {
  return (
    <div className='flex items-center space-x-2'>
      <UserIcon className={`w-4 aspect-square ${is_author ? 'fill-red-400' : 'fill-green-400'} `} />
      <p className={`text-sm ${is_author ? 'text-red-400' : 'text-green-400'} `}>{is_author ? `${author} (Author)` : author}</p>
    </div>

  )
}

export default AuthorList
