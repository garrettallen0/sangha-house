'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface NewsletterPost {
  title: string;
  teaser: string;
  link: string;
}

const SAMPLE_POSTS: NewsletterPost[] = [
  {
    title: 'Kissing ground',
    teaser: "Only as I got closer did I see there were other words that weren't immediately visible. On closer inspection, the sign actually read \"Walk like your feet are kissing the ground — Thich Nhat Hanh...",
    link: 'https://sanghahousela.substack.com/p/kissing-ground'
  },
  {
    title: 'Transition',
    teaser: "We were sitting around the low table in the living room, boxes piled up around us, having one of our first informal meetings as a living and breathing Sangha house, when my eyes must have internally dilated and the nature of this transition began to dawn on me...",
    link: 'https://sanghahousela.substack.com/p/transition'
  }
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
      <h2 className="text-xl font-semibold mb-4 text-black text-center">From our Newsletter</h2>
      <div className="space-y-4">
        {SAMPLE_POSTS.slice(0, 4).map((post, index) => (
          <a 
            key={index}
            href={post.link}
            className="block substack-post-embed shadow-md hover:shadow-lg hover:outline hover:outline-2 hover:outline-purple-600 transition-all p-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-medium text-black mb-1">{post.title}</p>
            <p className="text-gray-600 text-sm p-1">"{post.teaser}"</p>
          </a>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <a 
          href="https://sanghahousela.substack.com/"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All
        </a>
      </div>
    </div>
  );
} 