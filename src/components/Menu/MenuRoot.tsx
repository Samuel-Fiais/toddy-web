import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type MenuRootProps = {
  children: React.ReactNode
  toggleMenu: (state?: boolean) => void
  isMenuOpen?: boolean
}

export default function MenuRoot({
  children,
  toggleMenu,
  isMenuOpen = true,
}: MenuRootProps) {
  return (
    <div
      onMouseOver={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}
      className={`absolute left-0 top-0 h-full flex-col items-center justify-between gap-1 bg-zinc-100 p-4 shadow-zinc-200 transition-all duration-500 dark:bg-zinc-700 dark:shadow-zinc-800 lg:static lg:flex lg:rounded-xl lg:bg-white lg:p-7 lg:px-2 lg:dark:bg-zinc-700 ${
        isMenuOpen ? 'w-full lg:w-56' : 'hidden lg:w-20'
      }`}
    >
      <div className="flex w-full justify-end py-2 lg:hidden">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="h-5 w-5"
          onClick={() => toggleMenu()}
        />
      </div>
      {children}
    </div>
  )
}
