"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { License } from "@/generated/prisma/client";

const defaultLicenses = [
  {
    id: 1,
    src: "/images/whatsapp/image.png",
    alt: "License 1",
  },
  {
    id: 2,
    src: "/images/whatsapp/image copy 2.png",
    alt: "License 2",
  },
];

export default function LicensesClient({ dbLicenses }: { dbLicenses: License[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const licenses = dbLicenses.length > 0 
    ? dbLicenses.map(lic => ({ id: lic.id, src: lic.image, alt: lic.alt || "License" }))
    : defaultLicenses;

  return (
    <main className="min-h-screen bg-[#061224] pt-32 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-wider mb-6"
        >
          Our <span className="text-accent">Licenses</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg mb-12"
        >
          We are fully certified and licensed to provide you with the highest quality global exports.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto">
          {licenses.map((license, index) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative cursor-pointer group w-full max-w-[240px] md:max-w-[280px]"
              onClick={() => setSelectedImage(license.src)}
            >
              {/* Image without any background box */}
              <div className="relative w-full h-auto overflow-hidden rounded-xl shadow-lg border border-white/10 group-hover:shadow-accent/20 transition-all duration-300">
                <Image
                  src={license.src}
                  alt={license.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 lg:p-16"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
