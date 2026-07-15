"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Leaf, ShieldCheck, Target } from "lucide-react";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function AboutPage() {
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
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] md:leading-tight"
          >
            Bringing India's <br />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Finest to the World</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Garuda Global Exports is a premier agricultural export house dedicated to sourcing, processing, and delivering the highest quality Indian produce to international markets.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors duration-300">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                To bridge the gap between Indian farmers and the global market by providing a transparent, ethical, and highly efficient export pipeline. We strive to deliver uncompromising quality while ensuring fair trade practices at the origin.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors duration-300">
                <Globe2 className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                To be recognized globally as the most trusted and reliable partner for Indian agricultural exports, setting the gold standard for quality control, logistics, and customer satisfaction in the B2B commodity sector.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">The principles that drive our daily operations and long-term strategy.</p>
          </div>

          <div className="overflow-hidden relative">
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8 pb-8 md:pb-0">
              {[
                { title: "Uncompromising Quality", desc: "Rigorous testing and grading to meet international standards.", icon: ShieldCheck },
                { title: "Ethical Sourcing", desc: "Direct farm relationships ensuring fair compensation and sustainable practices.", icon: Leaf },
                { title: "Global Reliability", desc: "Timely delivery through an advanced logistical network spanning 40+ countries.", icon: Globe2 },
              ].map((value, index) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center p-4 md:p-8 flex flex-col items-center bg-transparent"
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-slate-50 border-2 border-accent/20 flex items-center justify-center mb-3 md:mb-6 shadow-sm shrink-0">
                    <value.icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold font-heading text-primary mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-xs md:text-base text-slate-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile Marquee */}
            <div className="flex md:hidden relative -mx-6 px-6">
              <div className="flex gap-4 animate-marquee active:[animation-play-state:paused] w-max">
                {[
                  { title: "Uncompromising Quality", desc: "Rigorous testing and grading to meet international standards.", icon: ShieldCheck },
                  { title: "Ethical Sourcing", desc: "Direct farm relationships ensuring fair compensation and sustainable practices.", icon: Leaf },
                  { title: "Global Reliability", desc: "Timely delivery through an advanced logistical network spanning 40+ countries.", icon: Globe2 },
                  // Duplicated for seamless loop
                  { title: "Uncompromising Quality", desc: "Rigorous testing and grading to meet international standards.", icon: ShieldCheck },
                  { title: "Ethical Sourcing", desc: "Direct farm relationships ensuring fair compensation and sustainable practices.", icon: Leaf },
                  { title: "Global Reliability", desc: "Timely delivery through an advanced logistical network spanning 40+ countries.", icon: Globe2 },
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="w-[250px] shrink-0 text-center p-6 flex flex-col items-center bg-white border border-gray-100 rounded-2xl shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-accent/20 flex items-center justify-center mb-4 shadow-sm shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-primary mb-2">{value.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Reusing the Why Choose Us component */}
      <WhyChooseUs />
    </div>
  );
}
