import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from '@/components/NewsletterSignup'
import Featured from '@/components/Featured'
import { getHomepageImage } from '@/sanity/lib/queries'

export default async function Home() {
  const homepageImage = await getHomepageImage()

  return (
    <div className="space-y-8 sm:space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sangha House LA
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          We are an intentional community in the <a 
            href="https://plumvillage.org/#filter=.region-na"
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-indigo-600"
          >
            Plum Village
          </a> tradition of Thich Nhat Hanh. We are an offshoot of the <a 
            href="https://lachsangha.wixsite.com/breathe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-indigo-600"
          >
            Los Angeles Compassionate Heart Sangha</a>, which meets at the Angel City Zen Center. We came together to support each other in our practice.
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

      {/* Featured and Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8">
        <Featured />
        <section className="py-6 sm:py-12">
          <div className="relative w-full h-[300px] sm:h-[400px]">
            {homepageImage?.imageUrl && (
              <Image
                src={homepageImage.imageUrl}
                alt={homepageImage.alt || 'Sangha House LA'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-lg"
              />
            )}
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="py-6 sm:py-12">
        <NewsletterSignup />
      </section>
    </div>
  )
}
