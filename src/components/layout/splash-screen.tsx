"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Safety timeout: 11 seconds (accommodates your 10s video + buffer)
    const timer = setTimeout(() => {
      setShow(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-full aspect-video md:h-full md:w-full md:aspect-auto">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] brightness-[1.05]"
              onEnded={handleSkip}
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>

            {/* Vignette overlays - visible on mobile/portrait to blend video edges */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none md:hidden" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none md:hidden" />
          </div>

          {/* Premium "Skip Intro" Button */}
          <button 
            onClick={handleSkip}
            className="absolute bottom-10 right-10 z-50 text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors border-b border-transparent hover:border-white pb-1"
          >
            Skip Intro
          </button>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
