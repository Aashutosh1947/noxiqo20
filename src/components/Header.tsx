"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#070B12]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2.5 py-1 group select-none">
          <img
            src="/logo-mark.png"
            alt="NOXIQO"
            className="h-7 md:h-8 w-auto object-contain rounded"
          />
          <span className="text-xl font-sans font-extrabold tracking-wider text-white">
            NOXIQO
          </span>
        </a>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/[0.05] backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-1.5 text-sm font-medium text-gray-text hover:text-white transition-colors duration-300 rounded-full group"
            >
              {item.name}
              <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-primary-blue to-secondary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        {/* CTA - DESKTOP */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary-blue to-secondary-blue text-white shadow-[0_0_15px_rgba(19,196,245,0.25)] hover:shadow-[0_0_25px_rgba(19,196,245,0.45)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-1">
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-text hover:text-white focus:outline-none interactive-hover"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#070B12] border-b border-white/10 shadow-xl overflow-hidden z-30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-text hover:text-white py-2 border-b border-white/5 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full text-center font-semibold bg-gradient-to-r from-primary-blue to-secondary-blue text-white shadow-md hover:scale-[1.01] transition-transform duration-200"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
