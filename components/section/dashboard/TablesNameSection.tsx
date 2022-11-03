// Components
import AuthorList from 'components/reusable/dashboard/AuthorList'
import TableBodyItem from 'components/reusable/dashboard/TableBodyItem'
import TableHeadItem from 'components/reusable/dashboard/TableHeadItem'

const authorList = ['Adi Cahya Saputra', 'Amicia De Rune']

type Props = {
  authors: any
}

const TablesNameSection: React.FC<Props> = ({ authors }) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Table Name</h1>
        <p className="mt-1.5">Untuk mengelola data siswa</p>
      </div>

      <div className="mt-8 space-y-2">
        <h4 className="text-lg font-bold">Author List</h4>
        {authorList.map((author, index: number) => (
          <AuthorList author={author} key={index} />
        ))}
      </div>

      <div className='overflow-auto mt-16'>
        <table>

          <thead className='bg-yellow-600/30 text-yellow-600 text-left'>
            <tr className='divide-x-2 divide-yellow-600/40 border-2 border-dashed border-yellow-600'>
              <TableHeadItem column='No' />
              <TableHeadItem column='Nama' />
              <TableHeadItem column='NISN' />
              <TableHeadItem column='Jurusan' />
              <TableHeadItem column='Nomor HP' />
            </tr>
          </thead>

          <tbody className='bg-white/30 border-2 border-t-0 border-white/30 text-left'>
            <tr className='divide-x-2 divide-white/30'>
              <TableBodyItem data='1' />
              <TableBodyItem data='Adi Cahya Saputra' />
              <TableBodyItem data='00581910282' />
              <TableBodyItem data='RPL' />
              <TableBodyItem data='081311513938' />
            </tr>
          </tbody>

        </table>
      </div>
    </>
  )
}

export default TablesNameSection
