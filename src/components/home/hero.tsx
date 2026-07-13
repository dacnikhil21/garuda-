"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/homepagehero.mp4.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient at the top specifically to make the Navbar logo/text readable */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="container relative z-20 mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-white/30 text-white text-[0.7rem] font-bold tracking-widest uppercase mb-6 bg-black/20 backdrop-blur-md">
            Garuda Global Exports
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl">
            Bringing India&apos;s <br />
            <span className="text-accent">Finest</span> to the World
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg md:text-xl text-white max-w-2xl font-light tracking-wide drop-shadow-lg"
        >
          Garuda Global Exports is a trusted exporter of premium agricultural products. Delivering quality, reliability and excellence across global markets.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex gap-4"
        >
           <Link href="/products" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded text-sm font-bold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-xl shadow-black/20">
             Explore Products
           </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-white text-[0.65rem] font-medium tracking-[0.3em] uppercase drop-shadow-md">
          Scroll To Explore
        </span>
        <motion.div
          animate={{ height: ["0px", "40px", "0px"], y: [0, 20, 40] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] bg-white opacity-80 overflow-hidden shadow-lg"
          style={{ height: "40px" }}
        />
      </motion.div>
    </section>
  );
}
