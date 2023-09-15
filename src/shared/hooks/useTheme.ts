import { useState } from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [iconTheme, setIconTheme] = useState(faSun)

  const toggleTheme = () => {
    const html = document.getElementsByTagName('html')[0]
    const isDark = html.classList.contains('dark')

    if (isDark) {
      html.classList.remove('dark')
      html.classList.add('light')
      setTheme('light')
      setIconTheme(faSun)
    } else {
      html.classList.remove('light')
      html.classList.add('dark')
      setTheme('dark')
      setIconTheme(faMoon)
    }

    updateLocalStorage()
  }

  const updateLocalStorage = () => {
    localStorage.setItem('theme', theme)
  }

  const getLocalStorage = () => {
    const theme: 'dark' | 'light' =
      (localStorage.getItem('theme') as 'dark' | 'light' | null) ?? 'light'
    return theme
  }

  return {
    toggleTheme,
    getLocalStorage,
    theme,
    iconTheme,
  }
}
