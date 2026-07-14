"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Our Legacy
            </h3>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              A Decade of Excellence in Global Exports.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Garuda Global Exports, we bridge the gap between Indian farmers and the international market. Sourcing the finest agricultural produce, we ensure that every grain of rice and every spice tells a story of quality, authenticity, and trust.
            </p>
            
            <div className="flex flex-row flex-wrap gap-6 sm:gap-12 mb-10">
              <div>
                <p className="text-4xl font-heading font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-primary mb-2">10k+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Metric Tons Exported</p>
              </div>
            </div>

            <MagneticButton className="bg-primary text-white hover:bg-primary/90">
              Read Our Story
            </MagneticButton>
          </motion.div>

          {/* Parallax Images */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-2/3 h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" alt="Premium Rice" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-1/2 h-[350px] rounded-2xl overflow-hidden shadow-2xl z-20">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img src="https://images.unsplash.com/photo-1596649280962-e64e1d1ebc96?q=80&w=2070&auto=format&fit=crop" alt="Indian Spices" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
