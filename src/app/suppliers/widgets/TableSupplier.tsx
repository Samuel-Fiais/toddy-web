'use client'

import { Table } from '@/components/Table'
import { TableActionsSupplier } from './TableActionsSuppliers'

import React, { useEffect, useState } from 'react'
import useFilter from '@/shared/hooks/useFilterTable'
import { useSupplierService } from '@/shared/hooks/services/useSupplierService'
import { useMask } from '@/shared/hooks/useMask'
import { useUtils } from '@/shared/hooks/useUtils'
import { useSort } from '@/shared/hooks/useSort'

import { SupplierResponse } from '@/core/models/response/SupplierResponse'
import { useAppSelector } from '@/core/redux/store'

import { columnsSupplier, itemsPerPage } from '@/utils/contants/constants'
import { useDispatch } from 'react-redux'
import { setSuppliers } from '@/core/redux/supplier/slice'

const { maskPhone, maskCNPJ, maskDate } = useMask()
const { chunk } = useUtils()
const { getSuppliersService } = useSupplierService()

export const TableSupplier = () => {
  const { sortArray, handleSort, sortedColumn, sortOrder } = useSort()

  const dispatch = useDispatch()
  const filters = useAppSelector((state) => state.filterSupplier)
  const supplierRedux = useAppSelector((state) => state.supplier)

  const [suppliersPaginate, setSuppliersPaginate] = useState<
    SupplierResponse[][]
  >([])
  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState<SupplierResponse[]>(new Array<SupplierResponse>())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    const fetchData = async () => {
      try {
        const response = await getSuppliersService()
        const newData = response
  
        if (newData != null && newData.length > 0) {
          let suppliers = [...newData]
          setData(suppliers)
          if (JSON.stringify(suppliers) !== JSON.stringify(supplierRedux.data)) {
            dispatch(setSuppliers(suppliers))
          }
          suppliers = useFilter(
            sortArray<SupplierResponse>(newData),
            filters.data
          )
          setSuppliersPaginate(chunk(suppliers, itemsPerPage))
          setIsLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    };
  
    fetchData();
  
  }, [supplierRedux.data])

  useEffect(() => {
    const suppliers = useFilter(
      sortArray<SupplierResponse>(data),
      filters.data,
    )
    setSuppliersPaginate(chunk(suppliers, itemsPerPage))
  }, [sortedColumn, sortOrder, filters.data, supplierRedux.data, currentPage])

  return (
    <>
      <TableActionsSupplier />
      {!isLoading ? (
        <>
          <Table.Root>
            <Table.Head>
              {columnsSupplier.map((column, index) => (
                <Table.Column
                  key={index}
                  column={column.value}
                  onClick={() => handleSort(column.key)}
                />
              ))}
            </Table.Head>
            <Table.Body>
              {suppliersPaginate[currentPage] != null &&
              suppliersPaginate[currentPage].length > 0 ? (
                suppliersPaginate[currentPage].map((supplier, index) => (
                  <Table.Row key={supplier.id} index={index}>
                    <Table.Cell value={supplier.alternateId} />
                    <Table.Cell value={maskCNPJ(supplier.document)} />
                    <Table.Cell value={supplier.companyName} />
                    <Table.Cell value={supplier.tradeName} />
                    <Table.Cell value={maskPhone(supplier.phone)} />
                    <Table.Cell value={supplier.email} />
                    <Table.Cell value={maskDate(supplier.createdAt)} />
                  </Table.Row>
                ))
              ) : (
                <Table.Row index={0}>
                  <Table.Cell
                    colSpan={columnsSupplier.length}
                    value="Nenhum dado disponível."
                  />
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
          <Table.Paginate
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={suppliersPaginate.reduce(
              (acc, curr) => acc + curr.length,
              0,
            )}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <Table.Skeleton amountColumns={columnsSupplier.length} />
      )}
    </>
  )
}
