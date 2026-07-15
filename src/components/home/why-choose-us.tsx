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
    <section className="py-12 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            The Garuda Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold leading-tight text-white"
          >
            Why Choose <span className="text-accent">Garuda Exports?</span>
          </motion.h2>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="flex flex-col items-center text-center gap-4 bg-white/5 p-8 rounded-[24px] border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-lg text-white/90 font-medium leading-relaxed">{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
