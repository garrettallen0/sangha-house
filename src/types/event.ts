export interface Event {
  _id: string
  title: string
  slug: {
    current: string
  }
  date: string
  endDate?: string
  location: string
  description: string
  image?: any
  registrationLink?: string
} 