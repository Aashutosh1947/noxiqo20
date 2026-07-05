"use client";

import { motion } from "framer-motion";
import { Award, Globe, HeartHandshake, Calendar, Hourglass } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "150+",
    label: "Projects Delivered",
    description: "Premium sites & apps",
  },
  {
    icon: Globe,
    value: "18+",
    label: "Countries Served",
    description: "International clients",
  },
  {
    icon: HeartHandshake,
    value: "99.4%",
    label: "Client Satisfaction",
    description: "5-star rated agency",
  },
  {
    icon: Calendar,
    value: "8+",
    label: "Years Experience",
    description: "In web & design industry",
  },
  {
    icon: Hourglass,
    value: "14 Days",
    label: "Average Delivery",
    description: "Fast turnaround times",
  },
];

export default function Trust() {
  return (
    <section className="relative py-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stat Grid Container */}
        <div className="glass-panel rounded-2xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center p-4 lg:p-0 ${
                  index >= 2 ? "pt-8 md:pt-4 lg:pt-0" : ""
                } ${index >= 3 ? "pt-8 lg:pt-0" : ""}`}
              >
                {/* Metric Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Metric Value */}
                <span className="text-3xl font-display font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </span>

                {/* Metric Label */}
                <span className="text-sm font-semibold text-white mb-0.5">
                  {stat.label}
                </span>

                {/* Metric Description */}
                <span className="text-xs text-gray-text font-mono">
                  {stat.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
