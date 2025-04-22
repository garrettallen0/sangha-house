'use client'

import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Event } from '@/types/event'

interface EventCalendarProps {
  events: Event[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [calendarEvents, setCalendarEvents] = useState<any[]>([])

  useEffect(() => {
    const formattedEvents = events.map((event) => ({
      id: event._id,
      title: event.title,
      start: event.date,
      end: event.endDate || event.date,
      url: `/events/${event.slug.current}`,
      extendedProps: {
        description: event.description,
        location: event.location,
      },
    }))
    setCalendarEvents(formattedEvents)
  }, [events])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={calendarEvents}
        eventClick={(info) => {
          info.jsEvent.preventDefault()
          window.location.href = info.event.url
        }}
        height="auto"
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
      />
    </div>
  )
} 