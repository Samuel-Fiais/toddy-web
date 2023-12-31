export const useUtils = () => {
  const chunk = <T>(arr: T[], size: number): T[][] => {
    if (!arr?.length) return []
    const chunks: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }

  return {
    chunk,
  }
}
