import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const badge = tv({
  base: 'px-3 py-1 rounded-lg',
  variants: {
    background: {
      primary:
        'bg-zinc-500 hover:bg-zinc-500/80 dark:bg-zinc-200 hover:dark:bg-zinc-200/80',
      secondary:
        'bg-zinc-400 hover:bg-zinc-400/80 dark:bg-zinc-300 hover:dark:bg-zinc-300/80',
      success:
        'bg-emerald-500 hover:bg-emerald-500/80 dark:bg-emerald-200 hover:dark:bg-emerald-200/80',
      danger:
        'bg-red-500 hover:bg-red-500/80 dark:bg-red-200 hover:dark:bg-red-200/80',
      warning:
        'bg-yellow-500 hover:bg-yellow-500/80 dark:bg-yellow-200 hover:dark:bg-yellow-200/80',
      info: 'bg-blue-500 hover:bg-blue-500/80 dark:bg-blue-200 hover:dark:bg-blue-200/80',
      light:
        'bg-gray-blue hover:bg-gray-blue/80 dark:bg-zinc-500 hover:dark:bg-zinc-500/80',
      semilight:
        'bg-zinc-200 hover:bg-zinc-500/80 dark:bg-zinc-200 hover:dark:bg-zinc-200/80',
      dark: 'bg-zinc-700 hover:bg-zinc-700/80 dark:bg-400-200 hover:dark:bg-zinc-500/80',
    },
  },
})

type BadgeRootProps = ComponentProps<'div'> &
  VariantProps<typeof badge> &
  VariantProps<typeof badge> & {
    children: React.ReactNode
    className?: string
  }

export const BadgeRoot = ({
  className,
  children,
  background,
  ...props
}: BadgeRootProps) => {
  return (
    <div className={`${badge({ background })} ${className}`} {...props}>
      {children}
    </div>
  )
}
