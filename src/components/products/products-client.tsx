"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ui/product-card";
import { 
  ArrowRight, 
  Leaf, 
  Globe,
  Globe2, 
  PackageCheck, 
  ShieldCheck, 
  Download, 
  MapPin, 
  Ship, 
  FileText,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "All", image: "/images/categories/all.jpg" },
  { name: "Rice", image: "/images/categories/rice.jpg" },
  { name: "Vegetables", image: "/images/categories/vegetables.jpg" },
  { name: "Fruits", image: "/images/categories/fruits.jpg" },
  { name: "Spices", image: "/images/categories/spices.jpg" },
  { name: "Makhana", image: "/images/categories/makhana.jpg" }
];

export function ProductsClient({ initialProducts }: { initialProducts: any[] }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? initialProducts 
    : initialProducts.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Garuda Global Exports, I am interested in inquiring about ${productName}.`;
    return `https://wa.me/918143944888?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-accent/30 selection:text-primary">
      
      {/* Premium Hero Section */}
      <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Full Screen Video Background */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/producthero.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay just for text readability, removing heavy color effects */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl">
                Global <br />
                <span className="font-bold text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Agricultural</span> <br />
                <span className="italic font-serif">Excellence.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl font-light leading-relaxed mb-10 drop-shadow-md">
                Carefully sourced from India's finest farms and prepared for global export with uncompromising quality standards.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link href="#catalog" className="w-full sm:w-auto px-6 py-2.5 bg-white text-[#0B1F3A] hover:bg-gray-50 rounded-full font-bold tracking-widest uppercase text-xs transition-all duration-300 text-center">
                  Explore Catalog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. QUALITY PROMISE */}
      <section className="bg-[#0B1F3A] py-0 md:py-16 border-b border-white/5 relative z-20">
        <div className="container mx-auto px-6 relative z-10">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-12 max-w-5xl mx-auto">
            {[
              { icon: Leaf, label: "100% Farm Fresh" },
              { icon: Globe2, label: "Global Export Quality" },
              { icon: PackageCheck, label: "International Packaging" },
              { icon: ShieldCheck, label: "Certified Products" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center gap-4 p-8 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 ease-out" />
                <span className="text-white font-bold tracking-widest text-xs uppercase text-center">{feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Auto-Scrolling Marquee */}
          <div className="flex md:hidden overflow-hidden relative -mx-6">
            <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max px-4">
              {[
                { icon: Leaf, label: "100% Farm Fresh" },
                { icon: Globe2, label: "Global Export Quality" },
                { icon: PackageCheck, label: "International Packaging" },
                { icon: ShieldCheck, label: "Certified Products" },
                // Duplicate for seamless infinite scroll
                { icon: Leaf, label: "100% Farm Fresh" },
                { icon: Globe2, label: "Global Export Quality" },
                { icon: PackageCheck, label: "International Packaging" },
                { icon: ShieldCheck, label: "Certified Products" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-[160px] shrink-0"
                >
                  <feature.icon className="w-6 h-6 text-accent" />
                  <span className="text-white font-bold tracking-widest text-[10px] uppercase text-center">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-10 pb-16 md:py-24 bg-slate-50 relative overflow-hidden" id="catalog">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-[#0B1F3A] font-light">
              Our <span className="font-semibold">Complete Catalog</span>
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mt-8 mb-12"></div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
            <button
              onClick={() => setActiveCategory("All")}
              className={`flex flex-col items-center group`}
            >
              <div className={cn(
                "w-16 sm:w-24 h-16 sm:h-24 rounded-full sm:rounded-2xl flex items-center justify-center mb-3 transition-colors duration-300",
                activeCategory === "All" ? "bg-[#0B1F3A] text-white" : "bg-white text-slate-400 group-hover:bg-slate-100 shadow-sm border border-slate-100"
              )}>
                <span className="text-sm sm:text-base font-bold tracking-widest uppercase">All</span>
              </div>
              <span className={cn(
                "text-[10px] sm:text-xs font-bold tracking-widest uppercase",
                activeCategory === "All" ? "text-accent" : "text-slate-400 group-hover:text-primary"
              )}>
                All Products
              </span>
            </button>
            {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className="flex flex-col items-center group"
                >
                  <div className={cn(
                    "relative w-16 sm:w-24 h-16 sm:h-24 rounded-full sm:rounded-2xl overflow-hidden mb-3 transition-all duration-300",
                    activeCategory === cat.name 
                      ? "ring-2 ring-offset-2 ring-accent"
                      : "ring-0"
                  )}>
                    <Image src={cat.image} alt={cat.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <span className={cn(
                    "text-[10px] sm:text-xs font-bold tracking-widest uppercase",
                    activeCategory === cat.name ? "text-accent" : "text-slate-400 group-hover:text-primary"
                  )}>
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-0">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <div key={product.name} className="h-full">
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Info Sections */}
      <section className="py-12 md:py-24 bg-[#f8f9fa] relative border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 overflow-hidden relative">
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-16 pb-8 md:pb-0">
            {[
              {
                icon: MapPin,
                title: "Global Reach",
                desc: "Exporting to over 35 countries across the Middle East, Europe, Africa, and North America with localized compliance."
              },
              {
                icon: ShieldCheck,
                title: "Strict Compliance",
                desc: "Every shipment adheres strictly to international phytosanitary standards, SGS inspections, and ISO guidelines."
              },
              {
                icon: Ship,
                title: "Reliable Logistics",
                desc: "End-to-end logistics solutions ensuring your goods arrive on time, in perfect condition, via sea or air freight."
              }
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group bg-white border border-gray-100 md:border-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#0B1F3A] transition-colors duration-500 shadow-sm">
                  <info.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0B1F3A] mb-3 md:mb-4">{info.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{info.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Marquee */}
          <div className="flex md:hidden relative -mx-4">
            <div className="flex gap-4 animate-marquee active:[animation-play-state:paused] w-max px-4">
              {[
                {
                  icon: MapPin,
                  title: "Global Reach",
                  desc: "Exporting to over 35 countries across the Middle East, Europe, Africa, and North America with localized compliance."
                },
                {
                  icon: ShieldCheck,
                  title: "Strict Compliance",
                  desc: "Every shipment adheres strictly to international phytosanitary standards, SGS inspections, and ISO guidelines."
                },
                {
                  icon: Ship,
                  title: "Reliable Logistics",
                  desc: "End-to-end logistics solutions ensuring your goods arrive on time, in perfect condition, via sea or air freight."
                },
                // Duplicated for seamless marquee
                {
                  icon: MapPin,
                  title: "Global Reach",
                  desc: "Exporting to over 35 countries across the Middle East, Europe, Africa, and North America with localized compliance."
                },
                {
                  icon: ShieldCheck,
                  title: "Strict Compliance",
                  desc: "Every shipment adheres strictly to international phytosanitary standards, SGS inspections, and ISO guidelines."
                },
                {
                  icon: Ship,
                  title: "Reliable Logistics",
                  desc: "End-to-end logistics solutions ensuring your goods arrive on time, in perfect condition, via sea or air freight."
                }
              ].map((info, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center text-center group bg-white border border-gray-100 p-5 rounded-2xl w-[220px] shrink-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f8f9fa] border border-gray-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#0B1F3A] transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-[#0B1F3A] mb-2">{info.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed text-[11px]">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative py-16 md:py-24 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-light text-white mb-8 leading-tight">
              Ready to Import <br /><span className="font-semibold text-accent drop-shadow-lg">India's Finest?</span>
            </h2>
            <p className="text-xl text-white/70 font-light mb-12">
              Partner with Garuda Global Exports for reliable, premium agricultural products. Contact our export specialists today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <a 
                href="https://wa.me/918143944888?text=Hello%20Garuda%20Global%20Exports,%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-white text-[#0B1F3A] rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 md:gap-3"
              >
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <Link href="/contact" className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-transparent border border-white/30 text-white rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
