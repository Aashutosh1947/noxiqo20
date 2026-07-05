"use client";

import { ArrowUp, Mail } from "lucide-react";
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
              href="https://x.com/1noxiqo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/1noxiqo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1EHPa39g9o/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-text hover:text-primary-blue hover:border-primary-blue/30 transition-colors duration-300 interactive-hover"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
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
                  href={`#${item.toLowerCase()}`}
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
