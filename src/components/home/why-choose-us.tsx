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
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

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
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              The Garuda Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-white">
              Why Choose <br /> <span className="text-accent">Garuda Exports?</span>
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
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-white/90 font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[500px] mx-auto rounded-[2rem] overflow-hidden border-4 border-white/10 bg-white/5 p-8 flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
              
              {/* Abstract decorative rings to simulate a globe/network */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150%] h-[150%] border-[2px] border-dashed border-white/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100%] h-[100%] border-[1px] border-accent/40 rounded-full"
              />
              
              {/* Center Logo/Icon */}
              <div className="relative w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center">
                <span className="text-5xl text-primary font-heading font-black tracking-tighter">GGE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
