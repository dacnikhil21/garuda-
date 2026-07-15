import Link from "next/link";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 md:pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
               {/* Snake-like Arrow SVG */}
               <div className="absolute inset-0 text-accent">
                 <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full drop-shadow-md overflow-visible">
                   <g transform="rotate(-15 50 50)">
                     <path d="M 10 50 A 40 15 0 1 1 90 50 A 40 15 0 1 1 10 50" pathLength="100" strokeDasharray="40 60" strokeLinecap="round">
                       <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" repeatCount="indefinite" />
                     </path>
                   </g>
                 </svg>
               </div>
               <span className="text-white font-heading font-bold text-sm tracking-widest relative z-10">GGE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none tracking-widest text-white">GARUDA</span>
                <span className="text-xs font-bold tracking-[0.2em] text-white/70">GLOBAL EXPORTS</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 font-light leading-relaxed">
              Connecting Indian Agriculture to the World. Premium agricultural exports with trust, quality, and global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={link === "Home" ? "/" : link === "About Us" ? "/about" : link === "Products" ? "/products" : "/contact"} className="text-white/70 hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Our Products</h4>
            <ul className="space-y-4">
              {["Rice", "Vegetables", "Spices", "Fruits", "Makhana"].map((product) => (
                <li key={product}>
                  <Link href={`/products#catalog`} className="text-white/70 hover:text-accent transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li>Garuda Global Exports</li>
              <li>Since 2 years</li>
              <li className="pt-2">
                <a href="mailto:Garudaaglobalexports@gmail.com" className="hover:text-accent transition-colors block">
                  Garudaaglobalexports@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918143944888" className="hover:text-accent transition-colors block">
                  +91 8143944888
                </a>
              </li>
              <li>
                <a href="https://wa.me/918143944888" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  WhatsApp: +91 8143944888
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Garuda Global Exports. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
