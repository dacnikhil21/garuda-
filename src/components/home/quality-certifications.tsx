"use client";

import { motion } from "framer-motion";

const certs = [
  "ISO 9001:2015",
  "FSSAI Approved",
  "APEDA Certified",
  "HACCP Certified",
  "FDA Registered",
  "Halal Certified"
];

export function QualityCertifications() {
  return (
    <section className="py-12 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Uncompromising Quality</h2>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            We adhere to the highest international standards of food safety and quality control. Our facilities and processes are certified by globally recognized organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3 md:mb-4">
                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-accent" />
              </div>
              <span className="font-medium text-xs md:text-sm text-white/90 text-center">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
