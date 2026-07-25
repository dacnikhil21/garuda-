"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Leaf, ShieldCheck, Target } from "lucide-react";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export function AboutClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* About Premium Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#020813]">
        {/* Premium Dark Gradient & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020813] via-[#051229] to-[#020813]" />
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-accent/5 rounded-full blur-[80px] md:blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md"
          >
            Empowering Indian Agriculture
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Bridging Indian Farmers to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-accent to-amber-400">Global Market</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Garuda Global Exports is a premier agricultural export house dedicated to sourcing, processing, and delivering the highest quality Indian produce to international markets.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Our Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  To deliver authentic, unadulterated, and sustainably sourced Indian agricultural products to consumers worldwide. We empower local farming communities through fair trade practices while providing global clients with unmatched quality and service.
                </p>
              </div>
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {["Direct Sourcing from Ethical Farmers", "Rigorous Multi-Tiered Quality Control", "Transparent & Timely International Supply Chain"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent">
                  <Globe2 className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  To become the world's most trusted partner for Indian agricultural exports, recognized for operational excellence, customer satisfaction, and promoting sustainable, eco-friendly farming practices across India.
                </p>
              </div>
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {["Global Benchmark in Agricultural Quality", "Expanding Footprint Across 50+ Countries", "Zero-Pesticide & Certified Organic Leadership"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mt-4">
              What Drives Our Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Uncompromised Quality</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                From crop inspection at the farm gate to vacuum packing and container sealing, every step is rigorously monitored for international safety standards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Sustainability First</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                We advocate for eco-conscious farming, water conservation, and soil health preservation, ensuring a sustainable future for our agricultural ecosystem.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Global Reliability</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Our logistics network and export expertise guarantee seamless customs clearance, competitive freight pricing, and on-time port delivery globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

    </div>
  );
}
