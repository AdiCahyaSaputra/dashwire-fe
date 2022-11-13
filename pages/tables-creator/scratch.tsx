// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

// Components
import LayoutWrapperSection from 'components/section/global/LayoutWrapperSection'
import ColumnInputCard from 'components/reusable/tables-creator/ColumnInputCard'

// Interface
import LayoutWrapperInterface from 'lib/interface/LayoutWrapperInterface'

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//
//   const { access_token, user, tables } = ctx.req.cookies
//
//   return {
//     props: {
//       wrapperData: {
//         user: JSON.parse(user!),
//         access_token,
//         data: JSON.parse(tables!),
//       }
//     }
//   }
//
// }

type Props = {
  wrapperData: LayoutWrapperInterface
}


const Scratch: NextPage<Props> = ({ wrapperData }) => {

  const fakeWrapperData = {
    user: {
      name: 'Adi Cahya',
      email: 'adics@gmail.com'
    },
    access_token: 'nsnjsnsisnsha',
    data: []
  }

  const [data, setData] = useState({
    table: '',
    column: [
      {
        id: 1,
        colName: '',
        isRequired: false,
        dataType: 'Integer',
        minAndMax: ['', '']
      }
    ]
  })

  const updateDataState = (id: number, value: any) => {

    const newData = data.column.map(col => {
      if (col.id === id) {
        return Object.assign(col, value)
      }

      return col
    })

    setData({
      ...data,
      column: newData
    })

  }

  return (
    <>
      <Head>
        <title>Tables Creator</title>
      </Head>

      <LayoutWrapperSection {...fakeWrapperData}>
        <div>

          <section>
            <h1 className='font-bold text-xl'>Tables Creator</h1>
            <p className='text-sm font-light'>Create From Scratch</p>
          </section>

          <pre className='overflow-auto'>{JSON.stringify(data, null, 2)}</pre>

          <section className='mt-16'>
            <form>

              <div className='space-y-1.5'>

                <input
                  type='text'
                  placeholder='Name Of The Table'
                  className='p-1.5 placeholder:font-bold font-bold bg-transparent outline-none border-b-2 border-white/70 focus:border-white'
                  onChange={e => setData({
                    ...data,
                    table: e.target.value
                  })}
                />
                <p className='text-xs text-yellow-500 pl-1.5'>Min 8 Characters</p>

              </div>

              <div className='grid grid-cols-12 gap-4 mt-8'>

                {data.column.map(col => (
                  <ColumnInputCard key={col.id} {...col} update={updateDataState} />
                ))}

              </div>

            </form>
          </section>

        </div>
      </LayoutWrapperSection>
    </>
  )
}

export default Scratch
