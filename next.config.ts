import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2592000,
  },
  async redirects() {
    return [
      {
        source: "/game",
        destination: "/games",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
