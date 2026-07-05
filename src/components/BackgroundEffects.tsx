"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-primary-bg">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />

      {/* Dark Navy Atmospheric Background Glows (Static for performance) */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-dark-navy opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-dark-navy opacity-20 blur-[120px] pointer-events-none" />

      {/* Interactive Glowing Orb 1: Primary Blue (Compositor-only opacity pulse) */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full bg-primary-blue blur-[80px] pointer-events-none"
        animate={{
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Glowing Orb 2: Secondary Blue (Compositor-only opacity pulse) */}
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-secondary-blue blur-[90px] pointer-events-none"
        animate={{
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Radial Vignette Mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(7, 11, 18, 0.8) 80%, #070B12 100%)"
        }}
      />

      {/* Premium Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
    </div>
  );
}
