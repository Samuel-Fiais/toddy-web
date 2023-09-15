import React from 'react'

type AlertRootProps = {
  visible?: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const AlertRoot = ({
  visible = false,
  setVisible,
  children,
}: AlertRootProps) => {
  const handleVisibleModal = () => setVisible(!visible)

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.classList.contains('modalClose')) {
      handleVisibleModal()
    }
  }

  return (
    <div
      className={`modalClose fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-25 transition-all duration-300 dark:bg-zinc-500 dark:bg-opacity-25 ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={handleCloseModal}
    >
      <div className="flex h-auto w-1/3 flex-col items-center justify-center gap-5 rounded-lg bg-white p-10 shadow-md dark:bg-zinc-700">
        {children}
      </div>
    </div>
  )
}
