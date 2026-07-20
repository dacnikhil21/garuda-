import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageCircle, ShieldCheck, Truck, PackageCheck, Leaf } from "lucide-react";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const product = await prisma.product.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!product) {
    notFound();
  }

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Garuda Global Exports, I am interested in inquiring about ${productName}.`;
    return `https://wa.me/918143944888?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF9F6] font-sans selection:bg-accent/30 selection:text-primary">
      <div className="container mx-auto px-6">
        
        <Link href="/#catalog" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            
            {/* Quick Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <span className="bg-white/90 backdrop-blur text-[#0B1F3A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-100">
                <Leaf className="w-4 h-4 text-accent" /> Premium Quality
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                {product.category}
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Export Ready
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-bold text-[#0B1F3A] mb-8 leading-tight">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              {product.description || `Sourced directly from the finest farms in India, our ${product.name} represents the pinnacle of agricultural quality. We ensure stringent quality checks, careful processing, and international standard packaging to deliver excellence globally.`}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wider uppercase text-[#0B1F3A] mb-1">Quality</h4>
                  <p className="text-sm text-gray-500">100% Certified Export Grade</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                  <PackageCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wider uppercase text-[#0B1F3A] mb-1">Packaging</h4>
                  <p className="text-sm text-gray-500">Customizable to requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wider uppercase text-[#0B1F3A] mb-1">Logistics</h4>
                  <p className="text-sm text-gray-500">Global Shipping (FOB, CIF)</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 mb-12" />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <a 
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 bg-[#0B1F3A] text-white rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#1a365d] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 md:gap-3"
              >
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-[#25D366]" /> Request Quote on WhatsApp
              </a>
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 bg-transparent border border-gray-300 text-gray-600 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-50 hover:border-gray-400 transition-colors flex justify-center"
              >
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
