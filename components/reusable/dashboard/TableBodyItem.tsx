type Props = {
  data: string
}

const TableBodyItem: React.FC<Props> = ({ data }) => {
  return (
    <td className='whitespace-nowrap py-2 px-4'>{data}</td>
  )
}

export default TableBodyItem
