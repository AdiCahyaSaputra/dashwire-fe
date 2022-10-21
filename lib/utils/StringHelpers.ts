export const toTitleCase = (str: string) => {
  const splittedStr = str.split('')
  splittedStr.splice(0, 1, splittedStr[0].toUpperCase())


  return splittedStr.join('')
}

export const getBreadcrumbStr = (str: string): string[] => {
  const splittedStr = str.split('/')
  splittedStr.splice(0, 1)

  return splittedStr
}
