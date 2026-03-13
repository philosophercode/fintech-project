import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/fintech-project" : "",
  assetPrefix: isProd ? "/fintech-project/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
