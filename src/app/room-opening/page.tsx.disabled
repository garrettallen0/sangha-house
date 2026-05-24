import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import { getImages } from '@/sanity/lib/queries';

export default async function RoomOpening() {
  const images = await getImages('room-opening');
  
  return (
    <div className="flex flex-col items-center min-h-[60vh] space-y-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 line-through">
            Room Opening Sept. 1st!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We found a housemate! 🎉
          </p>
                      <p className="text-lg text-gray-600">
              However, we're always interested in building our community — eventually, we'd like to have a bigger house, or two houses! If you're interested, come join us for Wednesday meditation or reach out to us by email.
            </p>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <a
            href="mailto:sanghahousela@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
          >
            Contact us
          </a>
        </div>

        {/* Quick Details */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-green-900 mb-3">Move in & Rent</h2>
              <div className="space-y-2 text-green-800">
                <p><strong>Move in:</strong> Sept. 1st</p>
                <p><strong>Rent:</strong> $980 + utilities</p>
                <p><strong>Office:</strong> Option to add office for $100 / month
                </p>
                <p>(Note: The office is not available for rent separately.)</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-900 mb-3">House Gallery</h2>
              <ImageCarousel images={images} category="room-opening" />
            </div>
          </div>
        </div>

        {/* Room Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About the room + office</h2>
          <div className="space-y-3 text-gray-700">
            <p>120 sqft room with closet. Wood panel floors. Quiet, on the back of the house, with a window to the backyard. Shared bathroom.</p>
            <p>Possibility of adding a 80 sqft office on the main floor for $100 / month. Wood panel floors. Double doors to the backyard. (The office is not available for rent separately.)</p>
          </div>
        </div>

        {/* House Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About the house</h2>
          <div className="space-y-3 text-gray-700">
            <p>Beautiful, 1856 sqft Victorian house with a yard in Echo Park. We are right next to downtown, a short walk from Echo Park Lake and Sunset Ave. Street parking. Easy access to multiple bus lines. Washer and dryer in unit.</p>
          </div>
        </div>

        {/* Community Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About our community</h2>
          <div className="space-y-3 text-gray-700">
            <p>We are an intentional community inspired by Zen Master Thich Nhat Hahn. Our intention is to support each other in spiritual practice and growth.</p>
            <p>We host a weekly meditation open to the public on Wednesdays. We sit together in the morning as our schedules and sleep habits allow. We share food; each person cooks for the house once a week. We strive to practice non-violent communication. We are friends with each other and are looking for someone who wants to be in relationship with us.</p>
            <p>Your housemates: an event planner, a cook, a software engineer, and a hospitality professional. We enjoy gardening, sharing food, and playing games.</p>
          </div>
        </div>

        {/* About You */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About you</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You want to live in intentional community
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You want to share (vegetarian) food by cooking for everyone once a week
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You have a commitment to self-development and spirituality — especially through Buddhism but inclusive of others (therapy, recovery, NVC, yoga, authentic relating, etc.)
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You are considerate of others and shared space, and pay your rent on time
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-green-50 rounded-lg border border-green-200 p-6 text-center">
          <p className="text-lg text-green-800 mb-4">
            If this sounds like you, reach out and come visit the house.
          </p>
          <a
            href="mailto:sanghahousela@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Contact us
          </a>
        </div>
      </div>
      
    </div>
  );
} 