"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, ShieldCheck, Globe } from "lucide-react";

const processes = [
  {
    title: "Sourcing",
    description: "Ethical sourcing directly from Indian farms, ensuring premium quality at the origin.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Quality Check",
    description: "Rigorous testing and grading to meet strict international food safety standards.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Packaging",
    description: "Advanced packaging solutions to maintain freshness and increase shelf life.",
    icon: <Truck className="w-8 h-8" />, // Simplified for icon usage
  },
  {
    title: "Global Shipping",
    description: "Efficient logistics and ocean freight delivering to over 40+ countries.",
    icon: <Globe className="w-8 h-8" />,
  },
];

export function ExportProcess() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            How It Works
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Our Export Timeline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            From the fertile lands of India to global markets, our streamlined process ensures freshness, unmatched quality, and timely delivery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Dashed Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-transparent border-t-2 border-dashed border-accent/40 hidden lg:block -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processes.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col items-center text-center"
              >
                {/* Premium Number Badge */}
                <div className="absolute -top-6 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-bold font-heading text-lg border-4 border-slate-50 shadow-md group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-primary/5 text-accent mb-6 mt-4 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
