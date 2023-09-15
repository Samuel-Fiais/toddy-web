import { tv, VariantProps } from 'tailwind-variants'
import { ComponentProps, useEffect, useState } from 'react'
import { Spinner } from '../Spinner/Spinner'

const button = tv({
  base: 'px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-200',
  variants: {
    size: {
      sm: 'text-sm w-16 h-10 flex-wrap gap-1',
      md: 'text-md w-32 h-10 gap-4',
      lg: 'text-md w-48 h-10 gap-4',
      full: 'w-full text-md h-10 gap-6',
      auto: 'w-auto h-auto h-10',
    },
    fill: {
      primary: 'text-white bg-teal-600 hover:bg-teal-600/80 active:bg-teal-600',
      secondary:
        'text-white bg-zinc-500 hover:bg-zinc-500/80 active:bg-zinc-500',
      success:
        'text-white bg-emerald-500 hover:bg-emerald-500/80 active:bg-emerald-500',
      cancel: 'text-white bg-red-500 hover:bg-red-500/80 active:bg-red-500',
      info: 'text-white bg-blue-500 hover:bg-blue-500/80 active:bg-blue-500',
      warning: 'text-white bg-blue-500 hover:bg-blue-500/80 active:bg-blue-500',
    },
    gradient: {
      primary:
        'text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-600/80 active:bg-gradient-to-r active:from-blue-700 active:to-blue-500',
      secondary:
        'text-white bg-gradient-to-r from-zinc-600 to-zinc-500 hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-600/80 active:bg-gradient-to-r active:from-zinc-600 active:to-zinc-500',
      success:
        'text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600/80 active:bg-gradient-to-r active:from-emerald-600 active:to-emerald-500',
      cancel:
        'text-white bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600/80 active:bg-gradient-to-r active:from-red-600 active:to-red-500',
      info: 'text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500/80 active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500',
      warning:
        'text-white bg-gradient-to-r from-teal-600 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-600/80 active:bg-gradient-to-r active:from-teal-600 active:to-blue-500',
    },
    text: {
      primary:
        'text-teal-600 hover:text-blue-700 active:text-teal-600 shadow-none',
      secondary:
        'text-zinc-500 hover:text-zinc-600 active:text-zinc-500 shadow-none',
      success:
        'text-emerald-500 hover:text-emerald-600 active:text-emerald-500 shadow-none',
      cancel: 'text-red-500 hover:text-red-600 active:text-red-500 shadow-none',
      info: 'text-blue-500 hover:text-teal-600 active:text-blue-500 shadow-none',
      warning:
        'text-blue-500 hover:text-teal-600 active:text-blue-500 shadow-none',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

type ButtonRootProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    isLoading?: boolean
  }

export const ButtonRoot = ({
  size,
  fill,
  gradient,
  text,
  isLoading = false,
  disabled = false, // Adicione uma propriedade "disabled"
  ...props
}: ButtonRootProps) => {
  let [click, setClick] = useState(false)

  // Crie uma classe condicional para o botão desabilitado
  const disabledClass = disabled ? 'opacity-60' : ''

  return (
    <>
      <button
        className={button({ size, fill, gradient, text }) + ' ' + disabledClass} // Adicione a classe "disabled" condicionalmente
        {...props}
        disabled={disabled} // Defina a propriedade "disabled" com base na propriedade passada
      >
        {isLoading ? <Spinner /> : props.children}
      </button>
    </>
  )
}
