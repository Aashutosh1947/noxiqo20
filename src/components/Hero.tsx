"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // premium easeOutExponential
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Grid background segment overlaying hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/50 to-primary-bg pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* HERO COPY (Left Column) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          {/* Badge indicator */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-primary-blue animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide text-gray-text">
              Premium Web Design &amp; AI Integration
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Build Websites <br />
            That <span className="text-gradient">Grow Your</span> <br />
            Business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-text max-w-xl leading-relaxed font-sans"
          >
            We design premium websites and AI-powered digital experiences that help businesses attract more customers, build trust, and increase revenue.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary-blue to-secondary-blue text-white btn-glow-shadow btn-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book a Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] interactive-hover"
            >
              <span>View Portfolio</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8 pt-8 border-t border-white/5"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-primary-blue text-primary-blue" />
              ))}
              <span className="text-xs font-semibold text-white ml-2">5.0 Agency Rating</span>
            </div>
            <div className="h-px sm:h-4 w-12 sm:w-px bg-white/10" />
            <div className="flex items-center gap-2 text-xs text-gray-text">
              <ShieldCheck className="w-4 h-4 text-primary-blue" />
              <span>100% Risk-Free Guarantee</span>
              <span className="hidden sm:inline">•</span>
              <Zap className="w-4 h-4 text-primary-blue" />
              <span>Ultrafast 14-Day Launch</span>
            </div>
          </motion.div>
        </motion.div>

        {/* HERO ABSTRACT VISUAL (Right Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
          className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center pointer-events-none"
          style={{ perspective: 1000 }}
        >
          {/* Main Visual Board */}
          <div className="relative w-[90%] h-[90%] rounded-2xl glass-panel p-6 flex flex-col justify-between shadow-2xl border-white/10 overflow-hidden">
            {/* Embedded glowing background within the visual board */}
            <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-primary-blue to-secondary-blue opacity-20 blur-3xl" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-texture opacity-25" />

            {/* Header placeholder */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="h-4 w-24 bg-white/5 rounded-full" />
              <div className="h-4 w-12 bg-primary-blue/20 rounded-full" />
            </div>

            {/* Content panel mockups */}
            <div className="flex flex-col gap-4 my-auto relative z-10">
              <div className="h-6 w-3/4 bg-white/10 rounded-md" />
              <div className="h-4 w-1/2 bg-white/5 rounded-md" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-16 rounded bg-gradient-to-tr from-primary-blue/10 to-secondary-blue/10 border border-primary-blue/10 flex flex-col items-center justify-center gap-1">
                  <div className="h-3 w-8 bg-white/20 rounded" />
                  <div className="h-2 w-6 bg-white/10 rounded" />
                </div>
                <div className="h-16 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1">
                  <div className="h-3 w-8 bg-white/20 rounded" />
                  <div className="h-2 w-6 bg-white/10 rounded" />
                </div>
                <div className="h-16 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1">
                  <div className="h-3 w-8 bg-white/20 rounded" />
                  <div className="h-2 w-6 bg-white/10 rounded" />
                </div>
              </div>
            </div>

            {/* Bottom floating card mockup */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-blue/30" />
                <div className="h-2 w-12 bg-white/10 rounded-full" />
              </div>
              <div className="h-4 w-16 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Floating Glow Card 1 */}
          <motion.div
            className="absolute top-[15%] -left-[5%] w-[180px] rounded-xl glass-panel p-4 shadow-xl border-white/10 z-20 flex flex-col gap-2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary-blue flex items-center justify-center text-white">
                <Zap className="w-3 h-3" />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-white">CONVERSION</span>
            </div>
            <div className="text-sm font-extrabold text-white">+142% Leads</div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary-blue"
                animate={{ width: ["0%", "85%", "85%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
          </motion.div>

          {/* Floating Glow Card 2 */}
          <motion.div
            className="absolute bottom-[10%] -right-[5%] w-[200px] rounded-xl glass-panel p-4 shadow-xl border-white/10 z-20 flex flex-col gap-2.5"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-text">AI DEPLOYMENT</span>
              <span className="text-[9px] text-[#13C4F5] bg-primary-blue/10 px-1.5 py-0.5 rounded font-mono">LIVE</span>
            </div>
            <div className="text-xs text-white leading-relaxed">
              &quot;AI Assistant answered 140 client queries today&quot;
            </div>
          </motion.div>

          {/* Glowing particle rings */}
          <div className="absolute top-[5%] right-[5%] w-16 h-16 rounded-full bg-primary-blue opacity-20 blur-md animate-ping" />
        </motion.div>
      </div>
    </section>
  );
}
