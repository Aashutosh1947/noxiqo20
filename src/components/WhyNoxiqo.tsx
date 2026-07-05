"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

const typicalAgency = [
  { text: "Uses generic templates that look like competitors" },
  { text: "No custom AI integrations or backend workflows" },
  { text: "Takes 2-3 months to deliver basic pages" },
  { text: "Poor scores on performance (slow loading)" },
  { text: "Leaves you stranded after launch without support" },
  { text: "Hidden charges and vague cost models" },
];

const noxiqoAgency = [
  { text: "100% custom-tailored designs built for conversions" },
  { text: "Integrated intelligent AI chatbots & workflow syncs" },
  { text: "Production-ready launch in just 14 days" },
  { text: "Flawless Lighthouse scores (speeds under 1.2s)" },
  { text: "Dedicated ongoing maintenance and growth support" },
  { text: "Transparent fixed-price scopes and zero lock-ins" },
];

export default function WhyNoxiqo() {
  return (
    <section id="why-noxiqo" className="relative py-28 z-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] rounded-full bg-dark-navy opacity-30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How We Outperform <span className="text-gradient">Typical Agencies</span>
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-xl leading-relaxed">
            See why high-growth brands and high-ticket service companies choose NOXIQO over legacy digital consultants.
          </p>
        </div>

        {/* Comparison Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Connector line or VS badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center text-xs font-mono font-extrabold text-gray-text hidden lg:flex z-30">
            VS
          </div>

          {/* Typical Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Typical Agency</h3>
                  <p className="text-xs text-gray-text">Slow, generic, and unoptimized</p>
                </div>
              </div>

              <ul className="flex flex-col gap-5">
                {typicalAgency.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500/80 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-text leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/5 pt-8 mt-12 text-xs font-mono text-gray-text">
              Result: Low traffic, poor brand trust, and wasted marketing dollars.
            </div>
          </motion.div>

          {/* NOXIQO Card (Premium glow card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-panel p-8 flex flex-col justify-between border-primary-blue/30 relative overflow-hidden shadow-2xl shadow-primary-blue/5"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary-blue to-secondary-blue flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    NOXIQO <span className="text-xs font-mono font-bold text-primary-blue ml-2 uppercase tracking-wide bg-primary-blue/10 px-2 py-0.5 rounded border border-primary-blue/20">Recommended</span>
                  </h3>
                  <p className="text-xs text-gray-text">Ultrafast, smart, and conversion-focused</p>
                </div>
              </div>

              <ul className="flex flex-col gap-5">
                {noxiqoAgency.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-blue/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary-blue" />
                    </div>
                    <span className="text-sm text-white font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/5 pt-8 mt-12 flex items-center justify-between">
              <span className="text-xs font-mono text-primary-blue flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Maximizes conversion rates &amp; business scaling
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
