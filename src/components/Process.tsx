"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, PenTool, Code, Rocket, Activity } from "lucide-react";

const steps = [
  {
    icon: Compass,
    stepNum: "01",
    title: "Discovery",
    description: "We deep-dive into your business goals, analyze your target clients (e.g. medical patients, law clients, startup users), study competitors, and map out your conversion pathways.",
    color: "#13C4F5",
  },
  {
    icon: Lightbulb,
    stepNum: "02",
    title: "Strategy & Copywriting",
    description: "We construct high-converting website layouts, write premium sales copy, outline positioning strategies, and plan your database/AI automation flows.",
    color: "#1E9AFE",
  },
  {
    icon: PenTool,
    stepNum: "03",
    title: "High-End UX/UI Design",
    description: "We build fully interactive designs inspired by Stripe and Apple. No templates — only luxury, customized interfaces aligned with your brand styling.",
    color: "#1F6FFF",
  },
  {
    icon: Code,
    stepNum: "04",
    title: "Production-Ready Development",
    description: "We translate approved mockups into premium Next.js, React, and Tailwind code. Optimize core web vitals and integrate Framer Motion effects.",
    color: "#1A49E6",
  },
  {
    icon: Rocket,
    stepNum: "05",
    title: "Launch & SEO Foundation",
    description: "We set up robots indexing, sitemap structures, SSL layers, schema markup, and launch on high-speed Vercel servers with robust performance.",
    color: "#102FAD",
  },
  {
    icon: Activity,
    stepNum: "06",
    title: "Growth Support & Optimization",
    description: "After launch, we analyze visitor patterns, refine automated AI systems, execute copy modifications, and ensure maximum client lead booking.",
    color: "#08154E",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 z-20 overflow-hidden">
      {/* Background overlay decorations */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-dark-navy opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How We Take You From <span className="text-gradient">Idea to Market Leader</span>
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-xl leading-relaxed">
            Our structured 6-step agency workflow guarantees alignment, speed, and premium execution at every milestone.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-[16px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-blue via-secondary-blue to-dark-navy/20 hidden lg:block transform -translate-x-1/2" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col lg:flex-row items-stretch lg:items-center justify-between relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Card (Content Side) */}
                  <div className="w-full lg:w-[45%] pl-12 lg:pl-0">
                    <div className="rounded-2xl glass-panel p-8 relative border-white/5 hover:border-primary-blue/20 transition-all duration-300 shadow-xl shadow-black/10 group">
                      {/* Hover subtle color splash */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl pointer-events-none"
                        style={{ backgroundColor: step.color }}
                      />

                      {/* Header with Step number */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-display font-black text-white/10 group-hover:text-primary-blue/20 transition-colors duration-300">
                          {step.stepNum}
                        </span>
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: `${step.color}25`, border: `1px solid ${step.color}50` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: step.color }} />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-blue transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-text leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Timeline Node */}
                  <div className="absolute left-[16px] lg:left-1/2 top-0 lg:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-primary-bg flex items-center justify-center transform -translate-x-1/2 lg:-translate-y-1/2 z-30 shadow-lg hidden lg:flex">
                    <div 
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: step.color, boxShadow: `0 0 10px ${step.color}` }}
                    />
                  </div>

                  {/* Spacer (Desktop opposite side) */}
                  <div className="hidden lg:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
