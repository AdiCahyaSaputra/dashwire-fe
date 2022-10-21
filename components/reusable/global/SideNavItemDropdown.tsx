// Lib
import { useEffect, useState } from 'react'

// Components
import SideNavItem from 'components/reusable/global/SideNavItem'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'

// Icon
import BarArrowDownIcon from '../../../asset/svg/bar-arrow-down.svg'
import { useRouter } from 'next/router'

type Props = {
  navItemWrapper: NavItemInterface,
  navDropdownItems: NavItemInterface[],
}

const SideNavItemDropdown: React.FC<Props> = ({ navItemWrapper, navDropdownItems }) => {

  const router = useRouter()
  const [openDropDown, setOpenDropDown] = useState(false)

  useEffect(() => {
    if (router.asPath.startsWith(navItemWrapper.url)) setOpenDropDown(true)
  }, [])

  return (
    <div className={`overflow-hidden `}>
      <div onClick={() => setOpenDropDown(!openDropDown)} className='flex items-center justify-between group'>
        <h4 className={`font-bold text-sm group-hover:text-white py-2 px-4 ${openDropDown ? 'text-white' : 'text-white/60'}`}>{navItemWrapper.name}</h4>
        <BarArrowDownIcon className={`w-4 aspect-square group-hover:fill-white ${openDropDown ? 'fill-white' : 'fill-white/60 '}`} />
      </div>
      <div className={`ml-4 ${openDropDown && 'border-l-2'} border-white ${!openDropDown && 'hidden'}`}>
        {navDropdownItems.map((navItem, index: number) => (
          <SideNavItem navItem={navItem} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SideNavItemDropdown
