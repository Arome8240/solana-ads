import { TickCircle, Wallet } from "iconsax-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06040f] pt-16">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Built on Solana · Now in Beta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Monetize your dApp{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              with rewarded ads
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10">
            The first decentralized ad network built for Web3. Developers earn
            revenue, users get crypto rewards, advertisers get transparent
            on-chain campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm shadow-lg shadow-violet-500/25"
            >
              Start Earning
            </a>
            <a
              href="#developers"
              className="border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              Integrate SDK
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <TickCircle size={16} color="#4ade80" variant="Bold" /> Free to
              integrate
            </div>
            <div className="flex items-center gap-2">
              <TickCircle size={16} color="#4ade80" variant="Bold" /> Instant
              SOL payouts
            </div>
            <div className="flex items-center gap-2">
              <TickCircle size={16} color="#4ade80" variant="Bold" /> No KYC
              required
            </div>
          </div>
        </div>

        {/* Mock UI */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <MockDashboard />
        </div>
      </div>
    </section>
  );
}

function MockDashboard() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-400 text-xs mb-1">Total Earned</p>
            <p className="text-white text-2xl font-bold">12.48 SOL</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
            <Wallet size={20} color="white" variant="Bold" />
          </div>
        </div>

        {/* Mini chart bars */}
        <div className="flex items-end gap-1.5 h-16 mb-6">
          {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-violet-600 to-blue-400 opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Recent rewards */}
        <div className="space-y-3">
          {[
            { app: "DeFi Swap", reward: "+0.12 SOL", time: "2m ago" },
            { app: "NFT Gallery", reward: "+0.08 SOL", time: "15m ago" },
            { app: "GameFi App", reward: "+0.21 SOL", time: "1h ago" },
          ].map((item) => (
            <div
              key={item.app}
              className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/40 to-blue-500/40 flex items-center justify-center text-xs text-white">
                  {item.app[0]}
                </div>
                <div>
                  <p className="text-white text-xs font-medium">{item.app}</p>
                  <p className="text-gray-500 text-xs">{item.time}</p>
                </div>
              </div>
              <span className="text-green-400 text-xs font-semibold">
                {item.reward}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating ad card */}
      <div className="absolute -bottom-6 -right-6 bg-white/10 border border-white/15 rounded-xl p-3 backdrop-blur-sm w-44 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-400 to-pink-500" />
          <span className="text-white text-xs font-medium">Ad Reward</span>
        </div>
        <p className="text-gray-400 text-xs mb-2">Watch to earn</p>
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-violet-500 to-blue-400 h-1.5 rounded-full w-2/3" />
        </div>
        <p className="text-green-400 text-xs mt-1.5 font-semibold">+0.05 SOL</p>
      </div>
    </div>
  );
}
