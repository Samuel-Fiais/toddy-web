import React from 'react'

type TableHeadProps = {
  children: React.ReactNode
}

export const TableHead = ({ children }: TableHeadProps) => {
  return (
    <>
      <thead>
        <tr className="rounded-lg border-4 border-zinc-200/60 dark:border-zinc-600/60">
          {children}
        </tr>
      </thead>
    </>
  )
}
