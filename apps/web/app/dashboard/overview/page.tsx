import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import CampaignTable from "@/components/dashboard/CampaignTable";
import { overviewStats } from "@/lib/mockData";
import { Eye, MouseSquare, Moneys, Diagram } from "iconsax-react";
import Link from "next/link";

const ICONS = [Eye, MouseSquare, Moneys, Diagram];
const ICON_COLORS = ["#a78bfa", "#60a5fa", "#34d399", "#f472b6"];

export default function OverviewPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewStats.map((s, i) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            change={s.change}
            up={s.up}
            Icon={ICONS[i]}
            iconColor={ICON_COLORS[i]}
          />
        ))}
      </div>

      {/* Chart */}
      <RevenueChart />

      {/* Campaigns + Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">Active Campaigns</h2>
            <Link
              href="/dashboard/campaigns"
              className="text-violet-400 text-sm hover:text-violet-300 transition-colors"
            >
              View all
            </Link>
          </div>
          <CampaignTable limit={3} showActions={false} />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
}
