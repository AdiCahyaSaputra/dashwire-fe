// Components
import AuthorList from 'components/reusable/dashboard/AuthorList'

const authorList = ['Adi Cahya Saputra', 'Amicia De Rune']

const TablesNameSection: React.FC = () => {
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

          <thead className='bg-black text-white text-left'>
            <tr>
              <th className='py-2 px-4'>No</th>
              <th className='py-2 px-4'>Nama</th>
              <th className='py-2 px-4'>NISN</th>
              <th className='py-2 px-4'>Jurusan</th>
              <th className='py-2 px-4'>Nomor HP</th>
            </tr>
          </thead>

          <tbody className='text-left'>
            <tr>
              <td className='py-2 px-4'>1</td>
              <td className='py-2 px-4'>Adi Cahya Saputra</td>
              <td className='py-2 px-4'>00501928291</td>
              <td className='py-2 px-4'>RPL</td>
              <td className='py-2 px-4'>081311513938</td>
            </tr>
          </tbody>

        </table>
      </div>
    </>
  )
}

export default TablesNameSection
