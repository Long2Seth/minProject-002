const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['hips.hearstapps.com', 'i.pinimg.com', 'fakestoreapi.com', 'images.unsplash.com','i.imgur.com'],
    remotePatterns: [
      
      {
        protocol: 'https',
        hostname: 'store.istad.co'
      }
    ]
  }
};

export default nextConfig;
