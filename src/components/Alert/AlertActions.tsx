import React from 'react'

type AlertActionsProps = {
  children: React.ReactNode
}

export const AlertActions = ({ children }: AlertActionsProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      {children}
    </div>
  )
}
