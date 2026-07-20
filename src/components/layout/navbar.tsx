"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Licenses", href: "/licenses" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // If we are not on the home page, the navbar should always have a solid background
  const isHomePage = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const needsSolidNav = pathname !== "/" && pathname !== "/products";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 w-full",
          needsSolidNav
            ? (scrolled ? "bg-[#0B1F3A]/95 backdrop-blur-2xl border-b border-white/10 py-4 shadow-lg" : "bg-[#0B1F3A] py-6 shadow-md")
            : (scrolled
                ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
                : "bg-transparent py-6 border-b border-transparent")
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 z-50 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
               {/* Snake-like Arrow SVG */}
               <div className="absolute inset-0 text-accent/80 group-hover:text-accent transition-colors duration-500">
                 <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full drop-shadow-md overflow-visible">
                   <g transform="rotate(-15 50 50)">
                     {/* Normalizing path length to 100 makes animating it perfectly accurate */}
                     <path d="M 10 50 A 40 15 0 1 1 90 50 A 40 15 0 1 1 10 50" pathLength="100" strokeDasharray="40 60" strokeLinecap="round">
                       <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                     </path>
                   </g>
                 </svg>
               </div>
               <span className="text-white font-heading font-bold text-sm tracking-widest relative z-10 group-hover:text-accent transition-colors duration-500">GGE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-widest leading-none uppercase drop-shadow-md">
                GARUDA
              </span>
              <span className="text-white/70 text-[0.65rem] font-medium tracking-[0.3em] uppercase leading-tight mt-1 drop-shadow-md">
                Global Exports
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[0.75rem] font-bold tracking-[0.15em] uppercase relative group transition-colors",
                  pathname === link.href ? "text-accent" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium tracking-wider">+91 8143944888</span>
            </div>
            <Link href="/contact" className="bg-accent hover:bg-white hover:text-primary text-white px-7 py-2.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 border border-transparent shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {!mobileMenuOpen && <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Premium Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-[#0B2B5E] flex flex-col justify-center px-8"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <button 
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-6 relative z-10 mt-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-heading font-bold uppercase tracking-wider block transition-colors",
                      pathname === link.href ? "text-accent" : "text-white hover:text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-6 relative z-10"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/50 uppercase tracking-widest">Call Us Now</span>
                  <span className="text-lg font-bold tracking-wider">+91 8143944888</span>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-accent text-white py-3 md:py-4 rounded font-bold tracking-widest md:tracking-[0.2em] uppercase text-center text-xs md:text-sm shadow-xl"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
