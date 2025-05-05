import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import EventCalendar from '@/components/EventCalendar'
import { Event } from '@/types/event'

async function getEvents() {
  const query = `*[_type == "event"] | order(date asc) {
    _id,
    title,
    slug,
    isRecurring,
    date,
    startTime,
    recurrencePattern,
    dayOfWeek,
    dayOfMonth,
    recurrenceEndDate,
    endDate,
    location,
    description,
    image,
    registrationLink
  }`
  const events = await client.fetch(query)
  return events
}

export default async function Events() {
  const events = await getEvents()

  if (!events || events.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Upcoming Events
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          No events scheduled at this time. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Upcoming Events
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us for our upcoming gatherings, workshops, and community events.
        </p>
      </div>

      <div className="mb-8">
        <EventCalendar events={events} />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event: Event) => (
          <div
            key={event._id}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            {event.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={urlFor(event.image).url()}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  {event.isRecurring
                    ? event.recurrencePattern === 'weekly'
                      ? `Every ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][parseInt(event.dayOfWeek || '0')]}`
                      : `Monthly on day ${event.dayOfMonth}`
                    : new Date(event.date || '').toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'America/Los_Angeles'
                      })}
                </p>
                <Link
                  href={`/events/${event.slug.current}`}
                  className="mt-2 block"
                >
                  <p className="text-xl font-semibold text-gray-900">
                    {event.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {event.description}
                  </p>
                </Link>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-indigo-600 underline"
                    >
                      {event.location}
                    </a>
                  </div>
                </div>
                {event.registrationLink && (
                  <div className="mt-4">
                    <a
                      href={event.registrationLink}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Register Now →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 