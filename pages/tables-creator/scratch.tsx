// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { getNavItems } from 'lib/utils/HelpersUtils'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import SideNavbar from 'components/reusable/global/SideNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'

// Interface
import UserInterface from 'lib/interface/UserInterface'
import TableNavItemInterface from 'lib/interface/TableNavItemInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token, user, tables } = ctx.req.cookies

  return {
    props: {
      user: JSON.parse(user!),
      access_token,
      data: JSON.parse(tables!),
    }
  }

}

type Props = {
  user: UserInterface,
  access_token: string,
  data: {
    tables?: TableNavItemInterface[]
  },
}

const Scratch: NextPage<Props> = ({ user, access_token, data }) => {

  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  const AuthNavItems = getNavItems(data)

  return (
    <>
      <Head>
        <title>Tables Creator</title>
      </Head>
      <MainNavbar loggedUser={user.name!} toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} access_token={access_token!} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex justify-end'>

          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />

          <MainContentWrapper>
          </MainContentWrapper>

        </div>
      </section>
    </>
  )
}

export default Scratch
