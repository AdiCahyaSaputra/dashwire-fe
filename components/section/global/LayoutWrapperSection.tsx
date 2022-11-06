// Lib 
import type { NextPage } from 'next'
import { useRef, useState } from 'react'
import { getNavItems } from 'lib/utils/HelpersUtils'

// Components
import MainContentWrapper from 'components/reusable/global/MainContentWrapper'
import MainNavbar from 'components/reusable/global/MainNavbar'
import SideNavbar from 'components/reusable/global/SideNavbar'

// Interface
import UserInterface from 'lib/interface/UserInterface'
import TableNavItemInterface from 'lib/interface/TableNavItemInterface'

type Props = {
  user: UserInterface,
  access_token: string,
  data: {
    tables?: TableNavItemInterface[]
  },
  children: React.ReactNode
}

const LayoutWrapperSection: NextPage<Props> = ({ user, access_token, data, children }) => {

  const [sideBarActive, setSideBarActive] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const { current: section } = ref

  const AuthNavItems = getNavItems(data)

  return (
    <>
      <MainNavbar loggedUser={user.name!} toggleSideBar={sideBarActive} handleToggleSideBar={setSideBarActive} access_token={access_token!} />

      <section ref={ref} className='min-h-screen relative'>
        <div className='flex justify-end'>

          <SideNavbar offsetTop={section?.offsetTop ?? 136} isActive={sideBarActive} navItems={AuthNavItems} />

          <MainContentWrapper>
            {children}
          </MainContentWrapper>

        </div>
      </section>
    </>
  )
}

export default LayoutWrapperSection
