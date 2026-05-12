/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
