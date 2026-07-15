import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF9F6] font-sans selection:bg-accent/30 selection:text-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0B1F3A] mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600 prose-headings:font-heading prose-headings:text-[#0B1F3A]">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing or using our Website, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use our Website or services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. Products and Services</h2>
          <p className="mb-6">
            Garuda Global Exports specializes in the export of agricultural products including Rice, Vegetables, Fruits, Spices, and Makhana. All products are subject to availability and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. Pricing and Quotes</h2>
          <p className="mb-6">
            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. Quotes provided via WhatsApp, email, or other communication channels are valid for the specified duration on the quote document.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Shipping and Logistics</h2>
          <p className="mb-6">
            Shipping terms (such as FOB, CIF) will be negotiated and agreed upon individually for each export contract. We partner with top-tier shipping lines, but are not liable for delays caused by customs, weather, or other circumstances beyond our direct control.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">5. Contact Information</h2>
          <p className="mb-6">
            Questions about the Terms of Service should be sent to us at Garudaaglobalexports@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
