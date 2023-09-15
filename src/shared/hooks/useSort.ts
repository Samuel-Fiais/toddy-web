import { useState } from 'react'

export const useSort = () => {
  const [sortedColumn, setSortedColumn] = useState<string>()
  const [sortOrder, setSortOrder] = useState('asc')

  const sortArray = <T>(arr: T[]) => {
    if (arr === null || arr.length === 0) return arr
    if (sortedColumn) {
      console.log(arr, sortedColumn)
      arr.sort((a, b) => {
        const aValue = a[sortedColumn as keyof T]
        const bValue = b[sortedColumn as keyof T]

        if (sortOrder == 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })
    }

    return arr
  }

  const handleSort = (column: string) => {
    if (sortedColumn == column) {
      setSortOrder(sortOrder == 'asc' ? 'desc' : 'asc')
    } else {
      setSortedColumn(column)
      setSortOrder('asc')
    }
  }

  return {
    sortArray,
    handleSort,
    sortedColumn,
    sortOrder,
  }
}
