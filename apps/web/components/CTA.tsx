export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-16">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start monetizing your dApp today
            </h2>
            <p className="text-violet-200 text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of developers already earning with Solana Ads. Free
              to start, no approval needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-violet-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-violet-50 transition-colors text-sm shadow-lg"
              >
                Start Earning
              </a>
              <a
                href="#developers"
                className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm"
              >
                Integrate SDK
              </a>
            </div>

            <p className="text-violet-300 text-xs mt-6">
              No credit card required · Instant SOL payouts · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
