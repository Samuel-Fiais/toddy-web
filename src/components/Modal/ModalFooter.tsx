import React from 'react'

type ModalFooterProps = {
  children: React.ReactNode
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="flex h-full w-full items-center justify-end gap-3">
      {children}
    </div>
  )
}
