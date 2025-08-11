import Image from 'next/image';

export default function RoomOpening() {
  return (
    <div className="flex flex-col items-center min-h-[60vh] space-y-6">
      <div className="flex flex-col space-y-4">
        <a
          href="https://docs.google.com/document/d/1CpwD4QUZhZEQMGoZ5lkEL3m6Pn6x-PSXlV4mJGfaxoA/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Read our room ad
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        
        <a
          href="tel:4026725438"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Contact us
        </a>
      </div>
      
      <Image
        src="/room-opening.webp"
        alt="Room Opening"
        width={800}
        height={600}
        className="max-w-full h-auto rounded-lg shadow-lg"
        priority
      />
    </div>
  );
} 