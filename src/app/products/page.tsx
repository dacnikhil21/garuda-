"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wheat, Sprout, Leaf, Apple, ExternalLink, Hexagon } from "lucide-react";

const products = [
  {
    name: "Premium Rice",
    description: "High-quality Basmati and Non-Basmati rice sourced from trusted Indian farmers.",
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=2000&auto=format&fit=crop",
    icon: Wheat,
    href: "/products/rice",
  },
  {
    name: "Fresh Vegetables",
    description: "Farm fresh vegetables packed with international export standards for maximum shelf life.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2000&auto=format&fit=crop",
    icon: Sprout,
    href: "/products/vegetables",
  },
  {
    name: "Makhana (Fox Nuts)",
    description: "Premium, highly nutritious roasted Makhana sourced directly from Bihar.",
    image: "https://images.unsplash.com/photo-1582585474321-729fcc05f429?q=80&w=2000&auto=format&fit=crop",
    icon: Hexagon,
    href: "/products/makhana",
  },
  {
    name: "Export Quality Fruits",
    description: "Naturally grown tropical fruits exported with freshness and extreme care.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2000&auto=format&fit=crop",
    icon: Apple,
    href: "/products/fruits",
  },
  {
    name: "Authentic Spices",
    description: "Rich, aromatic Indian spices including Turmeric, Cumin, and Cardamom.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop",
    icon: Leaf,
    href: "/products/spices",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Products Premium Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#020813]">
        {/* Premium Dark Gradient & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020813] via-[#051229] to-[#020813]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md"
          >
            Our Catalog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Global <span className="text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Export Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Discover our premium range of ethically sourced, export-grade agricultural products ready for global distribution.
          </motion.p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image Top */}
                  <div className="relative h-64 overflow-hidden">
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                     
                     {/* Floating Badge */}
                     <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                       <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shadow-lg border-2 border-white">
                         <Icon className="w-4 h-4" />
                       </div>
                       <span className="bg-black/50 backdrop-blur-md text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                         Export Quality
                       </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8 pb-6 px-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto w-full flex flex-col gap-3">
                      <Link 
                        href={product.href}
                        className="w-full py-3 rounded-lg border-2 border-primary text-primary text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                      >
                        View Details <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      
                      <Link 
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="w-full py-3 rounded-lg bg-accent text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center hover:bg-accent/90 transition-colors shadow-md"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
