type BodyRootProps = {
  children: React.ReactNode
  namePage?: string
  toggleMenu: (state?: boolean) => void
}

export default function BodyRoot({
  children,
  namePage = '',
  toggleMenu,
}: BodyRootProps) {
  return (
    <div
      className={`flex h-full w-2/3 flex-col rounded-xl bg-white p-7 shadow-zinc-300 transition-all duration-200 dark:bg-zinc-700 dark:shadow-zinc-800 md:flex-1`}
    >
      <div className="flex flex-row items-center text-zinc-700/60 lg:text-zinc-700">
        <div className="static flex w-full lg:hidden">
          <div
            className="flex h-5 w-7 cursor-pointer flex-col gap-1"
            onClick={() => toggleMenu()}
          >
            <div className="h-full w-full rounded-full bg-zinc-700/60 dark:bg-zinc-300/60" />
            <div className="h-full w-full rounded-full bg-zinc-700/60 dark:bg-zinc-300/60" />
            <div className="h-full w-full rounded-full bg-zinc-700/60 dark:bg-zinc-300/60" />
          </div>
        </div>

        <h1 className="w-full text-xl font-medium text-zinc-500 dark:text-zinc-200 lg:text-2xl">
          {namePage}
        </h1>
      </div>

      <div className="my-5 h-1 w-full rounded-full bg-teal-600" />
      {children}
    </div>
  )
}
