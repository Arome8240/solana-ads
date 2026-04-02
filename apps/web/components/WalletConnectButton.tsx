"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { Wallet, LogoutCurve, Copy, TickCircle } from "iconsax-react";
import type { WalletName } from "@solana/wallet-adapter-base";

const WALLET_ICONS: Record<string, string> = {
  Phantom:
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/phantom.svg",
  Solflare:
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/solflare.svg",
  Nightly:
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/nightly.svg",
  Coinbase:
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/coinbase.svg",
};

export default function WalletConnectButton() {
  const {
    wallets,
    select,
    connect,
    connecting,
    connected,
    publicKey,
    disconnect,
  } = useWallet();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shortKey = publicKey
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : null;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = useCallback(
    async (walletName: WalletName) => {
      select(walletName);
      setShowModal(false);
      try {
        await connect();
      } catch {
        // user rejected or wallet not installed — silent fail
      }
    },
    [select, connect],
  );

  const handleCopy = useCallback(() => {
    if (!publicKey) return;
    navigator.clipboard.writeText(publicKey.toBase58());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [publicKey]);

  if (connected && publicKey) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((v) => !v)}
          className="flex items-center gap-2 text-sm bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          <Wallet size={15} color="white" variant="Bold" />
          {shortKey}
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {copied ? (
                <TickCircle size={15} color="#22c55e" variant="Bold" />
              ) : (
                <Copy size={15} color="#6b7280" />
              )}
              {copied ? "Copied!" : "Copy address"}
            </button>
            <button
              onClick={() => {
                disconnect();
                setShowDropdown(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogoutCurve size={15} color="#ef4444" />
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        disabled={connecting}
        className="flex items-center gap-2 text-sm bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-60"
      >
        <Wallet size={15} color="white" variant="Bold" />
        {connecting ? "Connecting..." : "Connect Wallet"}
      </button>

      {/* Wallet picker modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-gray-900">Connect a wallet</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {wallets.map((w) => (
                <button
                  key={w.adapter.name}
                  onClick={() => handleSelect(w.adapter.name)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {WALLET_ICONS[w.adapter.name] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={WALLET_ICONS[w.adapter.name]}
                        alt={w.adapter.name}
                        width={22}
                        height={22}
                      />
                    ) : (
                      <Wallet size={16} color="#7c3aed" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {w.adapter.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {w.readyState === "Installed"
                        ? "Detected"
                        : "Not installed"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
