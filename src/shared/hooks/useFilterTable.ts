import { FilterTableCommon } from '@/core/models/common/FilterTableCommon'
import { typeFilters } from '@/utils/contants/constants'

export default function useFilter<T>(data: T[], filters: FilterTableCommon[]): T[] {
  return data.filter((item) => {
    return filters.every((filter) => {
      const { column, operation, value, type } = filter

      const filterType = typeFilters.find(
        (typeFilter) => typeFilter.value === operation && typeFilter.type === type,
      )

      if (!filterType) {
        return true // Ignora tipos de filtro desconhecidos
      }

      const itemValue = item[column as keyof T] // Acesse a propriedade usando o nome da coluna

      switch (type) {
        case 'text':
          return handleTextFilter(filterType.value, itemValue, value)
        case 'number':
          return handleNumberFilter(filterType.value, itemValue, value)
        case 'date':
          return handleDateFilter(filterType.value, itemValue, value)
        case 'boolean':
          return handleBooleanFilter(filterType.value, itemValue)
        default:
          return true // Ignora tipos desconhecidos
      }
    })
  })
}

function handleTextFilter(operation: string, itemValue: any, filterValue: string): boolean {
  const upperItemValue = (itemValue as string).toUpperCase()
  const upperFilterValue = filterValue?.toUpperCase() || ''

  switch (operation) {
    case 'starts':
      return upperItemValue.startsWith(upperFilterValue)
    case 'ends':
      return upperItemValue.endsWith(upperFilterValue)
    case 'contains':
      return upperItemValue.includes(upperFilterValue)
    default:
      return true // Ignora operações desconhecidas
  }
}

function handleNumberFilter(operation: string, itemValue: any, filterValue: string): boolean {
  const numericItemValue = parseFloat(itemValue)
  const numericFilterValue = parseFloat(filterValue)

  switch (operation) {
    case 'greater':
      return numericItemValue > numericFilterValue
    case 'less':
      return numericItemValue < numericFilterValue
    case 'equal':
      return numericItemValue === numericFilterValue
    default:
      return true // Ignora operações desconhecidas
  }
}

function handleDateFilter(operation: string, itemValue: any, filterValue: string): boolean {
  const itemDate = new Date(itemValue)
  const filterDate = new Date(filterValue)

  switch (operation) {
    case 'greater':
      return itemDate > filterDate
    case 'less':
      return itemDate < filterDate
    case 'equal':
      return itemDate.getTime() === filterDate.getTime()
    default:
      return true // Ignora operações desconhecidas
  }
}

function handleBooleanFilter(operation: string, itemValue: any): boolean {
  return (itemValue as boolean) === (operation === 'true')
}
