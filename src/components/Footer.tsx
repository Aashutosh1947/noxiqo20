"use client";

import { ArrowUp, Mail, Compass } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#070B12] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] rounded-full bg-dark-navy opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <a href="#home" className="flex items-center group">
            <span className="text-xl font-sans font-extrabold tracking-wider text-white">
              NOXIQO
            </span>
          </a>
          <p className="text-sm text-gray-text leading-relaxed max-w-xs">
            We design premium websites and AI-powered digital experiences that help high-growth businesses attract customers, build trust, and scale automation.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="Dribbble"
            >
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Directory Links Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {["Home", "Portfolio", "Process", "About", "Testimonials", "FAQ"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase() === "about" ? "why-noxiqo" : item.toLowerCase()}`}
                  className="text-sm text-gray-text hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              "Custom Website Design",
              "AI Automation Solutions",
              "Performance Optimization",
              "SEO Foundation & Growth",
              "Website Maintenance",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="text-sm text-gray-text hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Newsletter Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <p className="text-sm text-gray-text leading-relaxed">
            Have a project in mind? Connect with us directly or schedule a discovery workshop.
          </p>
          <a
            href="mailto:hello@noxiqo.com"
            className="flex items-center gap-2 text-sm text-primary-blue font-medium hover:text-white transition-colors duration-200 group"
          >
            <Mail className="w-4 h-4" />
            <span>hello@noxiqo.com</span>
          </a>
        </div>
      </div>

      {/* Copyright & Scroll to Top */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-text">
          &copy; {new Date().getFullYear()} NOXIQO. All rights reserved. Designed for businesses aiming for the future.
        </p>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-blue/30 text-gray-text hover:text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-black/30 backdrop-blur-md interactive-hover flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        )}
      </div>
    </footer>
  );
}
