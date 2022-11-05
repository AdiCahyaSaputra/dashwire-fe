// Lib
import { toTitleCase, toValidTable } from 'lib/utils/HelpersUtils'

// Components
import AuthorList from 'components/reusable/dashboard/AuthorList'
import TableBodyItem from 'components/reusable/dashboard/TableBodyItem'
import TableHeadItem from 'components/reusable/dashboard/TableHeadItem'

// Interface
import AuthorInterface from 'lib/interface/AuthorInterface'
import TableInfoInterface from 'lib/interface/TableInfoInterface'

type Props = {
  authors: AuthorInterface[],
  table: TableInfoInterface
}

const TablesNameSection: React.FC<Props> = ({ authors, table }) => {

  const tableData = toValidTable(table.column_values)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">{table.table.name}</h1>
        <p className="mt-1.5">Untuk mengelola data siswa</p>
      </div>

      <div className="mt-8 space-y-2">
        <h4 className="text-lg font-bold">Author List</h4>
        {authors.map(({ name, id, is_author }) => (
          <AuthorList author={name} key={id} is_author={is_author}/>
        ))}
      </div>

      <div className='overflow-auto mt-16'>
        <table>

          <thead className='bg-yellow-600/30 text-yellow-600 text-left'>
            <tr className='divide-x-2 divide-yellow-600/40 border-2 border-dashed border-yellow-600'>
              {Object.keys(table.column_values).map((key, index: number) => (
                <TableHeadItem column={toTitleCase(key)} key={index} />
              ))}
            </tr>
          </thead>

          <tbody className='bg-white/30 border-2 border-t-0 border-white/30 text-left'>
            {tableData.map((table, index: number) => (
              <tr key={index} className='divide-x-2 divide-white/30'>
                {Object.values(table).map((value: any, index: number) => (
                  <TableBodyItem data={value} key={index} />
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default TablesNameSection
