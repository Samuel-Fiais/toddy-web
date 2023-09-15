import React from 'react'

type TableBodyRoot = {
  children: React.ReactNode
}

export const TableBody = ({ children }: TableBodyRoot) => {
  return <tbody className="">{children}</tbody>
}
