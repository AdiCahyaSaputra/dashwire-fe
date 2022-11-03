// Lib
import Head from 'next/head'
import { useRef, useState } from 'react'
import { getNavItems } from 'lib/utils/HelpersUtils'
import { getTableAuthors, getTableInfo } from 'lib/utils/EndpointsUtils'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import SideNavbar from 'components/reusable/global/SideNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import TablesNameSection from 'components/section/dashboard/TablesNameSection'

// Interface
import { GetServerSideProps } from 'next'
import UserInterface from 'lib/interface/UserInterface'
import TableInfoInterface from 'lib/interface/TableInfoInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token, user, tables } = ctx.req.cookies
  const { id } = ctx.query

  const tableWithValues = await getTableInfo(id!, access_token!)
  const tableWithAuthors = await getTableAuthors(id!, access_token!)

  return {
    props: {
      user: JSON.parse(user!),
      access_token,
      data: JSON.parse(tables!),
      tableInfo: tableWithValues.data, 
      tableAuthors: tableWithAuthors.data
    }
  }

}

type Props = {
  user: UserInterface,
  access_token: string,
  data: {
    tables?: TableInfoInterface[]
  },
  tableInfo: any,
  tableAuthors: any
}

const DashboardTableView: React.FC<Props> = ({ user, access_token, data, tableInfo, tableAuthors }) => {

  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  const AuthNavItems = getNavItems(data)

  return (
    <>
      <Head>
        <title>Dashboard | View Data</title>
      </Head>

      <MainNavbar loggedUser={user.name!} toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} access_token={access_token!} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex justify-end'>

          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />

          <MainContentWrapper>
            <TablesNameSection authors={tableAuthors} />
          </MainContentWrapper>

        </div>
      </section>
    </>
  )
}

export default DashboardTableView