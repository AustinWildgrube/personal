/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['via.placeholder.com', 'source.unsplash.com', 'i.scdn.co'],
  },
};

module.exports = nextConfig;
