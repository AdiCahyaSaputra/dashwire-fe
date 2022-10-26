// Lib
import Head from 'next/head'
import { useRef, useState } from 'react'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import SideNavbar from 'components/reusable/global/SideNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import TablesNameSection from 'components/section/dashboard/TablesNameSection'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'

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
    url: '/tables-creator',
    dropDownItems: [
      {
        name: 'Using JSON',
        url: '/tables-creator/json'
      },
      {
        name: 'CSV Files',
        url: '/tables-creator/csv'
      },
      {
        name: 'Import From Excel',
        url: '/tables-creator/excel'
      },
      {
        name: 'Create From Scratch',
        url: '/tables-creator/scratch'
      }
    ]
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

const DashboardTableView: React.FC = () => {

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
        <div className='flex justify-end'>

          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />

          <MainContentWrapper>
            <TablesNameSection />
          </MainContentWrapper>

        </div>
      </section>
    </>
  )
}

export default DashboardTableView
