"use client";

import { usePathname } from "next/navigation";
import { HambergerMenu, Notification, SearchNormal } from "iconsax-react";
import dynamic from "next/dynamic";

const WalletConnectButton = dynamic(
  () => import("@/components/WalletConnectButton"),
  { ssr: false },
);

const PAGE_TITLES: Record<string, string> = {
  "/dashboard/overview": "Overview",
  "/dashboard/campaigns": "Campaigns",
  "/dashboard/analytics": "Analytics",
  "/dashboard/billing": "Billing",
  "/dashboard/settings": "Settings",
};

export default function DashboardTopbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] ?? "Dashboard";

  return (
    <header className="h-16 border-b border-white/5 bg-[#0d0b1a] flex items-center justify-between px-6 gap-4 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <HambergerMenu size={22} color="currentColor" />
        </button>
        <h1 className="text-white font-semibold text-lg">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-400 w-52">
          <SearchNormal size={15} color="currentColor" />
          <span>Search...</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
          <Notification size={20} color="currentColor" variant="Bulk" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
        </button>

        <WalletConnectButton />
      </div>
    </header>
  );
}
