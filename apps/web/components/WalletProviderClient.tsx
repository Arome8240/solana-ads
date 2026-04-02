"use client";

import dynamic from "next/dynamic";

const SolanaWalletProvider = dynamic(
  () => import("@/components/WalletProvider"),
  { ssr: false },
);

export default function WalletProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SolanaWalletProvider>{children}</SolanaWalletProvider>;
}
