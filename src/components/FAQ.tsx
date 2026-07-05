"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project delivery timeline?",
    answer: "Our standard launch window is 14 days for custom landing pages and premium branding architectures. More complex applications with advanced AI automation, database operations, or detailed portal logic typically require 3 to 4 weeks.",
  },
  {
    question: "Do you use pre-built templates or build from scratch?",
    answer: "Every single pixel is designed and written from scratch. We do not use generic themes, Webflow templates, or standard WordPress layouts. Your design is entirely unique, inspired by clean high-end aesthetics (like Apple, Stripe, Vercel), and custom coded to stand out.",
  },
  {
    question: "How does the AI automation integration work?",
    answer: "We develop custom intelligent systems that plug directly into your web layout. These can be automated chatbots that qualify leads and answer patient/client FAQs, multi-step smart intake forms, or background agents that write details directly into your CRM (like Salesforce, HubSpot, or custom databases) and trigger automated email flows.",
  },
  {
    question: "What pricing models do you offer?",
    answer: "We believe in complete transparency. We operate on a fixed-price project scope structure with clear milestones. There are zero hidden fees, zero hourly rate inflation, and no forced recurring locking contracts. You receive a concrete proposal covering design, development, launch, and training.",
  },
  {
    question: "How do you guarantee speed and SEO performance?",
    answer: "We build using modern Next.js React frameworks that pre-render and optimize images out of the box. We implement semantic HTML, configure schema markups, set up optimized robots indexing, and deploy to elite global Edge CDN servers. We guarantee Lighthouse performance scores above 90+.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "We don't leave you stranded. Every package includes 30 days of active launch support (training, minor copy/image updates, performance verification). We also offer monthly Maintenance & Growth subscriptions to manage domain health, security patches, backups, and ongoing SEO expansions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 z-20 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-dark-navy opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-lg leading-relaxed">
            Have questions about our technology stack, pricing models, or timelines? We have answers.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors duration-300 hover:border-white/10"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-6 font-semibold text-white transition-colors duration-200 select-none interactive-hover"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-text shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primary-blue" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Body Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-text leading-relaxed font-sans border-t border-white/[0.03] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
