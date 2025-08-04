/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@veltdev/react"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["media.licdn.com", "platform-lookaside.fbsbx.com"],
    unoptimized: true,
  },
}

export default nextConfig
