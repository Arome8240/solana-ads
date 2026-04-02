"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Category,
  Diagram,
  Megaphone,
  Wallet,
  Setting2,
  CloseSquare,
} from "iconsax-react";

const nav = [
  { label: "Overview", href: "/dashboard/overview", Icon: Category },
  { label: "Campaigns", href: "/dashboard/campaigns", Icon: Megaphone },
  { label: "Analytics", href: "/dashboard/analytics", Icon: Diagram },
  { label: "Billing", href: "/dashboard/billing", Icon: Wallet },
  { label: "Settings", href: "/dashboard/settings", Icon: Setting2 },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-[#0a0818] border-r border-white/5 z-30 flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-white text-base">SolanaAds</span>
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-white"
        >
          <CloseSquare size={20} color="currentColor" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(({ label, href, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                ${
                  active
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon
                size={18}
                color={active ? "#c4b5fd" : "currentColor"}
                variant={active ? "Bulk" : "Linear"}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Balance card */}
      <div className="mx-3 mb-4 p-4 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/10 border border-violet-500/20">
        <p className="text-gray-400 text-xs mb-1">Ad Balance</p>
        <p className="text-white font-bold text-xl">4.32 SOL</p>
        <button className="mt-3 w-full text-xs bg-gradient-to-r from-violet-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Add Funds
        </button>
      </div>
    </aside>
  );
}
