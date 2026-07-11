"use client";

import { motion } from "framer-motion";

const countries = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Germany",
  "France",
  "Australia",
  "Canada",
  "Japan",
  "Singapore",
  "Netherlands",
  "Qatar",
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
          Trusted By Partners Across
        </h2>
        <p className="text-3xl md:text-4xl font-heading font-bold">
          40+ Countries Worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center"
        >
          {/* Double the array for seamless looping */}
          {[...countries, ...countries].map((country, index) => (
            <span
              key={`${country}-${index}`}
              className="text-2xl md:text-4xl font-heading font-medium text-white/40 hover:text-white transition-colors duration-300"
            >
              {country}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
