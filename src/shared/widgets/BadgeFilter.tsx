import { Badge } from '@/components/Badge'
import React from 'react'

type BadgeFilterProps = {
  column: string
  operation: string
  value: string
  deleteFilter: () => void
}

export const BadgeFilter = ({
  column,
  operation,
  value,
  deleteFilter,
}: BadgeFilterProps) => {
  return (
    <Badge.Root
      className="flex w-max cursor-pointer flex-row items-center gap-3"
      onClick={deleteFilter}
      background="light"
    >
      <span className="whitespace-nowrap text-xs font-semibold">{column}</span>
      <span className="text-xs">{operation}</span>
      <div className="rounded-lg bg-black bg-opacity-25 px-2">
        <span className="break-normal text-xs font-semibold">{value}</span>
      </div>
    </Badge.Root>
  )
}
