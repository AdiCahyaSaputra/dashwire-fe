// Lib
import { useRouter } from 'next/router'
import { getBreadcrumbStr } from 'lib/utils/HelpersUtils'
import { useAuth } from 'lib/hook/useAuth'
import { useState } from 'react'

// Components
import Container from './Container'

// Icons
import LogoutIcon from '../../../asset/svg/logout.svg'

type Props = {
  toggleSideBar: boolean,
  handleToggleSideBar: Function,
  loggedUser: string,
  access_token: string
}

const MainNavbar: React.FC<Props> = ({ toggleSideBar, handleToggleSideBar, loggedUser, access_token }) => {

  const { logout } = useAuth()

  const [isSubmit, setIsSubmit] = useState(false)

  const router = useRouter()
  const breadcrumbItems = getBreadcrumbStr(router.asPath)

  const logoutHandler = async () => {
    setIsSubmit(true)
    await logout(access_token)
  }


  return (
    <nav className='z-10 border-b-2 border-white sticky top-0 inset-x-0 bg-black text-white select-none'>

      <Container className='p-4 flex items-center justify-between'>

        <div>
          <h1 className='text-xl font-bold'>Dashwire_</h1>
          <p className='text-sm text-white/80'>
            Logged as <span className='text-white font-medium'>{loggedUser}</span>
          </p>
        </div>

        <button disabled={isSubmit} onClick={logoutHandler} className='cursor-pointer md:flex items-center md:space-x-2 py-2 pl-2 pr-2 md:pr-4 rounded-md bg-red-600/30 disabled:bg-red-600/10 hover:bg-red-600/40 hover:shadow-md disabled:shadow-none hover:shadow-red-600/40'>
          <LogoutIcon className='rotate-180 fill-red-600 w-6 aspect-square' />
          <p className='hidden md:block text-sm text-red-600'>{isSubmit ? 'Wait..' : 'Logout'}</p>
        </button>

      </Container>

      <Container className='flex items-center justify-between p-4 bg-black/40 border-t-2 border-gray-800'>

        <button
          onClick={() => handleToggleSideBar(!toggleSideBar)}
          className='flex items-center space-x-4 md:hidden'>
          <div className='space-y-1.5'>

            <div className={`${toggleSideBar ? 'w-6' : 'w-8'} h-[2px] bg-white`}></div>
            <div className={`${toggleSideBar ? 'w-6' : 'w-4'} h-[2px] bg-white`}></div>
            <div className='w-6 h-[2px] bg-white'></div>

          </div>
        </button>

        <div className='divide-x divide-white text-sm hidden font-light md:flex items-center space-x-2'>
          {breadcrumbItems.map((item, index: number) => (
            <div key={index} className='px-2'>
              <p>
                {item}
              </p>
            </div>
          ))}
        </div>

      </Container>

    </nav>
  )
}

export default MainNavbar
