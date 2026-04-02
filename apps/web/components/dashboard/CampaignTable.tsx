"use client";

import { campaigns } from "@/lib/mockData";
import type { CampaignStatus, Campaign } from "@/lib/mockData";
import { Play, Pause, Eye } from "iconsax-react";

const STATUS_STYLES: Record<CampaignStatus, string> = {
  active: "bg-green-500/10 text-green-400 border-green-500/20",
  paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  draft: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

function BudgetBar({ spent, budget }: { spent: number; budget: number }) {
  const pct = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
  const color = pct > 80 ? "#f87171" : pct > 50 ? "#fbbf24" : "#34d399";
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{spent.toFixed(1)} SOL</span>
        <span>{budget} SOL</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

interface CampaignTableProps {
  limit?: number;
  showActions?: boolean;
}

export default function CampaignTable({
  limit,
  showActions = true,
}: CampaignTableProps) {
  const data: Campaign[] = limit ? campaigns.slice(0, limit) : campaigns;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5">
            {[
              "Campaign",
              "Status",
              "Budget",
              "Impressions",
              "Clicks",
              "CTR",
              "Dates",
              ...(showActions ? [""] : []),
            ].map((h) => (
              <th
                key={h}
                className="text-left text-gray-500 font-medium pb-3 pr-4 whitespace-nowrap text-xs uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((c) => (
            <tr key={c.id} className="group hover:bg-white/2 transition-colors">
              <td className="py-4 pr-4">
                <div>
                  <p className="text-white font-medium">{c.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.target}</p>
                </div>
              </td>
              <td className="py-4 pr-4">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${STATUS_STYLES[c.status]}`}
                >
                  {c.status}
                </span>
              </td>
              <td className="py-4 pr-6 min-w-[140px]">
                <BudgetBar spent={c.spent} budget={c.budget} />
              </td>
              <td className="py-4 pr-4 text-gray-300 whitespace-nowrap">
                {c.impressions > 0
                  ? `${(c.impressions / 1000).toFixed(0)}K`
                  : "—"}
              </td>
              <td className="py-4 pr-4 text-gray-300 whitespace-nowrap">
                {c.clicks > 0 ? `${(c.clicks / 1000).toFixed(1)}K` : "—"}
              </td>
              <td className="py-4 pr-4 text-gray-300">{c.ctr}</td>
              <td className="py-4 pr-4 text-gray-500 text-xs whitespace-nowrap">
                <div>{c.startDate}</div>
                <div>{c.endDate}</div>
              </td>
              {showActions && (
                <td className="py-4">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                      <Eye size={15} color="currentColor" />
                    </button>
                    {c.status === "active" && (
                      <button className="p-1.5 rounded-lg hover:bg-yellow-500/10 text-gray-400 hover:text-yellow-400 transition-colors">
                        <Pause size={15} color="currentColor" />
                      </button>
                    )}
                    {c.status === "paused" && (
                      <button className="p-1.5 rounded-lg hover:bg-green-500/10 text-gray-400 hover:text-green-400 transition-colors">
                        <Play size={15} color="currentColor" />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
