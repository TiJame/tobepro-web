import type { NextConfig } from "next";

// Site estático (2026-11-06): sai da Vercel para a Cloudflare Pages (grátis). `next build` gera a pasta
// `out/` com HTML/CSS/JS puros.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
