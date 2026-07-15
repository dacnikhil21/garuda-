"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";

const products = [
  { name: "Basmathi Rice", category: "Rice", description: "Premium aromatic Basmathi rice known for its extra-long slender grains.", image: "/images/products/basmathi-rice.jpg" },
  { name: "Sona Masuri", category: "Rice", description: "Lightweight and aromatic medium-grain rice perfect for daily consumption.", image: "/images/products/sona-masuri.jpg" },
  { name: "Mirchi G4", category: "Vegetables", description: "Highly sought-after G4 green chillies known for their intense spice.", image: "/images/products/mirchi-g4.jpg" },
  { name: "Onions", category: "Vegetables", description: "Export-quality pungent and crisp onions directly from Indian farms.", image: "/images/products/onions.jpg" },
  { name: "Alphonso Mango", category: "Fruits", description: "The 'King of Mangos', featuring unmatched sweetness and creamy texture.", image: "/images/products/alphonso-mango.jpg" },
  { name: "Pomegranate", category: "Fruits", description: "Rich, ruby-red pomegranates packed with flavor and antioxidants.", image: "/images/products/pomegranate.jpg" },
  { name: "Cardamom", category: "Spices", description: "Premium green cardamom pods with intense aroma and complex flavor.", image: "/images/products/cardamom.jpg" },
  { name: "Premium Makhana", category: "Makhana", description: "Finest quality fox nuts, a perfect healthy snack.", image: "/images/products/premium-makhana.jpg" }
];

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
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-auto sm:h-[420px]"
              >
                {/* Image Top */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50 p-2">
                   <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                   </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0B1F3A] mb-4 sm:mb-auto">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-row gap-2 mt-auto">
                    <Link 
                      href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 py-2 rounded-full border border-gray-200 text-[#0B1F3A] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-1 sm:gap-2 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      Details <ExternalLink className="w-3 h-3" />
                    </Link>
                    
                    <a 
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-full bg-[#0B1F3A] text-white border border-[#0B1F3A] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase hover:bg-[#1a365d] transition-colors shadow-sm flex items-center justify-center gap-1 sm:gap-2"
                    >
                      <MessageCircle className="w-3 h-3 text-[#25D366]" /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
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
