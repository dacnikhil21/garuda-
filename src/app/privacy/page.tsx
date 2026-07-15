import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF9F6] font-sans selection:bg-accent/30 selection:text-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0B1F3A] mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 prose-headings:font-heading prose-headings:text-[#0B1F3A]">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">1. Introduction</h2>
          <p className="mb-6">
            Garuda Global Exports ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Garuda Global Exports.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. Information We Collect</h2>
          <p className="mb-6">
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. How We Use Your Information</h2>
          <p className="mb-6">
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails and WhatsApp communications regarding your order or inquiries</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> Garudaaglobalexports@gmail.com
            <br />
            <strong>Phone:</strong> +91 8143944888
          </p>
        </div>
      </div>
    </div>
  );
}
