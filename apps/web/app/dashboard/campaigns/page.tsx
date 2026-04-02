"use client";

import { useState } from "react";
import CampaignTable from "@/components/dashboard/CampaignTable";
import { campaigns } from "@/lib/mockData";
import type { CampaignStatus } from "@/lib/mockData";
import { Add } from "iconsax-react";

const FILTERS: { label: string; value: CampaignStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Paused", value: "paused" },
  { label: "Completed", value: "completed" },
  { label: "Draft", value: "draft" },
];

export default function CampaignsPage() {
  const [filter, setFilter] = useState<CampaignStatus | "all">("all");

  const counts = {
    all: campaigns.length,
    active: campaigns.filter((c) => c.status === "active").length,
    paused: campaigns.filter((c) => c.status === "paused").length,
    completed: campaigns.filter((c) => c.status === "completed").length,
    draft: campaigns.filter((c) => c.status === "draft").length,
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white font-semibold text-xl">All Campaigns</h2>
          <p className="text-gray-500 text-sm mt-0.5">
            {campaigns.length} campaigns total
          </p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Add size={16} color="white" />
          New Campaign
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === f.value
                ? "bg-violet-600 text-white"
                : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
            }`}
          >
            {f.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-md ${filter === f.value ? "bg-white/20" : "bg-white/10"}`}
            >
              {counts[f.value]}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <CampaignTable />
      </div>
    </div>
  );
}
