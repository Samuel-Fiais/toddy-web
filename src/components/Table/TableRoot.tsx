import React from 'react'

type TableRootProps = {
  children: React.ReactNode
}

export const TableRoot = ({ children }: TableRootProps) => {
  return (
    <div className="h-full overflow-hidden rounded-lg">
      <table className="w-full">{children}</table>
    </div>
  )
}
