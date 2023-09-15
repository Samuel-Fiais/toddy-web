import React, { ComponentProps } from 'react'

type TableColumnProps = ComponentProps<'th'> & {
  key: number
  column: string
  width?: string
}

export const TableColumn = ({
  key,
  column,
  width = '',
  ...props
}: TableColumnProps) => {
  return (
    <th
      key={key}
      className={`cursor-pointer px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-500 hover:bg-zinc-100/60 dark:text-zinc-300 hover:dark:bg-zinc-500/60 ${width}`}
      {...props}
    >
      <div className="flex flex-row items-center justify-between">
        <span>{column}</span>
      </div>
    </th>
  )
}
