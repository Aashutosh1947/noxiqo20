"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Palette, 
  FileText, 
  Cpu, 
  Workflow, 
  Zap, 
  Search, 
  Wrench, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Tailor-made, pixel-perfect, premium designs inspired by top digital brands. Built from scratch with smooth user journeys that turn visitors into high-ticket clients.",
    tag: "Design",
  },
  {
    icon: Layers,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, lightning-fast digital asset. Overhaul layout, copy structure, and graphics to project premium trust.",
    tag: "Redesign",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting single-page systems focused on one specific goal: capturing leads. Optimized copy, bulletproof social proof, and flawless CTAs.",
    tag: "Conversion",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Integrate custom AI chatbots, lead qualifiers, and intelligence features into your site to capture, vet, and schedule clients 24/7 without manual effort.",
    tag: "AI",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Connect your website directly to your CRM, email campaigns, calendar, and workflows to synchronize leads and automate administrative tasks.",
    tag: "Automation",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "We tune your core web vitals to load under 1.2s. Achieve flawless scores on Google Lighthouse to enhance retention and organic search rank.",
    tag: "Speed",
  },
  {
    icon: Search,
    title: "SEO Foundation",
    description: "Setup high-intent keyword strategies, clean site hierarchy, structured metadata, schema, and robots protocols so your business ranks where it belongs.",
    tag: "SEO",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Regular checkups, uptime monitoring, security patches, copy tweaks, and hosting management. Keep your site secure and operating at peak performance.",
    tag: "Support",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="services" className="relative py-28 z-20 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary-blue opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Services Built to <span className="text-gradient">Scale Your Business</span>
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-xl leading-relaxed">
            We don&apos;t just build templates. We craft tailored, high-converting digital environments integrated with automated intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative rounded-2xl glass-panel p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 border-white/5 hover:border-primary-blue/30 shadow-lg shadow-black/10 h-80"
              >
                {/* Embedded Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-secondary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div>
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-medium tracking-wider text-gray-text uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {service.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-blue transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs text-gray-text leading-relaxed line-clamp-4 relative z-10">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Arrow Link */}
                <div className="flex items-center gap-2 mt-4 text-xs font-mono font-bold text-white group-hover:text-primary-blue transition-colors duration-300 relative z-10 self-start">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
