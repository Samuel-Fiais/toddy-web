export const useMask = () => {
  const maskPhone = (phone: string) => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const maskCNPJ = (cnpj: string) => {
    return cnpj
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  const maskDate = (date: string) => {
    const convertDate = new Date(date)

    const day = String(convertDate.getDate()).padStart(2, '0')
    const month = String(convertDate.getMonth() + 1).padStart(2, '0')
    const year = String(convertDate.getFullYear())

    return `${day}/${month}/${year}`
  }

  return {
    maskPhone,
    maskCNPJ,
    maskDate,
  }
}
