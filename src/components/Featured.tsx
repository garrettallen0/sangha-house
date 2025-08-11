'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedCard {
  title: string;
  description: string | React.ReactNode;
  link?: string;
}

const featuredItems: FeaturedCard[] = [
  {
    title: 'Room Opening!',
    description: (
      <div className="flex flex-col items-center space-y-3">
        <p className="text-center text-gray-600 mb-3">
          We are looking for a housemate and community member.
        </p>
        <Image
          src="/room-opening.webp"
          alt="Room Opening"
          width={200}
          height={150}
          className="rounded-lg shadow-md"
        />
      </div>
    ),
    link: '/room-opening'
  },
  {
    title: 'Weekly Meditation',
    description: 'We host a weekly meditation on Wednesdays at 7 PM at our house in Echo Park. Open to all.',
    link: '/events'
  },
  {
    title: 'Dharma',
    description: 'We are on the Dharma path. The 14 Mindfulness Trainings are the foundation of our practice. Several of us are in the process of ordination in the Order of Interbeing. ',
    link: '/about'
  },
  {
    title: 'Sangha',
    description: (
      <>
        Sangha is the Sanskrit word for "community". We are members of the{' '}
        <a
          href="https://lachsangha.wixsite.com/breathe"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
          onClick={(e) => e.stopPropagation()}
        >
          Compassionate Heart Sangha
        </a>
        , which meets at the Angel City Zen Center on Sundays at 11 AM.
      </>
    )
  }
];

export default function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-full flex items-center">
      <div className="w-full">
        <Link
          href={featuredItems[currentIndex].link || '#'}
          className={`block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 mb-8 ${
            featuredItems[currentIndex].link ? 'cursor-pointer' : 'cursor-default'
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
            {featuredItems[currentIndex].title}
          </h3>
          <div className="text-gray-600">
            {featuredItems[currentIndex].description}
          </div>
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex space-x-2">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 