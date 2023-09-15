import { companyInfoResponse } from "@/core/controllers/companyInfoController"
import { CompanyInfoResponse } from "@/core/models/response/CompanyInfoResponse"
import { ResponseBase } from "@/core/models/response/ResponseBase"

const getCompanyInfo = async (cnpj: string) => {
	const { getCompanyInfo } = companyInfoResponse()
	return await getCompanyInfo(cnpj)
}

export const useCompanyInfoService = () => {
	const getCompanyInfoService = async (cnpj: string) => {
		try {
			const data = await getCompanyInfo(cnpj)
			return data
		} catch {
			return new ResponseBase<CompanyInfoResponse>()
		}
	}

	return {
		getCompanyInfoService,
	}
}