import Link from 'next/link'
import Featured from '@/components/Featured'
import HomePageCarousel from '@/components/HomePageCarousel'
import { getHomepageImages } from '@/sanity/lib/queries'

export default async function Home() {
  const homepageImages = await getHomepageImages()

  return (
    <>
      {/* Heading */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-6">
          Sangha House LA
        </h1>
      </section>

      {/* Subtitle Text */}
      <section className="text-center">
        <p className="text-lg leading-8 text-gray-600 max-w-xs mx-auto">
          <span className="block">We are an intentional community</span>
          <span className="block">in the <a 
            href="https://plumvillage.org/#filter=.region-na"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-600"
          >
            Plum Village
          </a> tradition</span>
          <span className="block">of Thich Nhat Hanh.</span>
        </p>
      </section>

      {/* Main Content */}
      <div>
        {/* Homepage Carousel Section */}
        <section className="mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <HomePageCarousel images={homepageImages} />
          </div>
        </section>

        {/* Three Info Panels */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Weekly Meditation Panel */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-[calc(33.333%-1rem)] max-w-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🎉 Walk for Peace LA 🎉
              </h3>
              <p className="text-gray-600">
                We are co-organizing Walk for Peace LA, a silent, meditative walk inspired by and in honor of the Theravāda Buddhist  monks' pilgrimage to DC.
              </p>
              <div className="mt-4">
                <a
                  href="https://luma.com/2w3i6xxl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-[calc(33.333%-1rem)] max-w-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Weekly Meditation
              </h3>
              <p className="text-gray-600">
                <span className="line-through">We host a weekly meditation on Wednesdays at 7 PM at our house in Echo Park. Open to all.</span>{' '}
                <span className="font-bold">🎉 Canceled this week due to Walk for Peace LA 🎉</span>
              </p>
              <div className="mt-4">
                <a
                  href="/events"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Dharma Panel */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-[calc(33.333%-1rem)] max-w-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dharma
              </h3>
              <p className="text-gray-600">
                We are on the Dharma path. The 14 Mindfulness Trainings are the foundation of our practice. Several of us are in the process of ordination in the Order of Interbeing.
              </p>
              <div className="mt-4">
                <a
                  href="/about"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sangha Panel */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-[calc(33.333%-1rem)] max-w-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sangha
              </h3>
              <p className="text-gray-600">
                Sangha is the Sanskrit word for "community". We are members of the{' '}
                <a
                  href="https://lachsangha.wixsite.com/breathe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-600"
                >
                  Compassionate Heart Sangha
                </a>
                , which meets at the Angel City Zen Center on Sundays at 11 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
