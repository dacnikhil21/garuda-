"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Leaf, 
  Globe, 
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
  { name: "All", image: "https://image.pollinations.ai/prompt/assorted%20agricultural%20products%20spices%20fruits%20vegetables%20rice%20india?width=800&height=800&nologo=true" },
  { name: "Rice", image: "https://image.pollinations.ai/prompt/various%20types%20of%20rice%20grains%20in%20bowls?width=800&height=800&nologo=true" },
  { name: "Vegetables", image: "https://image.pollinations.ai/prompt/fresh%20farm%20vegetables%20assortment?width=800&height=800&nologo=true" },
  { name: "Fruits", image: "https://image.pollinations.ai/prompt/fresh%20tropical%20fruits%20mangoes%20bananas?width=800&height=800&nologo=true" },
  { name: "Spices", image: "https://image.pollinations.ai/prompt/indian%20spices%20assortment%20colorful?width=800&height=800&nologo=true" },
  { name: "Makhana", image: "https://image.pollinations.ai/prompt/roasted%20makhana%20fox%20nuts?width=800&height=800&nologo=true" }
];

export const allProducts = [
  // Rice
  { name: "Raw Rice", category: "Rice", image: "https://image.pollinations.ai/prompt/macro%20photography%20of%20raw%20white%20rice%20grains%20agricultural?width=800&height=800&nologo=true" },
  { name: "Basmathi Rice", category: "Rice", image: "https://image.pollinations.ai/prompt/long%20grain%20basmati%20rice%20in%20a%20wooden%20bowl?width=800&height=800&nologo=true" },
  { name: "IR 64 Rice", category: "Rice", image: "https://image.pollinations.ai/prompt/white%20rice%20grains%20pile%20export%20quality?width=800&height=800&nologo=true" },
  { name: "Sona Masuri", category: "Rice", image: "https://image.pollinations.ai/prompt/medium%20grain%20sona%20masoori%20rice%20uncooked?width=800&height=800&nologo=true" },
  { name: "Broken Rice", category: "Rice", image: "https://image.pollinations.ai/prompt/broken%20white%20rice%20grains%20texture?width=800&height=800&nologo=true" },
  
  // Vegetables
  { name: "Onions", category: "Vegetables", image: "https://image.pollinations.ai/prompt/fresh%20red%20onions%20agricultural%20export?width=800&height=800&nologo=true" },
  { name: "Mirchi G4", category: "Vegetables", image: "https://image.pollinations.ai/prompt/spicy%20dry%20red%20chilli%20peppers%20pile?width=800&height=800&nologo=true" },
  
  // Fruits
  { name: "Banana", category: "Fruits", image: "https://image.pollinations.ai/prompt/fresh%20yellow%20bananas%20bunch?width=800&height=800&nologo=true" },
  { name: "Pomegranate", category: "Fruits", image: "https://image.pollinations.ai/prompt/fresh%20red%20pomegranate%20cut%20open%20with%20seeds?width=800&height=800&nologo=true" },
  { name: "Alphonso Mango", category: "Fruits", image: "https://image.pollinations.ai/prompt/fresh%20alphonso%20mango%20yellow%20ripe?width=800&height=800&nologo=true" },
  { name: "Banganapalli Mango", category: "Fruits", image: "https://image.pollinations.ai/prompt/large%20yellow%20banganapalli%20mango?width=800&height=800&nologo=true" },
  
  // Spices
  { name: "Cardamom", category: "Spices", image: "https://image.pollinations.ai/prompt/green%20cardamom%20pods%20spices?width=800&height=800&nologo=true" },
  { name: "Cloves", category: "Spices", image: "https://image.pollinations.ai/prompt/dried%20cloves%20spices%20macro?width=800&height=800&nologo=true" },
  { name: "Garlic", category: "Spices", image: "https://image.pollinations.ai/prompt/fresh%20white%20garlic%20bulbs?width=800&height=800&nologo=true" },
  { name: "Sesame Seeds", category: "Spices", image: "https://image.pollinations.ai/prompt/white%20sesame%20seeds%20pile%20macro?width=800&height=800&nologo=true" },
  { name: "Red Chilli", category: "Spices", image: "https://image.pollinations.ai/prompt/vibrant%20dry%20red%20chilli%20peppers?width=800&height=800&nologo=true" },
  
  // Makhana
  { name: "Premium Makhana", category: "Makhana", image: "https://image.pollinations.ai/prompt/white%20makhana%20fox%20nuts%20in%20a%20bowl?width=800&height=800&nologo=true" },
];

