import { MoneyRecive, Eye, SearchStatus } from "iconsax-react";
import type { ElementType } from "react";

const problems: { Icon: ElementType; title: string; description: string }[] = [
  {
    Icon: MoneyRecive,
    title: "Web3 apps can't monetize",
    description:
      "Most dApps have no sustainable revenue model. Traditional ad networks don't support wallets, tokens, or decentralized identity.",
  },
  {
    Icon: Eye,
    title: "Users get nothing for their attention",
    description:
      "In Web2, your attention is sold to advertisers. You see the ads, but the value goes to platforms — not you.",
  },
  {
    Icon: SearchStatus,
    title: "Ad spend is a black box",
    description:
      "Advertisers have no way to verify impressions or clicks on-chain. Fraud is rampant and reporting is opaque.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Web3 advertising is broken
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The current ad ecosystem wasn't built for decentralized apps.
            Developers, users, and advertisers all lose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-xl bg-violet-50">
                <p.Icon size={22} color="#7c3aed" variant="Bulk" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
