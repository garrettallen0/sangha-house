/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static files are served correctly
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  // Handle Sanity Studio static files
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 