// Lib
import { useRouter } from 'next/router'

// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'

type Props = {
  navItem: NavItemInterface,
}

const SideNavItem: React.FC<Props> = ({ navItem }) => {

  const router = useRouter()

  const clickHandler = (url: string) => {
    if (navItem.customHandler) return navItem.customHandler(url)
    return router.push(navItem.url)
  }

  return (
    <li onClick={() => {
      if (!navItem.dropDownItems) return clickHandler(navItem.url)
    }} className={`py-2 px-4 hover:bg-white/20 ${navItem.url === router.asPath && 'bg-white/20'}`}>
      <a className={navItem.url === router.asPath ? 'text-white' : 'text-white/60'}>{navItem.name}</a>
    </li>
  )
}

export default SideNavItem
