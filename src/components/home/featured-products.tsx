"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProductCard } from "@/components/ui/product-card";
import { allProducts } from "@/data/products";

// Select a few featured products
const featuredNames = ["Basmathi Rice", "Sona Masuri", "Mirchi G4", "Onions", "Alphonso Mango", "Pomegranate", "Cardamom", "Premium Makhana"];
const products = allProducts.filter(p => featuredNames.includes(p.name));

export function FeaturedProducts() {
  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Garuda Global Exports, I am interested in inquiring about ${productName}.`;
    return `https://wa.me/918143944888?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-12 md:py-24 bg-slate-50 relative">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-0">
          {products.map((product, index) => {
            return (
              <ProductCard key={product.name} product={product} index={index} />
            );
          })}
        </div>
        
        <div className="mt-16 text-center flex justify-center">
          <Link href="/products" className="bg-primary hover:bg-accent hover:text-primary text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-colors">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
