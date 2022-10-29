// Components
import NotifyMessage from './NotifyMessage'

// Interface
import ResponseInterface from 'lib/interface/ResponseInterface'

type Props = {
  response: ResponseInterface,
  close: Function
}

const Notify: React.FC<Props> = ({ response, close }) => {

  return (
    <>
      {typeof response.message === 'string' ? (
        <>
          <div className={`z-50 fixed ${response.message ? 'top-0' : '-top-full'} inset-x-0`}>
            <NotifyMessage message={response.message} status={response.status} close={() => close({
                ...response, message: ''
              })} />
          </div>
        </>
      ) : (
        <div className={`z-50 fixed ${response.message ? 'top-0' : '-top-full'} flex flex-col space-y-2 inset-x-0`}>
          {Object.keys(response.message).map((data: any, index: number) => (
            <NotifyMessage message={response.message[data]} key={index} status={response.status} />
          ))}
          <button onClick={() => close({
              ...response, message: ''
            })} className='text-white text-sm py-2 px-4 border-2 border-white'>
            Close All
          </button>
        </div>
      )}
    </>
  )
}

export default Notify
