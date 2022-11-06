// Interface
import TableNavItemInterface from './TableNavItemInterface'
import UserInterface from './UserInterface'

export default interface LayoutWrapperInterface {
  user: UserInterface,
  access_token: string,
  data: {
    tables?: TableNavItemInterface[]
  }
}
