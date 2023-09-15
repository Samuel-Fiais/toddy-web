import { useAppSelector } from '@/redux/store'

export const useStore = () => {
  const suppliers = useAppSelector((state) => state.supplier.data)

  return {
    suppliers,
  }
}
