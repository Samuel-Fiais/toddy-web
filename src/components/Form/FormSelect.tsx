import React, { ComponentProps, useEffect, useRef, useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VariantProps, tv } from 'tailwind-variants'

import { OptionSelectCommon } from '@/core/models/common/OptionSelectCommon'

const select = tv({
  base: 'flex flex-col relative cursor-pointer',
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

type FormSelectProps = {
  label: string
  options: OptionSelectCommon[]
  valueSelected?: OptionSelectCommon
  setValueSelected?: (option: OptionSelectCommon) => void
  disabled?: boolean // Adicione a propriedade "disabled"
} & ComponentProps<'div'>  & 
  VariantProps<typeof select>

export const FormSelect = ({
  label,
  options,
  valueSelected,
  setValueSelected,
  form,
  disabled = false, // Defina a propriedade "disabled" com valor padrão false
  ...props
}: FormSelectProps) => {
  const [visibleOptions, setVisibleOptions] = useState(false)
  const optionsRef = useRef<HTMLDivElement | null>(null)
  const selectorRef = useRef<HTMLDivElement | null>(null)

  const handleVisibleOptions = () => {
    if (!disabled) {
      setVisibleOptions((prevVisibleOptions) => !prevVisibleOptions)
    }
  }

  const handleSelected = (option: OptionSelectCommon) => {
    setVisibleOptions(false)
    if (setValueSelected) setValueSelected(option)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node) &&
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node)
    ) {
      setVisibleOptions(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={select({ form })}>
      <div
        ref={selectorRef}
        className={`flex h-10 items-center justify-between rounded-lg border-2 bg-white px-2 transition-all duration-100 dark:border-zinc-500 dark:bg-zinc-700 ${
          visibleOptions
            ? 'border-2 border-teal-700 dark:border-teal-600'
            : 'border-zinc-300 dark:border-zinc-500'
        } ${disabled ? 'cursor-default opacity-75' : ''}`}
        onClick={handleVisibleOptions}
        {...props}
      >
        <div
          className={`absolute bg-white font-semibold dark:bg-zinc-700 ${
            valueSelected?.value !== undefined || visibleOptions
              ? '-top-2.5 px-2 text-sm text-zinc-600 dark:text-zinc-50'
              : 'text-md top-2 text-zinc-400'
          } transition-all duration-100`}
        >
          {label}
        </div>

        <span>{valueSelected?.value == null ? ' ' : valueSelected.text}</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transform ${
            visibleOptions ? 'rotate-180' : 'rotate-0'
          } transition-all duration-200`}
        />
      </div>
      <div
        ref={optionsRef}
        className={`absolute z-0 mt-12 w-full overflow-auto rounded-lg border-2 border-zinc-300 bg-white p-2 shadow-md transition-all duration-300 dark:border-zinc-500 dark:bg-zinc-700 ${
          visibleOptions
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        } `}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelected(option)}
            className={`flex items-center rounded-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-600`}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  )
}
