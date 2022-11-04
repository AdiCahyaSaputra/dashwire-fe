export default interface TableInfoInterface {
  table: {
    name: string,
    id: number
  },
  column_values: {
    [key: string]: any
  }
}
