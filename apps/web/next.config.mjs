/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@solana-ads/ui"],
  serverExternalPackages: [
    "@solana/web3.js",
    "@solana/wallet-adapter-base",
    "@solana/wallet-adapter-react",
    "@solana/wallet-adapter-wallets",
    "@ledgerhq/errors",
    "@ledgerhq/devices",
    "@ledgerhq/hw-transport",
  ],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };
    return config;
  },
};

export default nextConfig;
