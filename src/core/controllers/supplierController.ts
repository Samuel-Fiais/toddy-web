import api from '@/shared/helpers/api'

import { ResponseBase } from '../models/response/ResponseBase'
import { SupplierResponse } from '../models/response/SupplierResponse'
import { SupplierCreateRequest } from '../models/request/SupplierRequest'
import axios from 'axios'
import { ErrorResponse } from '../models/response/ErrorResponseBase'

export const supplierController = () => {
  const getSuppliers = async () => {
    const response: ResponseBase<SupplierResponse[]> = (
      await api.get('/supplier')
    ).data
    return response
  }

  const getSupplier = async (supplierId: string) => {
    const response = (await api.get(`/supplier/${supplierId}`)).data
    return response
  }

  const createSupplier = async (supplierData: SupplierCreateRequest) => {
    try {
      const response: ResponseBase<SupplierResponse> = (
        await api.post('/supplier', supplierData)
      ).data
      return response
    } catch (e) {
      if (axios.isAxiosError(e) && e.response)
        return e.response.data as ErrorResponse
      else return new ErrorResponse()
    }
  }

  const updateSupplier = async (supplierData: SupplierResponse) => {
    const response = (await api.put(`/supplier/`, supplierData)).data
    return response
  }

  const deleteSupplier = async (supplierId: string) => {
    const response = (await api.delete(`/supplier/${supplierId}`)).data
    return response
  }

  return {
    getSuppliers,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier,
  }
}
