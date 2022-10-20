// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

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

  return (
    <>
      <Head>
        <title>Dashboardify</title>
      </Head>

      <MainNavbar toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} />

      <section className='min-h-screen relative'>
        <div className='flex'>
          <SideNavbar isActive={sideBarActive} navItems={AuthNavItems} />
          <MainContentWrapper />
        </div>
      </section>

    </>
  )
}

export default Home
