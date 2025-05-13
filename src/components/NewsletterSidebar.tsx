'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`
        w-full bg-white rounded-lg shadow transition-all duration-300 ease-in-out
        ${isExpanded ? 'p-4' : 'p-2 cursor-pointer animate-subtle-bounce'}
        ${isHovered && !isExpanded ? 'scale-105 shadow-lg' : ''}
        hover:shadow-lg
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isExpanded ? (
        <>
          <h2 className="text-xl font-semibold mb-4 text-black text-center">From our Newsletter</h2>
          <div className="space-y-4">
            {SAMPLE_POSTS.slice(0, 4).map((post, index) => (
              <a 
                key={index}
                href={post.link}
                className="block substack-post-embed shadow-md hover:shadow-lg hover:outline hover:outline-2 hover:outline-indigo-600 transition-all p-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              View All
            </a>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-12">
          <h2 className="text-lg font-semibold text-black">From Our Newsletter</h2>
          <svg 
            className="w-5 h-5 ml-2 text-indigo-600"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </div>
  );
} 