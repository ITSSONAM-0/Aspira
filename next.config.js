/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // optional: if using turbopack dev and you see warnings, keep this or remove
  },
  images: {
    // Simple domains list:
    domains: ['randomuser.me'],

    // OR (recommended for finer control) use remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'randomuser.me',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
