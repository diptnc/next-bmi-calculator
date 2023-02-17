/** @type {import('next').NextConfig} */

//disable eslint for this file
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  
}

module.exports = nextConfig
