"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for exit slide transition to finish
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const brandName = "NOXIQO";

  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExponential
      },
    }),
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-bg"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }, // custom bezier for organic slide out
          }}
        >
          {/* Futuristic Particle/Grid Background inside Loader */}
          <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-blue opacity-5 blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Sleek Glowing Loading Ring */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{ rotate: { repeat: Infinity, duration: 1.5, ease: "linear" }, opacity: { duration: 0.5 } }}
              className="mb-8 w-12 h-12 rounded-full border-2 border-white/5 border-t-primary-blue shadow-[0_0_15px_rgba(19,196,245,0.2)]"
            />

            {/* Letter reveal logo text */}
            <div className="flex overflow-hidden mb-4">
              {brandName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-5xl font-sans font-extrabold tracking-widest text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] text-gray-text font-mono"
            >
              Intelligence & Design
            </motion.p>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-blue to-secondary-blue shadow-[0_0_10px_#13C4F5]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percent Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] font-mono text-gray-text mt-2"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
