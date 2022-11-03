// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { getNavItems } from 'lib/utils/HelpersUtils'

// Components
import MainNavbar from 'components/reusable/global/MainNavbar'
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import SideNavbar from 'components/reusable/global/SideNavbar'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'
import UserInterface from 'lib/interface/UserInterface'
import TableInfoInterface from 'lib/interface/TableInfoInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { access_token, user, tables } = ctx.req.cookies

  return {
    props: {
      user: JSON.parse(user!),
      access_token,
      data: JSON.parse(tables!)

    }
  }

}

type Props = {
  user: UserInterface,
  access_token: string,
  data: {
    tables?: TableInfoInterface[]
  }
}

const Home: NextPage<Props> = ({ user, access_token, data }) => {

  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  const AuthNavItems: NavItemInterface[] = getNavItems(data)

  return (
    <>
      <Head>
        <title>Dashwire</title>
      </Head>

      <MainNavbar toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} loggedUser={user.name!} access_token={access_token!} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex md:justify-end'>

          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />

          <MainContentWrapper>
            <div className='space-y-8'>

              <section>

                <h1 className='text-xl font-bold'>Who You&apos;re</h1>
                <p className='text-sm text-white/70'>
                  Information of your account &rarr;
                </p>

                <div className='mt-2 pl-4 border-l-2 border-white/70 border-dashed'>
                  <h1 className='text-lg font-bold'>
                    {user.name}
                  </h1>
                  <p className='text-sm text-white/70'>
                    {user.email}
                  </p>
                </div>

              </section>

              <section>

                <h1 className='text-xl font-bold'>Permission</h1>
                <p className='text-sm text-white/70'>
                  To manage the following table &rarr;
                </p>

                <div className='mt-2 pl-4 border-l-2 border-white/70 border-dashed flex flex-col space-y-2'>
                  {data.tables ? (
                    data.tables.map(({ table, id }) => (
                      <a key={id} className='text-sky-400 hover:underline text-lg font-bold'>
                        {table}
                      </a>
                    ))
                  ) : (
                    <h1 className='text-lg font-bold'>
                      You Don&apos;t Have Permission To Manage Any Table
                    </h1>
                  )}
                </div>

              </section>

            </div>
          </MainContentWrapper>

        </div>
      </section>

    </>
  )

}

export default Home
