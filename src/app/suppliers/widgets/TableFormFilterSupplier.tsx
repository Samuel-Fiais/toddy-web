import { Button } from '@/components/Button'
import { Form } from '@/components/Form'

import { OptionSelectCommon } from '@/core/models/common/OptionSelectCommon'
import { FilterTableForm } from '@/core/models/forms/FilterTableForm'

import { filtersSupplier, typeFilters } from '@/utils/contants/constants'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type TableFormFilterSupplierProps = {
  formFilter: FilterTableForm
  setFormFilter: (formFilter: FilterTableForm) => void
}

export const TableFormFilterSupplier = ({
  formFilter,
  setFormFilter,
}: TableFormFilterSupplierProps) => {
  return (
    <div className="flex h-full w-full flex-row gap-3">
      <div className="flex gap-3">
        <Form.Select
          label="Coluna"
          options={filtersSupplier}
          form="fixed"
          valueSelected={formFilter.column}
          setValueSelected={(option: OptionSelectCommon) => {
            setFormFilter({ ...formFilter, column: option })
          }}
        />
        <Form.Select
          label="Operação"
          options={typeFilters.filter((f) => f.type === formFilter.column.type)}
          form="fixed"
          valueSelected={formFilter.operation}
          setValueSelected={(option: OptionSelectCommon) => {
            setFormFilter({ ...formFilter, operation: option })
          }}
        />
        <Form.Input
          label="Valor"
          form="fixed"
          inputValue={formFilter.value}
          setInputValue={(value: string) => {
            setFormFilter({ ...formFilter, value })
          }}
          inputType={formFilter.column.type}
        />
        <Button.Root
          fill="primary"
          size="auto"
          onClick={() => {
            setFormFilter(new FilterTableForm())
          }}
        >
          <Button.Icon icon={faEraser} />
        </Button.Root>
      </div>
    </div>
  )
}
