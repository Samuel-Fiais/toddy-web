import React from 'react'
import page from '@/app/page'

type TablePaginateProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const TablePaginate = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}: TablePaginateProps) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage)
  if (isNaN(numberOfPages)) return null
  const pages = Array.from(Array(numberOfPages).keys())

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="mt-3 flex w-full justify-end">
      <nav>
        <ul className="flex h-10 items-center gap-1 -space-x-px text-base">
          <li>
            <a
              href="#"
              className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-zinc-300 bg-white px-4 leading-tight text-zinc-500 shadow-sm hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-500 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-white"
              onClick={handlePreviousPage}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {pages.map((page) => (
            <li>
              <a
                href="#"
                className={`flex h-10 w-10 items-center justify-center border border-zinc-300 bg-white px-4 leading-tight text-zinc-500 shadow-sm hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-500 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-white ${
                  currentPage === page ? 'bg-zinc-100 dark:bg-zinc-700' : ''
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex h-10 items-center justify-center rounded-r-lg border border-zinc-300 bg-white px-4 leading-tight text-zinc-500 shadow-sm hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-500 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-white"
              onClick={handleNextPage}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
