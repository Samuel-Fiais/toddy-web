import { useMask } from "@/shared/hooks/useMask";

const { maskCNPJ, maskPhone } = useMask();

export class SupplierCreateRequest {
  document: string = '';
  tradeName: string = '';
  companyName: string = '';
  phone: string = '';
  email: string = '';
}

export const validateSupplierCreateRequest = (model: SupplierCreateRequest) => {
  const errors: string[] = [];

  const fieldsToValidate = [
    {
      name: 'document',
      errorMessage: 'CNPJ não informado ou inválido!\n',
      validator: (value: string) => value.length === 14,
    },
    {
      name: 'tradeName',
      errorMessage: 'Nome fantasia não informado!\n',
      validator: (value: string) => !!value,
    },
    {
      name: 'companyName',
      errorMessage: 'Razão social não informada!\n',
      validator: (value: string) => !!value,
    },
    {
      name: 'phone',
      errorMessage: 'Telefone não informado ou inválido!\n',
      validator: (value: string) => value.length === 11 || value.length === 10,
    },
    {
      name: 'email',
      errorMessage: 'Email não informado ou inválido!\n',
      validator: (value: string) => value.indexOf('@') !== -1,
    },
  ];

  fieldsToValidate.forEach((field) => {
    const fieldValue = (model as any)[field.name];
    if (!field.validator(fieldValue)) {
      console.log(fieldValue)
      errors.push(field.errorMessage);
    }
  });

  return errors;
};
