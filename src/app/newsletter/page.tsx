'use client';

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
  {
    title: 'Transition by Sangha House LA',
    description: 'Beginning a Sangha House',
    link: 'https://sanghahousela.substack.com/p/transition'
  }
];

export default function NewsletterArchive() {
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Newsletter Archive</h1>
      <div className="grid gap-6">
        {SAMPLE_POSTS.map((post, index) => (
          <div key={index} className="substack-post-embed p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <a 
              href={post.link}
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 