export default function RoomOpening() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Room Opening
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us for our weekly room opening ceremony
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Event Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">Every Sunday</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Sangha House LA Studio</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Opening meditation and intention setting
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community sharing circle
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mindful movement and breathwork
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Closing gratitude practice
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About Room Opening</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Room Opening is our weekly community gathering that sets the tone for mindful living throughout the week. 
              This sacred space allows us to come together, share our intentions, and support one another on our spiritual journeys.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you're new to meditation or a seasoned practitioner, all are welcome. We believe in creating an 
              inclusive environment where everyone can feel safe to explore their inner world and connect with like-minded souls.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-50 rounded-lg border border-green-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Ready to Join Us?</h3>
          <p className="text-green-700 mb-4">
            No registration required. Just bring an open heart and comfortable clothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Get Directions
            </a>
            <a
              href="/events"
              className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              View All Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 