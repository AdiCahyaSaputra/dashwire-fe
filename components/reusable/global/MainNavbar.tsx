// Components
import Container from './Container'

// Icons
import BarIcon from '../../../asset/svg/bar.svg'
import LogoutIcon from '../../../asset/svg/logout.svg'

type Props = {
  toggleSideBar: boolean,
  handleToggleSideBar: Function
}

const MainNavbar: React.FC<Props> = ({ toggleSideBar, handleToggleSideBar }) => {

  return (
    <nav className='z-10 border-b-2 border-white sticky top-0 inset-x-0 bg-black text-white select-none'>

      <Container className='p-4 flex items-center justify-between'>

        <div>
          <h1 className='text-xl font-bold'>DashboardiFY</h1>
          <p className='text-sm text-white/80'>
            Logged as <span className='text-white font-medium'>Admin</span>
          </p>
        </div>

        <div className='cursor-pointer md:flex items-center md:space-x-2 py-2 pl-2 pr-2 md:pr-4 rounded-md bg-red-600/30 hover:bg-red-600/40 hover:shadow-md hover:shadow-red-600/40'>
          <LogoutIcon className='rotate-180 fill-red-600 w-6 aspect-square' />
          <p className='hidden md:block text-sm text-red-600'>Logout</p>
        </div>

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
        <div className='text-sm font-light'>
          Dashboard / Home
        </div>
      </Container>

    </nav>
  )
}

export default MainNavbar
