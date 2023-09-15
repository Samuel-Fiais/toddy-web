type ButtonTextProps = {
  text: string
}

export const ButtonText = ({ text }: ButtonTextProps) => {
  return <span className="font-semibold">{text}</span>
}
