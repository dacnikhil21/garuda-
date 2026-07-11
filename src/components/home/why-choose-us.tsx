"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "100% Ethical Sourcing directly from farms",
  "Rigorous Quality Control at every stage",
  "State-of-the-art packaging facilities",
  "Timely global delivery network",
  "Transparent pricing and documentation",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a111a] text-white relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              The Garuda Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Why Choose <br /> Garuda Exports?
            </h2>
            
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-white/80 font-light">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Side (Mockup for a premium graphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
              
              {/* Abstract decorative rings to simulate a globe/network */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150%] h-[150%] border-[1px] border-dashed border-accent/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100%] h-[100%] border-[1px] border-accent/30 rounded-full"
              />
              
              {/* Center Logo/Icon */}
              <div className="relative w-24 h-24 rounded-full bg-accent/10 border border-accent/50 flex items-center justify-center backdrop-blur-md">
                <span className="text-4xl text-accent font-heading font-bold">G</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
