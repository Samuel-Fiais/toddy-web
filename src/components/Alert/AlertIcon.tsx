import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const alertColors = tv({
  base: '!h-28 !w-28',
  variants: {
    type: {
      success: 'text-emerald-500',
      error: 'text-red-500',
      warning: 'text-yellow-500',
      info: 'text-blue-500',
    },
  },
})

type AlertIconProps = VariantProps<typeof alertColors> & {
  iconAlert: IconDefinition
}

export const AlertIcon = ({ iconAlert, type }: AlertIconProps) => {
  return (
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={iconAlert} className={alertColors({ type })} />
    </div>
  )
}
