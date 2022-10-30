// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import SideNavbar from 'components/reusable/global/SideNavbar'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'
import UserInterface from 'lib/interface/UserInterface'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token, user } = ctx.req.cookies

  return {
    props: {
      user: JSON.parse(user!),
      token
    }
  }

}

type Props = {
  user: UserInterface,
  token: string
}

const Home: NextPage<Props> = ({ user, token }) => {

  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  return (
    <>
      <Head>
        <title>Dashwire</title>
      </Head>

      <MainNavbar toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} loggedUser={user.name!} token={token!} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex md:justify-end'>
          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />
          <MainContentWrapper>
            <h1>
              Welcome <span className='font-bold'>{user.name}</span>
            </h1>
            <p className='text-sm mt-1.5 text-white/70'>Here&apos;s Some Information For You</p>
          </MainContentWrapper>
        </div>
      </section>

    </>
  )

}

export default Home
