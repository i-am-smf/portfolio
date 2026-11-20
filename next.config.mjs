import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.shaikmohamedfahad.com" }],
        destination: "https://shaikmohamedfahad.com/",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.shaikmohamedfahad.com" }],
        destination: "https://shaikmohamedfahad.com/:path+",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/_next/static/media/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ]
  },
  async rewrites() {
    return [
      { source: "/favicon.ico", destination: "/favicon/favicon.ico" },
    ]
  },
}

export default nextConfig
