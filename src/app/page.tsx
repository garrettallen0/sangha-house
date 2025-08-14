import Link from 'next/link'
import Featured from '@/components/Featured'
import HomePageCarousel from '@/components/HomePageCarousel'
import { getHomepageImages } from '@/sanity/lib/queries'

export default async function Home() {
  const homepageImages = await getHomepageImages()

  return (
    <>
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sangha House LA
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xs mx-auto">
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
        {/* Featured and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 mt-4">
          <Featured />
          <section className="py-6 sm:py-12">
            <HomePageCarousel images={homepageImages} />
          </section>
        </div>

        {/* Three Info Panels */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weekly Meditation Panel */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Weekly Meditation
              </h3>
              <p className="text-gray-600">
                We host a weekly meditation on Wednesdays at 7 PM at our house in Echo Park. Open to all.
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
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center">
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
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center">
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
