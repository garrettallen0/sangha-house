'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Featured() {
  return (
    <section className="relative h-full flex items-center">
      <div className="w-full">
        <Link
          href="/room-opening"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
            Room Opening!
          </h3>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-center text-gray-600">
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
        </Link>
      </div>
    </section>
  );
} 