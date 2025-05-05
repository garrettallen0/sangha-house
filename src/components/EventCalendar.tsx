'use client'

import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Event } from '@/types/event'

interface EventCalendarProps {
  events: Event[]
}

interface CalendarEvent {
  id: string
  title: string
  start: string
  end: string
  url: string
  extendedProps: {
    description: string
    location: string
    isRecurring?: boolean
  }
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])

  useEffect(() => {
    const formattedEvents = events.flatMap((event) => {
      if (!event.isRecurring) {
        return [{
          id: event._id,
          title: event.title,
          start: event.date || '',
          end: event.endDate || event.date || '',
          url: `/events/${event.slug.current}`,
          extendedProps: {
            description: event.description,
            location: event.location,
          },
        }]
      }

      // Generate recurring events
      const recurringEvents: CalendarEvent[] = []
      
      // For recurring events, we'll generate instances for the next year
      const now = new Date()
      const startDate = event.date ? new Date(event.date) : now
      const endDate = event.recurrenceEndDate 
        ? new Date(event.recurrenceEndDate) 
        : new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
      
      // If the start date is in the future, use it. Otherwise, start from today
      const currentDate = startDate > now ? new Date(startDate) : new Date(now)
      
      while (currentDate <= endDate) {
        let shouldAddEvent = false
        
        if (event.recurrencePattern === 'weekly') {
          const dayOfWeek = parseInt(event.dayOfWeek || '0')
          shouldAddEvent = currentDate.getDay() === dayOfWeek
        } else if (event.recurrencePattern === 'monthly') {
          const dayOfMonth = event.dayOfMonth || 1
          shouldAddEvent = currentDate.getDate() === dayOfMonth
        }
        
        if (shouldAddEvent) {
          const eventDate = new Date(currentDate)
          if (event.startTime) {
            const [hours, minutes] = event.startTime.split(':').map(Number)
            // Create a date string in ISO format with the correct timezone
            const dateStr = eventDate.toLocaleString('en-US', {
              timeZone: 'America/Los_Angeles',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            })
            const [datePart, timePart] = dateStr.split(', ')
            const [month, day, year] = datePart.split('/')
            const [hour, minute] = timePart.split(':')
            eventDate.setFullYear(parseInt(year))
            eventDate.setMonth(parseInt(month) - 1)
            eventDate.setDate(parseInt(day))
            eventDate.setHours(parseInt(hour), parseInt(minute))
          } else if (event.date) {
            const initialDate = new Date(event.date)
            eventDate.setHours(initialDate.getHours(), initialDate.getMinutes())
          }
          
          const eventEndDate = new Date(eventDate)
          eventEndDate.setHours(eventEndDate.getHours() + 1) // Default 1-hour duration
          
          recurringEvents.push({
            id: `${event._id}-${eventDate.toISOString()}`,
            title: event.title,
            start: eventDate.toISOString(),
            end: eventEndDate.toISOString(),
            url: `/events/${event.slug.current}`,
            extendedProps: {
              description: event.description,
              location: event.location,
              isRecurring: true,
            },
          })
        }
        
        currentDate.setDate(currentDate.getDate() + 1)
      }
      
      return recurringEvents
    })
    
    setCalendarEvents(formattedEvents)
  }, [events])

  return (
    <div className="bg-white p-2 md:p-4 rounded-lg shadow max-w-4xl mx-auto overflow-hidden">
      <div className="w-full overflow-x-auto">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: '',
          }}
          events={calendarEvents}
          eventClick={(info) => {
            info.jsEvent.preventDefault()
            window.location.href = info.event.url
          }}
          height="auto"
          aspectRatio={1.5}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
          }}
          views={{
            dayGridMonth: {
              titleFormat: { year: 'numeric', month: 'short' },
              dayMaxEventRows: 2,
            },
          }}
        />
      </div>
    </div>
  )
} 