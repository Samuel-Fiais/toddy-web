import { FilterTableForm } from '../forms/FilterTableForm'

export class FilterTableCommon {
  column: string = ''
  columnScreen: string = ''
  operation: string = ''
  operationScreen: string = ''
  value: string = ''
  type: 'number' | 'text' | 'boolean' | 'date' | undefined = 'text'

  constructor(formFilter?: FilterTableForm) {
    if (formFilter == undefined) return

    this.column = formFilter.column.value ?? ''
    this.columnScreen = formFilter.column.text
    this.operation = formFilter.operation.value ?? ''
    this.operationScreen = formFilter.operation.text
    this.value = formFilter.value
    this.type = formFilter.column.type
  }
}
