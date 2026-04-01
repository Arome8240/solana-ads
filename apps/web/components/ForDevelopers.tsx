const codeSnippet = `import { showAd } from "@solana-ads/sdk";

await showAd({
  adUnitId: "rewarded_1",
  onReward: (amount) => {
    console.log(\`User earned \${amount} SOL\`);
    // Update your UI, unlock content, etc.
  },
});`;

const steps = [
  "npm install @solana-ads/sdk",
  "Connect your Solana wallet",
  "Call showAd() anywhere in your app",
  "Receive revenue share automatically",
];

export default function ForDevelopers() {
  return (
    <section id="developers" className="py-24 bg-[#06040f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
              For Developers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Integrate in minutes,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                earn forever
              </span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our SDK is designed to be as simple as possible. No complex
              configuration, no approval process. Just install, call one
              function, and start earning.
            </p>

            <ul className="space-y-3 mb-8">
              {steps.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Read the docs
              </a>
              <a
                href="#"
                className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Code block */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
            {/* Window chrome */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-gray-500 text-xs">app.tsx</span>
            </div>
            <div className="bg-[#0d0b1a] p-6 overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-gray-600 select-none w-6 text-right mr-4 flex-shrink-0 text-xs pt-0.5">
                        {i + 1}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: colorize(line),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimal syntax highlighting
function colorize(line: string): string {
  return line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /\b(import|from|await|const|async|function|return)\b/g,
      '<span style="color:#c084fc">$1</span>',
    )
    .replace(
      /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
      '<span style="color:#86efac">$1</span>',
    )
    .replace(
      /\b(showAd|console\.log|onReward)\b/g,
      '<span style="color:#67e8f9">$1</span>',
    )
    .replace(/(\/\/.*$)/g, '<span style="color:#6b7280">$1</span>')
    .replace(/ /g, "&nbsp;");
}
