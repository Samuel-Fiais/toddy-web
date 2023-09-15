import { Button } from '@/components/Button'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type TableButtonActionsSupplier = {
  onAddSupplierClick: (state: boolean) => void
}

export const TableButtonActionsSupplier = ({
  onAddSupplierClick,
}: TableButtonActionsSupplier) => {
  return (
    <div className="">
      <Button.Root fill="primary" onClick={() => onAddSupplierClick(true)}>
        <Button.Icon icon={faPlus} />
        <Button.Text text="Novo" />
      </Button.Root>
    </div>
  )
}
