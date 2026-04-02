import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WalletProviderClient from "@/components/WalletProviderClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Ads — Decentralized Ad Network for dApps",
  description:
    "Monetize your dApp with rewarded ads. Users earn crypto. Advertisers get transparent, on-chain campaigns. Built on Solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProviderClient>{children}</WalletProviderClient>
      </body>
    </html>
  );
}
