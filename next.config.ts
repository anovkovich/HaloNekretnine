import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // Deploying to subpath: username.github.io/repo-name
  // Only apply basePath in production (so local dev works normally)
  basePath: isProd ? "/HaloUspomene" : "",
  assetPrefix: isProd ? "/HaloUspomene" : "",

  // Trailing slashes help with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
