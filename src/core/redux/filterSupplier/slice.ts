import { SupplierResponse } from '@/models/response/SupplierResponse'
import { createSlice } from '@reduxjs/toolkit'
import { Action } from '../action'
import { FilterTableCommon } from '@/models/common/FilterTableCommon'

export interface FilterSupplierState {
  data: FilterTableCommon[]
}

const initialState: FilterSupplierState = {
  data: [],
}

export const filterSupplierSlice = createSlice({
  name: 'filterSupplier',
  initialState,
  reducers: {
    addFilterSupplier: (state, action: Action<FilterTableCommon>) => {
      state.data.push(action.payload)
    },

    deleteFilterSupplier: (state, action: Action<FilterTableCommon>) => {
      const { column, operation, value } = action.payload
      const index = state.data.findIndex(
        (filter) =>
          filter.column === column &&
          filter.operation === operation &&
          filter.value === value,
      )
      if (index >= 0) {
        state.data.splice(index, 1)
      }
    },

    setFilterSuppliers: (state, action: Action<FilterTableCommon[]>) => {
      state.data = action.payload
    },
  },
})

export const { addFilterSupplier, deleteFilterSupplier, setFilterSuppliers } =
  filterSupplierSlice.actions
export default filterSupplierSlice.reducer
