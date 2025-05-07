'use client';

import React from 'react';
import Link from 'next/link';

interface FeaturedCard {
  title: string;
  description: string;
  link?: string;
}

const featuredItems: FeaturedCard[] = [
  {
    title: 'Weekly Meditation',
    description: 'We host a weekly meditation on Wednesdays at 7 pm at our house in Echo Park. Open to all.',
    link: '/events'
  },
  {
    title: 'Dharma',
    description: 'We are on the Dharma path. Several of us are in the process of ordination in the Order of Interbeing. ',
    link: '/about'
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
            <Link
              key={index}
              href={item.link || '#'}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${
                item.link ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 