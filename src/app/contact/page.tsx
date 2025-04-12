import NewsletterSignup from '@/components/NewsletterSignup'

export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Write us an email
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          You can reach us at{' '}
          <a 
            href="mailto:sanghahousela@gmail.com" 
            className="text-indigo-600 hover:text-indigo-500"
          >
            sanghahousela@gmail.com
          </a>
        </p>
      </div>
      <NewsletterSignup />
    </div>
  )
} 