export const useKey = () => {
  const handleKeyPress = (callback: () => void, key: string = 'Enter') => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback()
      }
    }

    addEventListener('keydown', handleKeyPress)

    return () => {
      removeEventListener('keydown', handleKeyPress)
    }
  }

  return {
    handleKeyPress,
  }
}
