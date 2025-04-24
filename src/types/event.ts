export interface Event {
  _id: string
  title: string
  slug: {
    current: string
  }
  isRecurring: boolean
  date?: string
  startTime?: string
  recurrencePattern?: 'weekly' | 'monthly'
  dayOfWeek?: string
  dayOfMonth?: number
  recurrenceEndDate?: string
  endDate?: string
  location: string
  description: string
  image?: any
  registrationLink?: string
} 