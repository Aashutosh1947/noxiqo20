"use client";

import { motion } from "framer-motion";

export default function TeamMemberYadunadan() {
  const containerVariants = {
    hidden: {},
    visible: {
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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="team-yadunadan" className="relative py-28 z-20 overflow-hidden bg-[#0B1120] border-t border-white/5">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Portrait Column (Left Side on Desktop, First on Mobile) */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:col-span-5 order-first"
          >
            {/* Soft Blue Glow behind the image */}
            <div className="absolute inset-0 w-[85%] h-[85%] rounded-full bg-[#3B82F6]/15 blur-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Portrait Frame */}
            <div className="relative group overflow-hidden rounded-[16px] border border-white/10 shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-full">
              <img
                src="/team-yadunadan.jpg"
                alt="Yadunadan Singh"
                className="w-full h-auto object-cover rounded-[16px] transition-all duration-700 ease-out scale-100 hover:scale-[1.02] filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Column (Right Side on Desktop, Second on Mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center gap-6 lg:col-span-7"
          >
            {/* Label */}
            <span className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] uppercase bg-[#3B82F6]/10 px-3.5 py-1.5 rounded-full border border-[#3B82F6]/20 self-start">
              CORE TEAM
            </span>

            {/* Typography Heading & Subheading */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
                Yadunadan Singh
              </h2>
              <h3 className="text-base md:text-lg font-mono text-[#3B82F6] font-semibold tracking-wide">
                SEO &amp; Content Strategist
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-text leading-relaxed max-w-xl font-sans">
              Delivers growth-focused SEO strategies backed by in-depth competitor analysis and high-quality content. Focused on improving search visibility, increasing organic traffic, and building content that drives measurable business results.
            </p>

            {/* Skills section styled as glassmorphic badges */}
            <div className="mt-4 flex flex-col gap-3.5">
              <h4 className="text-xs font-mono text-gray-text uppercase tracking-wider font-semibold">
                Expertise Area
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Technical & On-Page SEO",
                  "Content Writing",
                  "Competitor Research"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/5 transition-all duration-300 text-xs sm:text-sm text-white font-medium interactive-hover select-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
