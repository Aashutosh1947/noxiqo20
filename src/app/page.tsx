"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhyNoxiqo from "@/components/WhyNoxiqo";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // SEO Structured Data (Schema markup)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NOXIQO",
    "image": "https://noxiqo.com/og-image.jpg",
    "@id": "https://noxiqo.com/#agency",
    "url": "https://noxiqo.com",
    "telephone": "+15550199",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Global Edge Network",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "description": "NOXIQO helps businesses grow with premium custom websites, conversion-focused design, and modern digital AI-powered automations.",
    "sameAs": [
      "https://twitter.com/noxiqo",
      "https://linkedin.com/company/noxiqo",
      "https://github.com/noxiqo"
    ]
  };

  return (
    <>
      {/* Dynamic SEO JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Loading Sequence */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Custom Mouse Follower */}
      <CustomCursor />

      {/* Fixed Atmospheric Background System */}
      <BackgroundEffects />

      {/* Page Content Wrappers */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col min-h-screen relative z-10"
        >
          {/* Global Navigation Header */}
          <Header />

          {/* Page Sections */}
          <main className="flex-grow">
            <Hero />
            <Trust />
            <Services />
            <WhyNoxiqo />
            <Process />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
