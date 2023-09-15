import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const modal = tv({
  base: `rounded-lg bg-white dark:bg-zinc-700 px-5 py-3 shadow-md`,
  variants: {
    size: {
      small: 'w-64 h-48',
      'extra-medium': 'w-96 h-64',
      medium: 'w-1/2 h-1/2',
      large: 'w-2/3 h-2/3',
      full: 'w-full h-full rounded-none',
      auto: 'w-auto h-auto',
      'h-auto': 'w-1/2 h-auto',
    },
  },
  defaultVariants: {
    size: 'large',
  },
})

type ModalRootProps = VariantProps<typeof modal> & {
  title?: string
  visible?: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const ModalRoot = ({
  title,
  size,
  setVisible,
  visible = true,
  children,
}: ModalRootProps) => {
  const handleVisibleModal = () => setVisible(!visible)

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.classList.contains('modalClose')) {
      handleVisibleModal()
    }
  }

  return (
    <div
      className={`modalClose fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 transition-all duration-300 dark:bg-zinc-500 dark:bg-opacity-25 ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={handleCloseModal}
    >
      <div className={modal({ size })}>
        <div className="mb-4 flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold uppercase tracking-wider">
            {title}
          </h1>
          <div
            className="cursor-pointer text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
            onClick={handleCloseModal}
          >
            <FontAwesomeIcon icon={faTimes} className="modalClose" />
          </div>
        </div>
        <div className="my-3 mb-4 h-0.5 w-full rounded-full bg-zinc-200 shadow-md dark:bg-zinc-500" />
        <div className="h-full w-full break-words pb-4">{children}</div>
      </div>
    </div>
  )
}
