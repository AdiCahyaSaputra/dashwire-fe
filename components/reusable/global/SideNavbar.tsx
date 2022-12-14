// Components
import SideNavItem from 'components/reusable/global/SideNavItem'
import SideNavItemDropdown from 'components/reusable/global/SideNavItemDropdown'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'

type Props = {
  isActive: boolean,
  navItems: NavItemInterface[],
  offsetTop: number,
}

const SideNavbar: React.FC<Props> = ({ isActive, navItems, offsetTop }) => {

  return (
    <aside style={{
      top: offsetTop
    }} className={`fixed bottom-0 text-sm ${!isActive && '-translate-x-full'} md:translate-x-0 inset-x-0 p-6 md:w-3/12 bg-black`}>
      <ul className='space-y-2'>

        {navItems.map((navItem, index: number) => (
          <div key={index}>
            {navItem.dropDownItems && navItem.dropDownItems.length ?
              (<SideNavItemDropdown navItemWrapper={navItem} navDropdownItems={navItem.dropDownItems} />)
              :
              (<SideNavItem navItem={navItem} />)
            }
          </div>
        ))}

      </ul>
    </aside>
  )
}

export default SideNavbar
