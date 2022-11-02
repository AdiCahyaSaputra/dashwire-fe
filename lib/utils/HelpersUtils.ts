// Interface
import NavItemInterface from 'lib/interface/NavItemInterface'
import TableInfoInterface from 'lib/interface/TableInfoInterface'

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

export const updateArrayItem = (array: any[], index: number, value: any) => {
  array.splice(index, 1, value)
}

type NavItemsData = {
  tables?: TableInfoInterface[]
}

export const getNavItems = (data: NavItemsData) => {

  const DDIDashboard: NavItemInterface['dropDownItems'] = []
  const DDIManipulation: NavItemInterface['dropDownItems'] = []

  if (data.tables) {

    data.tables.forEach(({ table, id }: any) => {
      DDIDashboard.push({
        name: table,
        url: `/dashboard/${id}`
      })
      DDIManipulation.push({
        name: table,
        url: `/manipulation/${id}`
      })
    })

  }

  return [
    {
      name: 'View Data',
      url: '/dashboard',
      dropDownItems: DDIDashboard
    },
    {
      name: 'Tables Creator',
      url: '/tables-creator',
      dropDownItems: [
        {
          name: 'Using JSON',
          url: '/tables-creator/json'
        },
        {
          name: 'CSV Files',
          url: '/tables-creator/csv'
        },
        {
          name: 'Import From Excel',
          url: '/tables-creator/excel'
        },
        {
          name: 'Create From Scratch',
          url: '/tables-creator/scratch'
        }
      ]
    },
    {
      name: 'Manipulation',
      url: '/manipulation',
      dropDownItems: DDIManipulation
    }
  ]
}
