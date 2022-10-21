type Props = {
  column: string
}

const TableHeadItem: React.FC<Props> = ({ column }) => {
  return (
    <th className='whitespace-nowrap py-2 px-4'>{column}</th>
  )
}

export default TableHeadItem
