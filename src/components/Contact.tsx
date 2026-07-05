"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Website Design",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        service: "Custom Website Design",
        message: "",
      });
      // Clear success alert after 5s
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 z-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] rounded-full bg-dark-navy opacity-35 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary-blue/10 opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* UPPER FINAL CTA */}
        <div className="text-center flex flex-col items-center gap-6 mb-24 max-w-4xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-blue uppercase bg-primary-blue/10 px-3.5 py-1.5 rounded-full border border-primary-blue/20">
            Let&apos;s Build
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Ready to Build <br />
            Something <span className="text-gradient">Exceptional</span>?
          </h2>
          <p className="text-sm md:text-base text-gray-text max-w-xl leading-relaxed">
            Schedule a discovery session or drop your details below to see how we can optimize your online presence and scale conversions.
          </p>
        </div>

        {/* CONTACT BOX & DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details Panel (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-10 rounded-2xl bg-white/[0.02] border border-white/5 p-8 relative">
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-bold text-white">Agency Details</h3>
              <p className="text-xs sm:text-sm text-gray-text leading-relaxed">
                Connect with our brand strategists. We answer query submissions within 12 business hours.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <a 
                  href="mailto:hello@noxiqo.com"
                  className="flex items-center gap-4 text-gray-text hover:text-primary-blue transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary-blue border border-white/5 group-hover:border-primary-blue/30 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-text uppercase">Email us</div>
                    <div className="text-sm font-semibold text-white">hello@noxiqo.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+15550199"
                  className="flex items-center gap-4 text-gray-text hover:text-primary-blue transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary-blue border border-white/5 group-hover:border-primary-blue/30 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-text uppercase">Call us</div>
                    <div className="text-sm font-semibold text-white">+1 (555) 0199</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-text group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary-blue border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-text uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">Global Edge Network</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-xs font-mono text-gray-text">
              ✨ Available for select high-ticket projects starting Q3/Q4.
            </div>
          </div>

          {/* Contact Form Panel (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl glass-panel p-8 sm:p-10 border-white/10 relative shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-text">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/5 hover:border-white/15 focus:border-primary-blue/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/5 hover:border-white/15 focus:border-primary-blue/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-mono text-gray-text">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Company Inc."
                    className="w-full bg-white/5 border border-white/5 hover:border-white/15 focus:border-primary-blue/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-mono text-gray-text">
                    Required Service
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full bg-[#0D1320] border border-white/5 hover:border-white/15 focus:border-primary-blue/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans appearance-none cursor-pointer"
                  >
                    <option value="Custom Website Design">Custom Website Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Landing Pages">Landing Pages</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Performance Optimization">Performance Optimization</option>
                    <option value="SEO Foundation">SEO Foundation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-text">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your project, timing, and target goals..."
                  className="w-full bg-white/5 border border-white/5 hover:border-white/15 focus:border-primary-blue/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-sans resize-none"
                />
              </div>

              {/* Success alert block */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg flex items-center gap-3 text-sm"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Success! Your inquiry has been received. Our team will contact you shortly.</span>
                </motion.div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full relative inline-flex items-center justify-center gap-2 py-4 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary-blue to-secondary-blue text-white disabled:opacity-50 btn-glow-shadow btn-glow hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2 relative z-10">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Inquiry...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center gap-1.5">
                    Submit Proposal Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
