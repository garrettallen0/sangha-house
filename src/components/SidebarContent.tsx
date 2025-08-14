'use client';

import { usePathname } from 'next/navigation';
import NewsletterSidebar from './NewsletterSidebar';
import Image from 'next/image';

export default function SidebarContent() {
  const pathname = usePathname();
  
  // Show the flier on the room-opening page, newsletter on other pages
  if (pathname === '/room-opening') {
    return (
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-full max-w-sm p-8">
          <Image
            src="/room-opening.webp"
            alt="Room Opening Flier"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    );
  }
  
  // Default to newsletter for other pages
  return <NewsletterSidebar />;
} 