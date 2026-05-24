import VennBubbles from '@/components/VennBubbles'

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

        <VennBubbles />
      </div>

      <div className="mt-16 space-y-12">
        {/* Content sections will go here */}
      </div>
    </div>
  )
} 