import { Code, Play, Wallet } from "iconsax-react";
import type { ElementType } from "react";

const steps: {
  step: string;
  Icon: ElementType;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    Icon: Code,
    title: "Integrate the SDK",
    description:
      "Add our lightweight SDK to your dApp in under 10 minutes. Works with React, React Native, and any JS framework.",
  },
  {
    step: "02",
    Icon: Play,
    title: "Users watch ads",
    description:
      "Opt-in rewarded ads appear at natural moments in your app. Users choose to engage — no forced interruptions.",
  },
  {
    step: "03",
    Icon: Wallet,
    title: "Earn crypto rewards",
    description:
      "SOL is sent directly to the user's wallet on-chain. Developers receive their revenue share automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple for everyone
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Three steps from integration to earning. No complex setup, no
            approval delays.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-violet-200 via-blue-200 to-violet-200" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <s.Icon size={28} color="#7c3aed" variant="Bulk" />
                <span className="text-xs font-bold text-gray-300 mt-1">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
