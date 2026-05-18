/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src'],
  },
  // Disable x-powered-by header for minor security improvement
  poweredByHeader: false,
};

module.exports = nextConfig;
