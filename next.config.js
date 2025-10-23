/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/ubuntu',
        destination: '/for-developers',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
