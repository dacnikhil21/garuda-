"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Leaf, ShieldCheck, Target } from "lucide-react";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white pt-24">
      
      {/* About Hero Section */}
      <section className="bg-[#0B2B5E] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Bringing India's <br />
            <span className="text-accent">Finest to the World</span>
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To bridge the gap between Indian farmers and the global market by providing a transparent, ethical, and highly efficient export pipeline. We strive to deliver uncompromising quality while ensuring fair trade practices at the origin.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8">
                <Globe2 className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be recognized globally as the most trusted and reliable partner for Indian agricultural exports, setting the gold standard for quality control, logistics, and customer satisfaction in the B2B commodity sector.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">The principles that drive our daily operations and long-term strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="text-center p-8 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-accent/20 flex items-center justify-center mb-6 shadow-sm">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing the Why Choose Us component */}
      <WhyChooseUs />
    </div>
  );
}
