import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-bold tracking-wider uppercase">
                Garuda<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 font-light leading-relaxed">
              Connecting Indian Agriculture to the World. Premium agricultural exports with trust, quality, and global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Quality Standards", "Global Exports", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/70 hover:text-accent transition-colors">
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
              {["Premium Rice", "Fresh Vegetables", "Indian Spices", "Fresh Fruits", "Premium Makhana"].map((product) => (
                <li key={product}>
                  <Link href="#" className="text-white/70 hover:text-accent transition-colors">
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
              <li>123 Export Hub, Business District</li>
              <li>Mumbai, Maharashtra, India 400001</li>
              <li className="pt-2">
                <a href="mailto:info@garudaexports.com" className="hover:text-accent transition-colors">
                  info@garudaexports.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Garuda Global Exports. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
