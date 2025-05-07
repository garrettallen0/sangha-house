import React from 'react';

interface FeaturedCard {
  title: string;
  description: string;
}

const featuredItems: FeaturedCard[] = [
  {
    title: 'Weekly Meditation',
    description: 'We host a weekly meditation on Wednesdays at 7 pm. Open to all.'
  },
  {
    title: 'Dharma',
    description: 'Dharma teachings and discussions to deepen our understanding and practice.'
  },
  {
    title: 'Sangha',
    description: 'Sangha is the Sanskrit word for "community".'
  }
];

export default function Featured() {
  return (
    <section className="py-6 sm:py-12">
      <div className="h-full">
        <div className="flex flex-col gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 