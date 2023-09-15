import { OptionSelectCommon } from '@/core/models/common/OptionSelectCommon'
import { TypeFilterCommon } from '@/core/models/common/TypeFilterCommon'

export const itemsPerPage = 13

export const columnsSupplier = [
  {
    key: 'alternateId',
    value: 'ID',
  },
  {
    key: 'document',
    value: 'Documento',
  },
  {
    key: 'companyName',
    value: 'Razão Social',
  },
  {
    key: 'tradeName',
    value: 'Nome Fantasia',
  },
  {
    key: 'phone',
    value: 'Telefone',
  },
  {
    key: 'email',
    value: 'Email',
  },
  {
    key: 'createdAt',
    value: 'Criação',
  },
  // {
  //   key: '',
  //   value: '',
  // },
]

export const filtersSupplier: OptionSelectCommon[] = [
  {
    value: 'alternateId',
    text: 'ID',
    type: 'number',
  },
  {
    value: 'document',
    text: 'Documento',
    type: 'text',
  },
  {
    value: 'companyName',
    text: 'Razão Social',
    type: 'text',
  },
  {
    value: 'tradeName',
    text: 'Nome Fantasia',
    type: 'text',
  },
  {
    value: 'phone',
    text: 'Telefone',
    type: 'text',
  },
  {
    value: 'email',
    text: 'Email',
    type: 'text',
  },
  {
    value: 'createdAt',
    text: 'Criação',
    type: 'date',
  },
]

export const typeFilters: TypeFilterCommon[] = [
  // Filtros do tipo text são, começa com, terminal com, contém
  {
    value: 'starts',
    text: 'Começa com',
    type: 'text',
  },
  {
    value: 'ends',
    text: 'Termina com',
    type: 'text',
  },
  {
    value: 'contains',
    text: 'Contém',
    type: 'text',
  },
  // Filtros do tipo número são maior que, menor que, entre e igual a
  {
    value: 'greater',
    text: 'Maior que',
    type: 'number',
  },
  {
    value: 'less',
    text: 'Menor que',
    type: 'number',
  },
  {
    value: 'equal',
    text: 'Igual a',
    type: 'number',
  },
  // Filtros do tipo data são maior que, menor que, entre e igual a
  {
    value: 'greater',
    text: 'Maior que',
    type: 'date',
  },
  {
    value: 'less',
    text: 'Menor que',
    type: 'date',
  },
  {
    value: 'equal',
    text: 'Igual a',
    type: 'date',
  },
  // Filtros do tipo boolean são verdadeiro e falso
  {
    value: 'true',
    text: 'Verdadeiro',
    type: 'boolean',
  },
  {
    value: 'false',
    text: 'Falso',
    type: 'boolean',
  },
]
