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
      </div>
    </>
  )
}
