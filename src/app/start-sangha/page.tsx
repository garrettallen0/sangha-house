const pillars = [
  { label: 'living in community', size: 'h-40 w-40 sm:h-44 sm:w-44' },
  { label: 'organizing social action', size: 'h-44 w-44 sm:h-48 sm:w-48' },
  { label: 'grounded in spiritual practice', size: 'h-48 w-48 sm:h-52 sm:w-52' },
] as const

export default function StartSangha() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Intentional Community Sangha
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are co-organizing an sangha for those living in engaged Buddhist intentional community.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is a place to
        </p>
        <ul className="mt-4 mx-auto max-w-2xl text-left text-lg leading-8 text-gray-600 list-disc pl-6 space-y-2">
          <li>Gather and create community around lay intentional community</li>
          <li>Share about the joys and challenges of living in community</li>
          <li>Pool knowledge, resources, and inspiration</li>
          <li>
            Dream up structures for supporting lay intentional communities in the Plum Village ecosystem
          </li>
        </ul>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-10 list-none p-0">
          {pillars.map(({ label, size }) => (
            <li key={label}>
              <div
                className={`${size} flex items-center justify-center rounded-full border-2 border-indigo-300/80 bg-white/60 px-4 shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md`}
              >
                <span className="text-center text-sm font-medium leading-snug text-indigo-900 sm:text-base">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 space-y-12">
        {/* Content sections will go here */}
      </div>
    </div>
  )
} 