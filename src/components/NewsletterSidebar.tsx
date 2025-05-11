'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface NewsletterPost {
  title: string;
  description: string;
  link: string;
}

const SAMPLE_POSTS: NewsletterPost[] = [
  {
    title: 'Kissing ground by Sangha House LA',
    description: 'Enjoying the silences',
    link: 'https://sanghahousela.substack.com/p/kissing-ground'
  },
  // Add more sample posts here
];

export default function NewsletterSidebar() {
  useEffect(() => {
    // Load Substack embed script
    const script = document.createElement('script');
    script.src = 'https://substack.com/embedjs/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">From our Newsletter</h2>
      <div className="space-y-4">
        {SAMPLE_POSTS.slice(0, 4).map((post, index) => (
          <div key={index} className="substack-post-embed">
            <p className="font-medium">{post.title}</p>
            <p className="text-gray-600 text-sm">{post.description}</p>
            <a 
              href={post.link}
              className="text-blue-600 hover:text-blue-800 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack
            </a>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link 
          href="/newsletter"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
} 