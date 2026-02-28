import Image from 'next/image';

export default function Donate() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Support Sangha House LA
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p>
            Your dana (generosity) helps us sustain our weekly meditations,
          community gatherings, and offerings of mindfulness and compassion in
          Los Angeles.
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Ways to support
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3">
              <span className="font-semibold text-gray-900">
                Venmo:
              </span>
              <a
                href="https://venmo.com/u/sanghahousela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                @sanghahousela
              </a>
            </div>
            <div className="mt-2">
              <Image
                src="/Sanghahouse-venmo.webp"
                alt="Venmo QR Code"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


