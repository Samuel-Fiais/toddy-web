import React, { ComponentProps, useEffect, useRef, useState } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'flex flex-col relative cursor-pointer border-0 rounded-lg',
  variants: {
    form: {
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '2/3': 'w-2/3',
      '1/4': 'w-1/4',
      '3/4': 'w-3/4',
      full: 'w-full',
      fixed: 'w-56',
    },
  },
  defaultVariants: {
    form: '1/3',
  },
})

type FormInputProps = VariantProps<typeof input> & ComponentProps<'input'> & {
  label: string
  inputValue: string
  setInputValue: (value: string) => void
  inputType?: 'text' | 'number' | 'boolean' | 'date' // Add more types as needed
  disabled?: boolean // Adicione a propriedade "disabled"
}

export const FormInput = ({
  label,
  inputValue,
  setInputValue,
  inputType = 'text', // Default to text input type
  form,
  disabled = false, // Defina a propriedade "disabled" com valor padrão false
  ...props
}: FormInputProps) => {
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    if (value === undefined || value.trim() === '') value = ''
    setInputValue(value)
  }

  const handleInputFocus = () => {
    setFocused(true)
  }

  const handleInputBlur = () => {
    setFocused(false)
  }

  useEffect(() => {
    console.log('Render')
  }, [])

  useEffect(() => {
    if (inputRef.current && focused) {
      inputRef.current.focus()
    }
  }, [focused])

  return (
    <div className={input({ form })}>
      <div
        className={`flex h-10 items-center justify-between ${
          disabled ? ' cursor-default opacity-75' : '' // Adicione a classe "disabled" condicionalmente
        }`}
      >
        <div
          className={`absolute left-3 cursor-text bg-white font-semibold dark:bg-zinc-700 ${
            focused || inputValue !== '' || inputType == 'date'
              ? '-top-2.5 px-2 text-sm text-zinc-600 dark:text-zinc-50'
              : 'text-md top-2 text-zinc-400'
          } transition-all duration-100`}
          onClick={() => {
            inputRef.current?.focus()
          }}
        >
          {label}
        </div>
        <input
          ref={inputRef}
          className={`h-full w-full rounded-lg border-zinc-300 bg-white focus:border-teal-700 focus:ring-0 dark:border-zinc-500 dark:bg-zinc-700 dark:focus:border-teal-600`}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          title={inputValue}
          type={
            inputType == 'boolean' || inputType == 'text' ? 'text' : inputType
          }
          disabled={disabled} // Defina a propriedade "disabled" com base na propriedade passada
          {...props}
        />
      </div>
    </div>
  )
}
