type Props = {
  message: string
}

const NotifyMessage: React.FC<Props> = ({ message }) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default NotifyMessage
