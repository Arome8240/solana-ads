import { analyticsBreakdown, revenueChartData } from "@/lib/mockData";
import RevenueChart from "@/components/dashboard/RevenueChart";

function DonutSegment({
  pct,
  color,
  offset,
}: {
  pct: number;
  color: string;
  offset: number;
}) {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <circle
      cx="50"
      cy="50"
      r={r}
      fill="none"
      stroke={color}
      strokeWidth="12"
      strokeDasharray={`${dash} ${circ - dash}`}
      strokeDashoffset={(-offset * circ) / 100}
      strokeLinecap="butt"
      transform="rotate(-90 50 50)"
    />
  );
}

const WALLET_COLORS = ["#7c3aed", "#3b82f6", "#22d3ee", "#34d399", "#f472b6"];

export default function AnalyticsPage() {
  const total = analyticsBreakdown.reduce((s, w) => s + w.impressions, 0);
  const segments = analyticsBreakdown.map((w, i) => ({
    ...w,
    pct: (w.impressions / total) * 100,
    color: WALLET_COLORS[i],
  }));

  // cumulative offsets for donut
  let cumulative = 0;
  const withOffset = segments.map((s) => {
    const offset = cumulative;
    cumulative += s.pct;
    return { ...s, offset };
  });

  const totalClicks = revenueChartData.reduce((s, d) => s + d.clicks, 0);
  const totalImpressions = revenueChartData.reduce(
    (s, d) => s + d.impressions,
    0,
  );
  const avgCTR = ((totalClicks / totalImpressions) * 100).toFixed(2);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary row */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {
            label: "Total Impressions (7d)",
            value: `${(totalImpressions / 1000000).toFixed(2)}M`,
          },
          {
            label: "Total Clicks (7d)",
            value: `${(totalClicks / 1000).toFixed(1)}K`,
          },
          { label: "Avg. CTR (7d)", value: `${avgCTR}%` },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <p className="text-gray-400 text-sm mb-2">{s.label}</p>
            <p className="text-white text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      <RevenueChart />

      {/* Wallet breakdown */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Donut */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-6">
            Impressions by Wallet
          </h2>
          <div className="flex items-center gap-8">
            <svg viewBox="0 0 100 100" className="w-36 h-36 flex-shrink-0">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="12"
              />
              {withOffset.map((s) => (
                <DonutSegment
                  key={s.wallet}
                  pct={s.pct}
                  color={s.color}
                  offset={s.offset}
                />
              ))}
            </svg>
            <div className="space-y-2.5 flex-1">
              {withOffset.map((s) => (
                <div
                  key={s.wallet}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="text-gray-300 text-sm">{s.wallet}</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {s.pct.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table breakdown */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Wallet Performance</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                {["Wallet", "Impressions", "Clicks", "CTR"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-gray-500 text-xs uppercase tracking-wide font-medium pb-3 pr-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {analyticsBreakdown.map((w, i) => (
                <tr key={w.wallet}>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: WALLET_COLORS[i] }}
                      />
                      <span className="text-gray-300">{w.wallet}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-gray-400">
                    {(w.impressions / 1000).toFixed(0)}K
                  </td>
                  <td className="py-3 pr-4 text-gray-400">
                    {(w.clicks / 1000).toFixed(1)}K
                  </td>
                  <td className="py-3 text-gray-300 font-medium">{w.ctr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
