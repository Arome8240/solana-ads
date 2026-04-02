import { activityFeed } from "@/lib/mockData";
import {
  Chart,
  Notification,
  TickCircle,
  Moneys,
  Warning2,
} from "iconsax-react";
import type { ElementType } from "react";

const TYPE_CONFIG: Record<
  string,
  { Icon: ElementType; color: string; bg: string }
> = {
  impression_milestone: {
    Icon: Chart,
    color: "#a78bfa",
    bg: "bg-violet-500/10",
  },
  budget_alert: { Icon: Warning2, color: "#fbbf24", bg: "bg-yellow-500/10" },
  campaign_paused: {
    Icon: Notification,
    color: "#60a5fa",
    bg: "bg-blue-500/10",
  },
  payment: { Icon: Moneys, color: "#34d399", bg: "bg-green-500/10" },
  campaign_completed: {
    Icon: TickCircle,
    color: "#34d399",
    bg: "bg-green-500/10",
  },
};

export default function ActivityFeed() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h2 className="text-white font-semibold mb-5">Recent Activity</h2>
      <div className="space-y-4">
        {activityFeed.map((item) => {
          const cfg = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.payment;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-lg ${cfg.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
              >
                <cfg.Icon size={15} color={cfg.color} variant="Bulk" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-sm leading-snug">
                  {item.message}
                </p>
                <p className="text-gray-600 text-xs mt-0.5">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
