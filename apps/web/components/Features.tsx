import { MoneyRecive, Flash, Radar, Chart, Code, Lock } from "iconsax-react";
import type { ElementType } from "react";

const features: { Icon: ElementType; title: string; description: string }[] = [
  {
    Icon: MoneyRecive,
    title: "Instant crypto rewards",
    description:
      "SOL lands in wallets the moment an ad completes. No delays, no minimums, no waiting.",
  },
  {
    Icon: Flash,
    title: "Built on Solana",
    description:
      "Sub-second finality and near-zero fees make micro-rewards economically viable at scale.",
  },
  {
    Icon: Radar,
    title: "Wallet-based targeting",
    description:
      "Target by on-chain behavior — token holders, NFT owners, DeFi users — without collecting personal data.",
  },
  {
    Icon: Chart,
    title: "Transparent analytics",
    description:
      "Every impression is recorded on-chain. Advertisers can verify reach independently, no trust required.",
  },
  {
    Icon: Code,
    title: "Easy integration",
    description:
      "One npm install and a few lines of code. Works with any React or React Native app out of the box.",
  },
  {
    Icon: Lock,
    title: "Privacy-first",
    description:
      "No cookies, no tracking pixels, no personal data. Identity is your wallet — nothing more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to monetize
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Built from the ground up for decentralized apps and their users.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-violet-100 hover:bg-violet-50/30 transition-all duration-200 cursor-default"
            >
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 transition-colors">
                <f.Icon size={22} color="#7c3aed" variant="Bulk" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
