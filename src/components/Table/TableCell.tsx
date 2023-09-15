import React, { ComponentProps } from 'react'

type TableCellProps = ComponentProps<'td'> & {
  value: string | number | React.ReactNode
  width?: string
}

export const TableCell = ({ value, width = '', ...props }: TableCellProps) => {
  return (
    <>
      <td
        className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-300 ${width}`}
        {...props}
      >
        {value}
      </td>
    </>
  )
}
