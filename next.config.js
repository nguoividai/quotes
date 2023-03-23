/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
};

module.exports = nextConfig;
