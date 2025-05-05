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

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Los_Angeles'
    })
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Los_Angeles'
    })
  }

  const getRecurrenceText = (event: Event) => {
    if (!event.isRecurring) return null

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const timeText = event.startTime ? ` at ${formatTime(event.startTime)}` : ''
    const endDateText = event.recurrenceEndDate ? ` until ${formatDate(event.recurrenceEndDate)}` : ''

    if (event.recurrencePattern === 'weekly') {
      return `Every ${days[parseInt(event.dayOfWeek || '0')]}${timeText}${endDateText}`
    } else if (event.recurrencePattern === 'monthly') {
      return `Monthly on the ${event.dayOfMonth}${getOrdinalSuffix(event.dayOfMonth || 1)}${timeText}${endDateText}`
    }
    return null
  }

  const getOrdinalSuffix = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return s[(v - 20) % 10] || s[v] || s[0]
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {event.title}
        </h1>
        
        <div className="mt-4 text-lg text-gray-600">
          {event.isRecurring ? (
            <p>{getRecurrenceText(event)}</p>
          ) : (
            <p>
              {formatDate(event.date || '')}
              {event.startTime && ` at ${formatTime(event.startTime)}`}
            </p>
          )}
          <p className="mt-2">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 underline"
            >
              {event.location}
            </a>
          </p>
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