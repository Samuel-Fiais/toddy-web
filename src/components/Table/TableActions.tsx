import React from 'react'

type TableActionsProps = {
  children: React.ReactNode
}

export const TableActions = ({ children }: TableActionsProps) => {
  return (
    <div className="mb-5 flex w-full items-center justify-start gap-3">
      {children}
    </div>
  )
}
