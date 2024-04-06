const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['hips.hearstapps.com', 'i.pinimg.com', 'fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.istad.co'
      }
    ]
  }
};

export default nextConfig;
