"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // High performance event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, .interactive-hover"
      );
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || typeof window === "undefined") return null;

  // Detect touch devices to avoid drawing cursor on mobile
  const isTouchDevice = 
    "ontouchstart" in window || 
    navigator.maxTouchPoints > 0;

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-blue/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          backgroundColor: hovered ? "rgba(19, 196, 245, 0.08)" : "rgba(19, 196, 245, 0)",
          borderColor: hovered ? "rgba(31, 111, 255, 0.8)" : "rgba(19, 196, 245, 0.4)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary-blue pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#13C4F5]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.08 }}
      />
    </>
  );
}
