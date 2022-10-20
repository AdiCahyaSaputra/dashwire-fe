// Lib
import Head from 'next/head'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import SideNavbar from 'components/reusable/global/SideNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.query

  return {
    props: {
      query: name!
    }
  }
}

const AuthNavItems: NavItemInterface[] = [
  {
    name: 'View Data',
    url: '/dashboard',
    dropDownItems: [
      {
        name: 'table-name',
        url: '/dashboard/table-name'
      }
    ]
  },
  {
    name: 'Tables Creator',
    url: '/tables-creator'
  },
  {
    name: 'Manipulation',
    url: '/manipulation',
    dropDownItems: [
      {
        name: 'table-name',
        url: '/manipulation/table-name'
      }
    ]
  }
]

type Props = {
  query: string | string[]
}

const DashboardTableView: React.FC<Props> = ({ query }) => {

  const router = useRouter()
  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  return (
    <>
      <Head>
        <title>Dashboard | View Data</title>
      </Head>

      <MainNavbar toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex'>
          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />
          <MainContentWrapper>
            <h1>Hello World</h1>
          </MainContentWrapper>
        </div>
      </section>
    </>
  )
}

export default DashboardTableView
