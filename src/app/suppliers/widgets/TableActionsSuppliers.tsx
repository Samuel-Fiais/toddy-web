import { Table } from '@/components/Table'

import { FilterTableForm } from '@/core/models/forms/FilterTableForm'
import { OptionSelectCommon } from '@/core/models/common/OptionSelectCommon'
import { FilterTableCommon } from '@/core/models/common/FilterTableCommon'
import { setFilterSuppliers } from '@/core/redux/filterSupplier/slice'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TableFormFilterSupplier } from './TableFormFilterSupplier'
import { TableButtonActionsSupplier } from './TableButtonActionsSupplier'
import { ModalCreateSupplier } from './ModalCreateSupplier'

export const TableActionsSupplier = () => {
  const dispatch = useDispatch()
  const [modalCreateSupplierVisible, setModalCreateSupplierVisible] =
    useState(false)
  const [formFilter, setFormFilter] = useState<FilterTableForm>(
    new FilterTableForm(),
  )

  useEffect(() => {
    setFormFilter({
      ...formFilter,
      operation: new OptionSelectCommon(),
      value: '',
    })
  }, [formFilter?.column])

  useEffect(() => {
    const newFilter = new FilterTableCommon(formFilter)

    if (newFilter.value === '') dispatch(setFilterSuppliers([]))
    else dispatch(setFilterSuppliers([newFilter]))
  }, [formFilter])

  return (
    <>
      <Table.Actions>
        <TableFormFilterSupplier
          formFilter={formFilter}
          setFormFilter={setFormFilter}
        />
        <TableButtonActionsSupplier
          onAddSupplierClick={setModalCreateSupplierVisible}
        />
      </Table.Actions>
      <ModalCreateSupplier
        modalCreateSupplierVisible={modalCreateSupplierVisible}
        setModalCreateSupplierVisible={setModalCreateSupplierVisible}
      />
    </>
  )
}
