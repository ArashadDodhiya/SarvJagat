import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,       // Enables React's strict mode
  swcMinify: true,             // Enables SWC compiler for faster builds
  trailingSlash: true,         // Adds trailing slashes to URLs for consistent routing
  output: "standalone",        // Supports serverless deployment

  images: {
    domains: ["example.com"],  // Replace with your allowed image domains
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://default-api-url.com",
  },

  // experimental: {
  //   appDir: true,              // Enable experimental app directory features if needed
  // },
};

export default nextConfig;
