import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Endereços antigos continuam funcionando depois da troca para "creators"
  async redirects() {
    return [
      { source: "/criadoras", destination: "/creators", permanent: true },
      { source: "/obrigado-criadora", destination: "/obrigado-creator", permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
