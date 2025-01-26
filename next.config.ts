import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: ''
      },
      {
        protocol: "https",
        hostname: 'ik.imagekit.io',
        port: ""
      }
    ]
  }
};

export default nextConfig;
