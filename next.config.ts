import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/combomaker/o/**", // Add additional patterns if necessary
      },
    ],
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
