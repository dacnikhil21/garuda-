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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Our Export Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From the fertile lands of India to global markets, our streamlined process ensures freshness, quality, and timely delivery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processes.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-shadow relative group"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold font-heading text-xl border-4 border-white">
                  {index + 1}
                </div>
                
                <div className="text-primary mb-6 mt-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-center text-muted-foreground text-sm leading-relaxed">
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
