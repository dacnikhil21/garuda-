"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Apple, Wheat, Sprout, ExternalLink } from "lucide-react";

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
    name: "Authentic Spices",
    description: "Rich, aromatic Indian spices including Turmeric, Cumin, and Cardamom.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop",
    icon: Leaf,
    href: "/products/spices",
  },
  {
    name: "Export Quality Fruits",
    description: "Naturally grown tropical fruits exported with freshness and extreme care.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2000&auto=format&fit=crop",
    icon: Apple,
    href: "/products/fruits",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            Our Products
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            What We Export
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent rounded-full"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Top */}
                <div className="relative h-56 overflow-hidden bg-gray-50 p-2">
                   <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                   </div>
                   
                   {/* Floating Icon */}
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-white z-10 shadow-sm">
                     <Icon className="w-5 h-5 text-white" />
                   </div>
                </div>

                {/* Content */}
                <div className="pt-10 pb-6 px-6 text-center flex flex-col flex-grow items-center">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto w-full flex flex-col gap-3">
                    {/* View Details Button */}
                    <Link 
                      href={product.href}
                      className="w-full py-2.5 rounded border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
                    >
                      View Details <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    
                    {/* Get Quote Button */}
                    <Link 
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="w-full py-2.5 rounded bg-accent text-white text-xs font-bold tracking-wider uppercase hover:bg-accent/90 transition-colors shadow-sm"
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
  );
}
