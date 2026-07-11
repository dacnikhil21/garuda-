"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Phone, Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Export Process", href: "/export-process" },
  { name: "Quality", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 w-full",
        scrolled 
          ? "bg-[#0B2B5E]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 z-50 group">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center relative overflow-hidden group-hover:border-accent transition-colors duration-500">
             <span className="text-white font-heading font-bold text-2xl relative z-10 group-hover:text-accent transition-colors duration-500">G</span>
             <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
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
              className="text-[0.75rem] font-medium tracking-[0.15em] text-white/80 hover:text-white transition-colors uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90">
            <Phone className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium tracking-wider">+91 8143944888</span>
          </div>
          <Link href="/contact" className="bg-white/10 hover:bg-accent text-white px-7 py-2.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 border border-white/20 hover:border-accent backdrop-blur-md">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-white">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
