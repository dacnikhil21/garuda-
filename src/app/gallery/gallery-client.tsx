"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GalleryImage } from "@/generated/prisma/client";

const defaultImages = [
  {
    id: 1,
    src: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.51.33 AM.jpeg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.51.54 AM.jpeg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.53.19 AM.jpeg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.54.09 AM.jpeg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.57.40 AM.jpeg",
    alt: "Gallery Image 5",
  },
];

export default function GalleryClient({ dbImages }: { dbImages: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = dbImages.length > 0 
    ? dbImages.map(img => ({ id: img.id, src: img.image, alt: img.alt || "Gallery Image" }))
    : defaultImages;

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
          Our <span className="text-accent">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          Explore the quality and excellence of Garuda Global Exports through our visual showcase.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group bg-[#0B1F3A]"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">
                    View
                  </span>
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                sizes="100vw"
                className="object-contain bg-black"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
