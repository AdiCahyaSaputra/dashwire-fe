// Lib
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getTableAuthors, getTableInfo } from 'lib/utils/EndpointsUtils'

// Components
import LayoutWrapperSection from 'components/section/global/LayoutWrapperSection'
import TablesSection from 'components/section/dashboard/TablesSection'

// Interface
import TableInfoInterface from 'lib/interface/TableInfoInterface'
import AuthorInterface from 'lib/interface/AuthorInterface'
import LayoutWrapperInterface from 'lib/interface/LayoutWrapperInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token, user, tables } = ctx.req.cookies
  const { id } = ctx.query

  const tableWithValues = await getTableInfo(id!, access_token!)
  const tableWithAuthors = await getTableAuthors(id!, access_token!)

  return {
    props: {
      wrapperData: {
        user: JSON.parse(user!),
        access_token,
        data: JSON.parse(tables!),
      },
      tableInfo: tableWithValues.data,
      tableAuthors: tableWithAuthors.data
    }
  }

}

type Props = {
  wrapperData: LayoutWrapperInterface,
  tableInfo: TableInfoInterface,
  tableAuthors: {
    authors?: AuthorInterface[]
  }
}

const DashboardTableView: React.FC<Props> = ({ wrapperData, tableInfo, tableAuthors }) => {

  return (
    <>
      <Head>
        <title>Dashboard | View Data</title>
      </Head>

      <LayoutWrapperSection {...wrapperData}>
        <TablesSection
          authors={tableAuthors.authors!}
          table={tableInfo}
        />
      </LayoutWrapperSection>

    </>
  )
}

export default DashboardTableView
