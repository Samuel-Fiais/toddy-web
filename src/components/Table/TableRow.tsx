import React from 'react'

type TableRowProps = {
  index: number
  children: React.ReactNode
}

export const TableRow = ({ index, children }: TableRowProps) => {
  return (
    <>
      <tr className="h-3" />
      <tr
        className={`cursor-pointer rounded-lg bg-zinc-200/60 transition-all duration-75 hover:bg-teal-300
          active:bg-teal-300/70 dark:bg-zinc-600 hover:dark:bg-teal-600 active:dark:bg-teal-600/70`}
      >
        {children}
      </tr>
    </>
  )
}
