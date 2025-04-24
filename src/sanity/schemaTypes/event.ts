import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isRecurring',
      title: 'Is Recurring Event',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.custom((date, context) => {
        if (!context.document?.isRecurring && !date) {
          return 'Date is required for non-recurring events'
        }
        return true
      }),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'Time of day for recurring events (e.g., "19:00")',
      hidden: ({ document }) => !document?.isRecurring,
    }),
    defineField({
      name: 'recurrencePattern',
      title: 'Recurrence Pattern',
      type: 'string',
      options: {
        list: [
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
        ],
      },
      hidden: ({ document }) => !document?.isRecurring,
    }),
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          { title: 'Sunday', value: '0' },
          { title: 'Monday', value: '1' },
          { title: 'Tuesday', value: '2' },
          { title: 'Wednesday', value: '3' },
          { title: 'Thursday', value: '4' },
          { title: 'Friday', value: '5' },
          { title: 'Saturday', value: '6' },
        ],
      },
      hidden: ({ document }) => !document?.isRecurring || document?.recurrencePattern !== 'weekly',
    }),
    defineField({
      name: 'dayOfMonth',
      title: 'Day of Month',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(31),
      hidden: ({ document }) => !document?.isRecurring || document?.recurrencePattern !== 'monthly',
    }),
    defineField({
      name: 'recurrenceEndDate',
      title: 'Recurrence End Date',
      type: 'date',
      hidden: ({ document }) => !document?.isRecurring,
    }),
    defineField({
      name: 'endDate',
      title: 'End Date and Time',
      type: 'datetime',
      hidden: ({ document }) => document?.isRecurring,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      isRecurring: 'isRecurring',
      recurrencePattern: 'recurrencePattern',
      dayOfWeek: 'dayOfWeek',
      dayOfMonth: 'dayOfMonth',
      media: 'image',
    },
    prepare({ title, date, isRecurring, recurrencePattern, dayOfWeek, dayOfMonth, media }) {
      const subtitle = isRecurring
        ? `${recurrencePattern === 'weekly' ? `Every ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][parseInt(dayOfWeek)]}` : `Monthly on day ${dayOfMonth}`}`
        : date
        ? new Date(date).toLocaleDateString()
        : 'No date set'
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}) 