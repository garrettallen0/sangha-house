import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sangha House LA
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          A community dedicated to mindful living, personal growth, and collective well-being.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/about"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Learn More
          </Link>
          <Link
            href="/events"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            View Events <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Welcome Image Section */}
      <section className="py-8">
        <div className="max-w-xl mx-auto px-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/welcome.jpg"
              alt="Welcome to Sangha House"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Community</h3>
            <p className="mt-2 text-gray-600">
              Join a supportive community of like-minded individuals on the path of mindful living.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Events</h3>
            <p className="mt-2 text-gray-600">
              Participate in workshops, meditation sessions, and community gatherings.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Growth</h3>
            <p className="mt-2 text-gray-600">
              Explore personal development and spiritual growth in a nurturing environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
