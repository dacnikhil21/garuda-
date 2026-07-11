"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if splash has already played this session
    const hasPlayed = sessionStorage.getItem("splashPlayed");
    if (hasPlayed) {
      setShow(false);
      return;
    }

    // Safety timeout: 11 seconds (accommodates your 10s video + buffer)
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splashPlayed", "true");
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShow(false);
    sessionStorage.setItem("splashPlayed", "true");
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
          
          {/* Video element - plays full 10 seconds then hides */}
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] brightness-[1.05]"
            onEnded={handleSkip}
          >
            <source src="/intro.mp4 (2).mp4" type="video/mp4" />
          </video>

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
