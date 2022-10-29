// Icons 
import XCricleIcon from '../../../asset/svg/xcircle.svg'

type Props = {
  message: any,
  status: number,
  close?: Function
}

const NotifyMessage: React.FC<Props> = ({ message, status, close }) => {
  const bgClass = status >= 400 ? 'bg-red-600/50 shadow-md shadow-red-600/40' : 'bg-green-600/50 shadow-md shadow-green-600/40'
  return (
    <div className={`py-2 flex items-center justify-between px-4 w-full backdrop-blur-md text-sm font-bold tracking-wide text-white ${bgClass}`}>
      <p className='w-11/12'>{message}</p>
      {close && (
        <button onClick={() => close(true)} className='text-white'>
          <XCricleIcon className='w-6 aspect-square fill-white' />
        </button>
      )}
    </div>
  )
}

export default NotifyMessage
