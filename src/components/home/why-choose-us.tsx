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
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 30 }}
              whileHover="hover"
              className="relative w-full max-w-[600px] mx-auto group cursor-default"
            >
              {/* Ambient Glow / Premium Shadow */}
              <motion.div 
                variants={{
                  hover: { opacity: 0.8, scale: 1.05 }
                }}
                className="absolute -inset-4 bg-accent/20 blur-3xl rounded-[3rem] opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ zIndex: -1 }}
              />

              {/* Video Container */}
              <motion.div 
                variants={{
                  hover: { scale: 1.02 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative aspect-[4/3] sm:aspect-video w-full rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl p-px"
              >
                {/* Thin metallic gold border mask */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-accent/60 via-accent/10 to-accent/40" />
                
                {/* Inner container to clip video and maintain border width */}
                <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-[#0A1628] z-10">
                  <motion.video
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/garudastory.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                </div>
              </motion.div>

              {/* Live Badge Below Video */}
              <motion.div 
                variants={{
                  hover: { y: -2 }
                }}
                className="mt-6 flex items-center justify-center gap-3"
              >
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </div>
                <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                  Live Export Story
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
