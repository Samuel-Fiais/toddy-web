import { supplierController } from '@/core/controllers/supplierController'
import { ResponseBase } from '@/core/models/response/ResponseBase'
import { SupplierCreateRequest } from '@/core/models/request/SupplierRequest'
import { SupplierResponse } from '@/core/models/response/SupplierResponse'

const getSuppliersData = async () => {
  const { getSuppliers } = supplierController()
  return await getSuppliers()
}

export const postSupplier = async (data: SupplierCreateRequest) => {
  const { createSupplier } = supplierController()
  return await createSupplier(data)
}

export const useSupplierService = () => {
  const getSuppliersService = async () => {

    try {
      const data = await getSuppliersData()
      return data != null ? data.data : new Array<SupplierResponse>()
    } catch {
      return new Array<SupplierResponse>()
    }
  }

  const postSupplierService = async (data: SupplierCreateRequest) => {
    try {
      const response = await postSupplier(data)
      return response
    } catch {
      return new Array<SupplierResponse>()
    }
  }

  return {
    getSuppliersService,
    postSupplierService,
  }
}
