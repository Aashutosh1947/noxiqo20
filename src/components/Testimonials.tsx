"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with NOXIQO was a game-changer. They rebuilt our medical clinic website in 2 weeks. The integrated AI receptionist qualifies patients and books appointments while we sleep. Bookings are up 140%!",
    author: "Dr. Sarah Vance",
    role: "Founding Director, Vance Aesthetic Clinic",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    quote: "Our law firm needed an experience that looked elite and trustworthy. NOXIQO delivered a masterpiece. The lead qualifier on our homepage filters out low-intent clients automatically, saving our associates 15 hours a week.",
    author: "Edward Sterling, Esq.",
    role: "Senior Partner, Sterling Law Group",
    location: "New York, NY",
    rating: 5,
  },
  {
    quote: "We needed a premium marketing site for our SaaS startup that loaded instantly. NOXIQO delivered in 12 days. Our Lighthouse score went to 100, and our conversion rate bumped up by 2.4% on day one.",
    author: "Julian Thorne",
    role: "CEO & Co-founder, Aetheria SaaS",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "They actually care about business metrics, not just pretty colors. The sales copy is outstanding, the animations are buttery smooth, and the CRM automation integration has streamlined our entire onboarding process.",
    author: "Melissa Drake",
    role: "Lead Consultant, Zenith Consulting",
    location: "Sydney, AU",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // Auto slide every 6 seconds
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <section id="testimonials" className="relative py-28 z-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-dark-navy opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-lg leading-relaxed">
            See how our client partners scale their bookings and systems with our premium design packages.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full rounded-2xl glass-panel p-8 sm:p-12 border-white/10 shadow-2xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-blue/10" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-blue text-primary-blue" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="text-base sm:text-xl font-medium text-white italic leading-relaxed mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Client Info Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
                <div>
                  <cite className="not-italic font-bold text-white text-base block sm:inline">
                    {testimonials[activeIndex].author}
                  </cite>
                  <span className="hidden sm:inline mx-2 text-gray-text">•</span>
                  <span className="text-xs text-gray-text font-mono block sm:inline">
                    {testimonials[activeIndex].role}
                  </span>
                </div>
                <div className="text-xs font-mono tracking-wide text-primary-blue uppercase font-bold">
                  {testimonials[activeIndex].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Layout */}
        <div className="flex items-center justify-between mt-10">
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-8 bg-primary-blue" : "w-2 bg-white/10"
                }`}
                aria-label={`Slide to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-blue/30 text-gray-text hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm interactive-hover flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-blue/30 text-gray-text hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm interactive-hover flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
