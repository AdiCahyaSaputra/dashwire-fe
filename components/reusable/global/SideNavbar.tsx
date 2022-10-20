// Components
import SideNavItem from 'components/reusable/global/SideNavItem'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'
import SideNavItemDropdown from './SideNavItemDropdown'

type Props = {
  isActive: boolean,
  navItems: NavItemInterface[]
}

const SideNavbar: React.FC<Props> = ({ isActive, navItems }) => {
  return (
    <aside className={`absolute text-sm ${!isActive && '-translate-x-full'} md:translate-x-0 md:static inset-0 p-6 md:w-3/12 bg-black`}>
      <ul className='space-y-2'>

        {navItems.map((navItem, index: number) => (
          <>
            {navItem.dropDownItems ?
              (<SideNavItemDropdown key={index} navItemWrapper={navItem} navDropdownItems={navItem.dropDownItems} />)
              :
              (<SideNavItem key={index} navItem={navItem} />)
            }
          </>
        ))}

      </ul>
    </aside>
  )
}

export default SideNavbar
