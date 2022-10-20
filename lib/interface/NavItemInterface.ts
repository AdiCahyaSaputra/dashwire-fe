export default interface NavItemInterface {
  name: string,
  url: string,
  customHandler?: Function,
  dropDownItems?: NavItemInterface[]
}
