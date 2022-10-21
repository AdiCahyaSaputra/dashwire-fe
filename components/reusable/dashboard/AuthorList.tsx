// Icons
import UserIcon from '../../../asset/svg/user.svg'

type Props = {
  author: string
}

const AuthorList: React.FC<Props> = ({ author }) => {
  return (
    <div className='flex items-center space-x-2'>
      <UserIcon className='w-4 aspect-square fill-green-400' />
      <p className='text-sm text-green-400'>{author}</p>
    </div>

  )
}

export default AuthorList
