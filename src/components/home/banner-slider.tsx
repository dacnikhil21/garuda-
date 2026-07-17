'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Banner {
  id: number;
  title: string;
  subtitle: string | null;
  image: string;
  mobileImage: string | null;
  link: string | null;
}

export function BannerSlider({ banners }: { banners: Banner[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!banners || banners.length === 0) return null;

  return (
    <section className="w-full py-4 md:py-12 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 relative group">
        <div className="overflow-hidden rounded-[20px] md:rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {banners.map((banner) => (
              <div 
                key={banner.id} 
                className="relative flex-[0_0_100%] min-w-0 bg-black group/slide overflow-hidden"
              >
                {/* Desktop Version */}
                <div className="hidden md:block relative w-full aspect-[21/7] lg:aspect-[21/6] max-h-[400px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover/slide:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full" />
                  
                  <div className="absolute inset-y-0 left-0 z-10 flex flex-col justify-center px-8 lg:px-16 w-[70%] lg:w-[60%]">
                    <motion.h2 
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-[28px] md:text-[34px] lg:text-[42px] font-heading font-bold text-white mb-2 md:mb-3 drop-shadow-lg leading-tight line-clamp-2"
                    >
                      {banner.title}
                    </motion.h2>
                    
                    {banner.subtitle && (
                      <motion.p 
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-sm md:text-base lg:text-[18px] text-slate-200 mb-5 lg:mb-6 drop-shadow-md font-light line-clamp-2"
                      >
                        {banner.subtitle}
                      </motion.p>
                    )}

                    {banner.link && (
                      <motion.div
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Link 
                          href={banner.link} 
                          className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-[#0B1F3A] px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-accent/20 hover:-translate-y-0.5"
                        >
                          {banner.link === '/contact' ? 'Get a Quote' : 'Explore Products'}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Mobile Version */}
                <div className="block md:hidden relative w-full aspect-[16/9] max-h-[250px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={banner.mobileImage || banner.image} 
                    alt={banner.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover/slide:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent w-full" />
                  
                  <div className="absolute inset-y-0 left-0 z-10 flex flex-col justify-center p-6 w-[85%]">
                    <motion.h2 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="text-xl sm:text-2xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg line-clamp-2"
                    >
                      {banner.title}
                    </motion.h2>
                    
                    {banner.subtitle && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-xs sm:text-sm text-slate-200 mb-4 font-light line-clamp-2 drop-shadow-md"
                      >
                        {banner.subtitle}
                      </motion.p>
                    )}

                    {banner.link && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <Link 
                          href={banner.link} 
                          className="inline-flex items-center justify-center bg-accent text-[#0B1F3A] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md"
                        >
                          {banner.link === '/contact' ? 'Get Quote' : 'Explore'}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Desktop) */}
        {banners.length > 1 && (
          <>
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#0B1F3A] shadow-xl border border-slate-100 items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#0B1F3A] shadow-xl border border-slate-100 items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {banners.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex 
                    ? 'w-8 h-2 bg-[#0B1F3A]' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
