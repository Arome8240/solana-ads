"use client";

import { useState } from "react";
import { revenueChartData } from "@/lib/mockData";

type Metric = "impressions" | "clicks" | "spend";

const METRICS: {
  key: Metric;
  label: string;
  color: string;
  format: (v: number) => string;
}[] = [
  {
    key: "impressions",
    label: "Impressions",
    color: "#7c3aed",
    format: (v) => `${(v / 1000).toFixed(0)}K`,
  },
  {
    key: "clicks",
    label: "Clicks",
    color: "#3b82f6",
    format: (v) => `${(v / 1000).toFixed(1)}K`,
  },
  {
    key: "spend",
    label: "SOL Spent",
    color: "#22d3ee",
    format: (v) => `${v} SOL`,
  },
];

export default function RevenueChart() {
  const [active, setActive] = useState<Metric>("impressions");
  const metric = METRICS.find((m) => m.key === active)!;
  const values = revenueChartData.map((d) => d[active] as number);
  const max = Math.max(...values);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-white font-semibold">Performance (Last 7 Days)</h2>
        <div className="flex gap-2">
          {METRICS.map((m) => (
            <button
              key={m.key}
              onClick={() => setActive(m.key)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                active === m.key
                  ? "bg-violet-600 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-3 h-40">
        {revenueChartData.map((d, i) => {
          const val = d[active] as number;
          const pct = (val / max) * 100;
          return (
            <div
              key={d.day}
              className="flex-1 flex flex-col items-center gap-2 group"
            >
              <div
                className="relative w-full flex items-end"
                style={{ height: "120px" }}
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {metric.format(val)}
                </div>
                <div
                  className="w-full rounded-t-lg transition-all duration-300"
                  style={{
                    height: `${pct}%`,
                    background: `linear-gradient(to top, ${metric.color}, ${metric.color}88)`,
                    minHeight: "4px",
                  }}
                />
              </div>
              <span className="text-gray-500 text-xs">{d.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
