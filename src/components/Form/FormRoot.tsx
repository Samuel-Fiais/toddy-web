import React from 'react'

type FormRootProps = {
  children: React.ReactNode
}

export const FormRoot = ({ children }: FormRootProps) => {
  return <div className="relative my-4 flex flex-row gap-4">{children}</div>
}
