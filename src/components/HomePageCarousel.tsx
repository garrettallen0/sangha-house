'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HomepageImage {
  _id: string;
  title: string;
  imageUrl: string;
  alt: string;
  description?: string;
}

interface HomePageCarouselProps {
  images: HomepageImage[];
}

export default function HomePageCarousel({ images }: HomePageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3 seconds (like ImageCarousel)
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No homepage images available</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
        <Image
          src={images[currentIndex].imageUrl}
          alt={images[currentIndex].alt}
          fill
          className="object-contain transition-transform duration-500 ease-in-out bg-gray-100"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Image Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white text-sm font-medium truncate">
            {images[currentIndex].title}
          </h3>
          {images[currentIndex].description && (
            <p className="text-white/80 text-xs truncate">
              {images[currentIndex].description}
            </p>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-1 mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 