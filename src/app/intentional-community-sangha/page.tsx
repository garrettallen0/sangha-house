import VennBubbles from '@/components/VennBubbles'

export default function StartSangha() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Intentional Community Sangha
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are co-organizing a virtual sangha for those living in engaged Buddhist intentional community.
        </p>
        <a
          href="https://forms.gle/1nnXDZWQFMJbpHkPA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          <h2 className="text-lg font-semibold sm:text-xl">Register your interest!</h2>
        </a>
        <p className="mt-3 max-w-xl mx-auto text-base leading-relaxed text-gray-600">
          We&apos;ll be in touch about the date and time of our first meeting.
        </p>
        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-12 lg:flex-row lg:items-center lg:gap-12">
          <div className="order-2 w-full shrink-0 lg:order-1 lg:w-5/12 lg:max-w-sm">
            <VennBubbles />
          </div>
          <div className="order-1 w-full text-center italic lg:order-2 lg:w-7/12 lg:text-left">
            <p className="text-lg leading-8 text-gray-600">
              Intentional Community Sangha will be a place to: 
            </p>
            <ul className="mt-4 mx-auto max-w-2xl list-disc space-y-2 pl-6 text-left text-lg leading-8 text-gray-600 lg:mx-0">
              <li>Gather and create community around lay intentional community</li>
              <li>Share about the joys and challenges of living in community</li>
              <li>Pool knowledge, resources, and inspiration</li>
              <li>
                Dream up structures for supporting lay intentional communities in the engaged Buddhist ecosystem
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-12">
        {/* Content sections will go here */}
      </div>
    </div>
  )
} 