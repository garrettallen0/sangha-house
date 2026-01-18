'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BannerImage {
  imageUrl: string;
  alt: string;
  title: string;
}

export default function Banner() {
  const pathname = usePathname();
  const [bannerImage, setBannerImage] = useState<BannerImage | null>(null);
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      // Fetch banner image on client side
      // We'll create an API route for this
      fetch('/api/banner')
        .then(res => res.json())
        .then(data => {
          if (data?.imageUrl) {
            setBannerImage(data);
          }
        })
        .catch(() => {
          // Silently fail if API doesn't exist
        });
    }
  }, [isHomePage]);

  if (!isHomePage || !bannerImage?.imageUrl) {
    return null;
  }

  return (
    <section className="w-full mb-8">
      <div className="relative w-full" style={{ aspectRatio: '16/2' }}>
        <Image
          src={bannerImage.imageUrl}
          alt={bannerImage.alt || bannerImage.title || 'Banner image'}
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}

