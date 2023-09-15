import api from '@/shared/helpers/api'
import { ResponseBase } from '../models/response/ResponseBase'
import { CompanyInfoResponse } from '../models/response/CompanyInfoResponse'

export const companyInfoResponse = () => {
  const getCompanyInfo = async (cnpj: string) => {
    const response: ResponseBase<CompanyInfoResponse> = (
      await api.get(`/company-info/${cnpj}`)
    ).data
    return response
  }

  return {
    getCompanyInfo,
  }
}