export default function ProductsCatalogue() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Garuda Global Exports, I am interested in inquiring about ${productName}.`;
    return `https://wa.me/918143944888?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-accent/30 selection:text-primary">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
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
              <h2 className="text-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-accent"></span>
                International Export Catalogue
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white leading-[1.1] mb-8 drop-shadow-2xl">
                Premium <br />
                <span className="font-semibold text-white">Agricultural Products</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl font-light leading-relaxed mb-12 drop-shadow-md">
                Carefully sourced from India's finest farms and prepared for global export with uncompromising quality standards.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link 
                  href="#catalog"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-[#0B1F3A] rounded-full text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] text-center"
                >
                  Explore Catalog
                </Link>
                <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-500">
                  <Download className="w-4 h-4" /> Download Catalogue
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. QUALITY PROMISE */}
      <section className="bg-[#0B1F3A] py-16 border-b border-white/5 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x-0 md:divide-x divide-white/10">
            {[
              { icon: Leaf, label: "100% Farm Fresh" },
              { icon: Globe, label: "Global Export Quality" },
              { icon: PackageCheck, label: "International Packaging" },
              { icon: ShieldCheck, label: "Certified Products" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <feature.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-white text-sm tracking-widest uppercase font-semibold">{feature.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG WITH TABS */}
      <section id="catalog" className="py-32 bg-[#FAF9F6] relative z-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-[#0B1F3A] font-light">
              Our <span className="font-semibold">Complete Catalog</span>
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mt-8 mb-12"></div>
            
            {/* Horizontal Scrolling Categories with Pictures */}
            <div className="flex overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-6 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={cn(
                    "relative flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-[1.25rem] sm:rounded-3xl overflow-hidden group transition-all duration-300 border-[3px] sm:border-4",
                    activeCategory === cat.name 
                      ? "border-accent shadow-xl shadow-accent/20 scale-105"
                      : "border-transparent hover:border-accent/50 shadow-md hover:shadow-lg"
                  )}
                >
                  <div className="absolute inset-0">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className={cn(
                    "absolute inset-0 transition-colors duration-300",
                    activeCategory === cat.name 
                      ? "bg-black/40"
                      : "bg-black/60 group-hover:bg-black/50"
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
                    <span className={cn(
                      "font-bold uppercase tracking-widest text-[0.65rem] sm:text-xs lg:text-sm drop-shadow-lg transition-colors duration-300",
                      activeCategory === cat.name ? "text-accent" : "text-white group-hover:text-white"
                    )}>
                      {cat.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-0">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-auto sm:h-[420px]"
                >
                  {/* Image Area */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50 p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0B1F3A] mb-4 sm:mb-auto">
                      {product.name}
                    </h3>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
                      <Link 
                        href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full py-2.5 rounded border border-gray-200 text-gray-600 text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                      >
                        View Details <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      </Link>
                      
                      <a 
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded bg-[#25D366] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase hover:bg-[#20bd5a] transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 4. EXPORT INFORMATION */}
      <section className="py-32 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: MapPin,
                title: "Global Reach",
                desc: "Exporting to over 35 countries across the Middle East, Europe, Africa, and North America with localized compliance."
              },
              {
                icon: Ship,
                title: "Logistics",
                desc: "Partnered with top-tier shipping lines ensuring timely delivery via 20ft and 40ft containers under optimal conditions."
              },
              {
                icon: FileText,
                title: "Documentation",
                desc: "Flawless execution of all export documentation, including Phytosanitary, Certificate of Origin, and SGS Inspection."
              }
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full border border-gray-100 shadow-xl flex items-center justify-center mb-8 bg-white group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-[#0B1F3A]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#0B1F3A] mb-4">{info.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative py-32 bg-[#0B1F3A] overflow-hidden">
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
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/918143944888?text=Hello%20Garuda%20Global%20Exports,%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#20bd5a] transition-colors duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <Link href="/contact" className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors duration-300">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
