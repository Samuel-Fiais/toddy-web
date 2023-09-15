import React from 'react'

type TableSkeletonProps = {
  amountColumns: number
}

export const TableSkeleton = ({ amountColumns }: TableSkeletonProps) => {
  return (
    <div className="w-full animate-pulse">
      <div className="mb-2 h-10 w-full rounded-lg bg-zinc-100 dark:bg-zinc-600"></div>
      <div className="flex w-full flex-row gap-2">
        {Array.from(Array(amountColumns).keys()).map((_, index) => (
          <div
            key={index}
            className={`flex h-10 flex-1 rounded-lg ${
              index % 2 == 0
                ? 'bg-zinc-100 dark:bg-zinc-600'
                : 'bg-zinc-400 dark:bg-zinc-800'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
