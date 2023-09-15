export const useUnmask = () => {
  const unmaskCNPJ = (cnpj: string) => {
    return cnpj.replace(/\D/g, '').substring(0, 14)
  }

  const unmaskPhone = (phone: string) => {
    const numericPhone = phone.replace(/\D/g, '')

    return numericPhone.length >= 11 ? numericPhone.substring(0, 11) : numericPhone
  }

  return {
    unmaskCNPJ,
    unmaskPhone,
  }
}
