/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: [
          '//store.istad.co/api/products/',
        ]
      },
    ]
  }
}
