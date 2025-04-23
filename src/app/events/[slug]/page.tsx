import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Event } from '@/types/event'

async function getEvent(slug: string) {
  const query = `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    description,
    image,
    registrationLink
  }`
  const event = await client.fetch(query, { slug })
  return event
}

export default async function EventPage({
  params,
}: {
  params: { slug: string }
}) {
  const event = await getEvent(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {event.title}
        </h1>
        
        <div className="mt-4 text-lg text-gray-600">
          <p>
            {new Date(event.date).toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'America/Los_Angeles'
            })}
          </p>
          <p className="mt-2">{event.location}</p>
        </div>

        {event.image && (
          <div className="relative h-96 w-full mt-8">
            <Image
              src={urlFor(event.image).url()}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="mt-8">
          <p className="text-lg text-gray-600">{event.description}</p>
        </div>

        {event.registrationLink && (
          <div className="mt-8">
            <a
              href={event.registrationLink}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Register Now
            </a>
          </div>
        )}
      </article>
    </div>
  )
} 