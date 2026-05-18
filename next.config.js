/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  sassOptions: {
    includePaths: ['./src'],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
