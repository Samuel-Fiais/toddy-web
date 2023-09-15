import React from 'react'

type AlertTitleProps = {
  title: string
}

export const AlertTitle = ({ title }: AlertTitleProps) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold tracking-wider">{title}</h1>
    </div>
  )
}
