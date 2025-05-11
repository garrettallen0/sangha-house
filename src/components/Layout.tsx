'use client';

import { ReactNode } from 'react';
import NewsletterSidebar from './NewsletterSidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            {children}
          </main>
          <aside className="w-full lg:w-[350px] lg:shrink-0">
            <NewsletterSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
} 