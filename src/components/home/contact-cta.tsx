"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-5 mix-blend-multiply" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-border/50"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Whether you are looking for premium agricultural imports or exploring a long-term trade partnership, our team is ready to assist you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton className="bg-primary text-white hover:bg-primary/90 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full">
              Contact Sales
            </MagneticButton>
            <MagneticButton className="bg-transparent border border-primary text-primary hover:bg-primary/5 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full">
              Download Brochure
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
