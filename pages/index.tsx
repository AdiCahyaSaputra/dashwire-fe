// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import SideNavbar from 'components/reusable/global/SideNavbar'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'

const GuestNavItems: NavItemInterface[] = [
  {
    name: 'Registering An Account',
    url: '/register'
  },
  {
    name: 'Login To Existing Account',
    url: '/login'
  }
]

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

const Home: NextPage = () => {


  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref


  return (
    <>
      <Head>
        <title>Dashboardify</title>
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

export default Home
