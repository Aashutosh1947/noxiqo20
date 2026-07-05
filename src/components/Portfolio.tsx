"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star, Zap } from "lucide-react";

const categories = ["All", "Medical", "Corporate & Law", "SaaS & Startups", "High-Ticket Service"];

const projects = [
  {
    id: 1,
    title: "MedVibe Clinical Suite",
    category: "Medical",
    headline: "Premium Booking & Patient Portal",
    result: "+148% Patient Bookings",
    speed: "0.9s Load Time",
    gradient: "from-teal-500/20 to-blue-500/20",
    color: "#0D9488",
    bullets: ["HIPAA-compliant structure", "AI automated scheduling assistant", "Integrated billing & history dashboard"],
  },
  {
    id: 2,
    title: "LexPartners & Associates",
    category: "Corporate & Law",
    headline: "Luxury Law Firm Branding & Leads Portal",
    result: "$12M+ Managed Pipeline",
    speed: "1.1s Load Time",
    gradient: "from-amber-600/20 to-stone-700/20",
    color: "#D97706",
    bullets: ["Premium dark luxury layout", "High-intent lead qualification funnel", "Client intake automation"],
  },
  {
    id: 3,
    title: "Zenith Executive Coaching",
    category: "High-Ticket Service",
    headline: "Personal Brand & Application System",
    result: "84% Call Booking Rate",
    speed: "0.8s Load Time",
    gradient: "from-purple-600/20 to-pink-500/20",
    color: "#9333EA",
    bullets: ["Cinematic interactive backgrounds", "Multi-step discovery questionnaire", "Active CRM and calendar sync"],
  },
  {
    id: 4,
    title: "Aetheria SaaS Solutions",
    category: "SaaS & Startups",
    headline: "Product Marketing Site & Automation",
    result: "4.8% Sign-Up Conversion",
    speed: "1.0s Load Time",
    gradient: "from-blue-600/20 to-indigo-500/20",
    color: "#2563EB",
    bullets: ["Interactive real-time mockups", "Stripe-inspired glass animations", "Automated custom invoice delivery"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 z-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-dark-navy opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20 self-start">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Designs That <span className="text-gradient">Drive Revenue</span>
            </h2>
            <p className="text-sm md:text-base text-gray-text max-w-xl leading-relaxed">
              Explore custom-built platforms designed to project absolute trust, speed up conversions, and automate operations.
            </p>
          </div>

          {/* Categories Navigation */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 interactive-hover ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary-blue to-secondary-blue text-white shadow-md"
                    : "text-gray-text hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Layout */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative rounded-2xl glass-panel p-8 flex flex-col justify-between hover:scale-[1.01] hover:border-primary-blue/20 transition-all duration-300 overflow-hidden min-h-[460px] shadow-xl"
              >
                {/* Visual backdrop background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10`} />
                {/* Subtle Grid texture inside Card */}
                <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none -z-10" />

                {/* Card Top Info */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded text-gray-text tracking-wider">
                      {project.category}
                    </span>
                    <a
                      href="#contact"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary-blue hover:border-primary-blue/30 hover:bg-white/10 transition-all duration-300 interactive-hover"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-blue mb-6">
                    {project.headline}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary-blue mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-text leading-relaxed font-sans">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom Results Indicator */}
                <div className="border-t border-white/5 pt-6 mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#13C4F5]/10 flex items-center justify-center text-primary-blue">
                      <Star className="w-4 h-4 fill-primary-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-text font-mono">Performance Metric</div>
                      <div className="text-sm font-bold text-white">{project.result}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-text font-mono">Core Speed</div>
                      <div className="text-sm font-bold text-white">{project.speed}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
