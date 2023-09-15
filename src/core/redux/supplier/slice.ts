import { createSlice } from '@reduxjs/toolkit'
import { Action } from '../action'
import { SupplierResponse } from '@/core/models/response/SupplierResponse'

export interface SupplierState {
  data: SupplierResponse[]
}

const initialState: SupplierState = {
  data: [],
}

export const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    addSupplier: (state, action: Action<SupplierResponse>) => {
      state.data = [...state.data, action.payload]
    },

    setSuppliers: (state, action: Action<SupplierResponse[]>) => {
      state.data = action.payload
    },

    updateSupplier: (state, action: Action<SupplierResponse>) => {
      const updatedSupplier = action.payload
      const index = state.data.findIndex((s) => s.id === updatedSupplier.id)
      if (index !== -1) state.data[index] = updatedSupplier
    },

    deleteSupplier: (state, action: Action<String>) => {
      state.data = state.data.filter((s) => s.id != action.payload)
    },
  },
})

export const { addSupplier, setSuppliers, updateSupplier, deleteSupplier } =
  supplierSlice.actions
export default supplierSlice.reducer
