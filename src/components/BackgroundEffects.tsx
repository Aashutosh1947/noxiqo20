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
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      {/* Dark Navy Atmospheric Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-dark-navy opacity-30 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-dark-navy opacity-30 blur-[120px]" />

      {/* Interactive Glowing Orb 1: Primary Blue */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-primary-blue opacity-15 blur-[80px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Glowing Orb 2: Secondary Blue */}
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-secondary-blue opacity-10 blur-[100px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Glowing Orb 3: Accent Purple/Navy */}
      <motion.div
        className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-dark-navy opacity-20 blur-[90px]"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 30, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
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
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
    </div>
  );
}
