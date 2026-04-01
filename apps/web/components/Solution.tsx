const solutions = [
  {
    tag: "For Developers",
    title: "Rewarded ads for your dApp",
    description:
      "Drop in our SDK and start showing rewarded ads in minutes. Earn revenue every time a user engages — no middlemen, no hidden fees.",
    color: "from-violet-500 to-purple-600",
    light: "bg-violet-50 text-violet-700",
  },
  {
    tag: "For Users",
    title: "Get paid for your attention",
    description:
      "Watch an ad, earn SOL directly to your wallet. No sign-ups, no data harvesting — just transparent, opt-in rewards.",
    color: "from-blue-500 to-cyan-500",
    light: "bg-blue-50 text-blue-700",
  },
  {
    tag: "For Advertisers",
    title: "On-chain campaign transparency",
    description:
      "Every impression and click is recorded on Solana. Real-time analytics, verifiable reach, and wallet-based targeting.",
    color: "from-indigo-500 to-blue-600",
    light: "bg-indigo-50 text-indigo-700",
  },
];

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A better ad network for Web3
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Solana Ads aligns incentives for everyone — developers earn, users
            get rewarded, advertisers get results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.tag}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <div className="p-8">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${s.light}`}
                >
                  {s.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className={`h-1 bg-gradient-to-r ${s.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
