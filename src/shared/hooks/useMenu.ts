'use client'

import { useState } from 'react'

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (state?: boolean) => {
    if (state !== undefined) setIsMenuOpen(state)
    else setIsMenuOpen((prev) => !prev)
  }

  return {
    isMenuOpen,
    toggleMenu,
  }
}
