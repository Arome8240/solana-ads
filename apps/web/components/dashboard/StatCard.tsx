import { TrendUp, TrendDown } from "iconsax-react";
import type { ElementType } from "react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  up: boolean;
  Icon: ElementType;
  iconColor?: string;
}

export default function StatCard({
  label,
  value,
  change,
  up,
  Icon,
  iconColor = "#7c3aed",
}: StatCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">{label}</p>
        <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
          <Icon size={18} color={iconColor} variant="Bulk" />
        </div>
      </div>
      <div>
        <p className="text-white text-2xl font-bold">{value}</p>
        <div
          className={`flex items-center gap-1 mt-1 text-xs font-medium ${up ? "text-green-400" : "text-red-400"}`}
        >
          {up ? (
            <TrendUp size={14} color="#4ade80" />
          ) : (
            <TrendDown size={14} color="#f87171" />
          )}
          {change} vs last week
        </div>
      </div>
    </div>
  );
}
