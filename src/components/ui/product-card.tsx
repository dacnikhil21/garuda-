import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MessageCircle, MapPin, ShieldCheck, Leaf } from "lucide-react";

export interface Product {
  name: string;
  category: string;
  image: string;
  description: string;
  bgColor?: string;
  pillBg?: string;
  pillText?: string;
  badge?: string;
}

export function ProductCard({ product, index = 0 }: { product: Product, index?: number }) {
  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Garuda Global Exports, I am interested in inquiring about ${productName}.`;
    return `https://wa.me/918143944888?text=${encodeURIComponent(message)}`;
  };

  const bgColor = product.bgColor || "bg-[#FFF9EB]";
  const pillBg = product.pillBg || "bg-[#FEF3C7]";
  const pillText = product.pillText || "text-[#D97706]";
  const badge = product.badge || "PREMIUM QUALITY";

  return (
    <motion.div
      key={product.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${bgColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[450px] relative`}
    >
      {/* Image Top */}
      <div className="relative h-[220px] overflow-hidden rounded-b-3xl">
         <div className="w-full h-full relative">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
         </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold tracking-widest uppercase ${pillText} ${pillBg} px-2 py-1 rounded`}>
            {product.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center text-xs font-medium text-gray-600 gap-3 mb-auto">
           <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-500" /> Origin: India</span>
           <span className="text-gray-300">|</span>
           <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-gray-500" /> Export Quality</span>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-row gap-3 mt-6">
          <Link 
            href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-800 text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white/50 transition-colors"
          >
            View Details <ExternalLink className="w-3 h-3" />
          </Link>
          
          <a 
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl bg-[#0F2D20] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#163F2C] transition-colors shadow-md flex items-center justify-center gap-2"
          >
            {/* Exact WhatsApp SVG Logo */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
