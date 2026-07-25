"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      {/* Contact Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#020813]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020813] via-[#051229] to-[#020813]" />
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6"
          >
            Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-accent to-amber-400">Export Specialists</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed"
          >
            Have inquiries about product specifications, bulk orders, or shipping terms? Contact our team today.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B1F3A] mb-4">
                  Head Office & Inquiries
                </h2>
                <p className="text-slate-600 font-light leading-relaxed">
                  We welcome inquiries from importers, distributors, and bulk buyers worldwide.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Phone / WhatsApp</h3>
                    <p className="text-base font-bold text-[#0B1F3A]">+91 8143944888</p>
                    <p className="text-xs text-slate-500 mt-1">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email Inquiries</h3>
                    <p className="text-base font-bold text-[#0B1F3A]">Garudaaglobalexports@gmail.com</p>
                    <p className="text-xs text-slate-500 mt-1">24/7 Response for international trade inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Location</h3>
                    <p className="text-base font-bold text-[#0B1F3A]">India</p>
                    <p className="text-xs text-slate-500 mt-1">Serving clients in Asia, Europe, Middle East & Americas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-md">
                <h3 className="text-2xl font-heading font-bold text-[#0B1F3A] mb-2">Send an Export Inquiry</h3>
                <p className="text-sm text-slate-500 mb-8">Fill out the form below and our export sales manager will reach out within 24 hours.</p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-emerald-900 mb-2">Inquiry Received!</h4>
                    <p className="text-sm text-emerald-700">Thank you for reaching out to Garuda Global Exports. Our representative will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Your Name *</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Company Name</label>
                        <input type="text" placeholder="Global Foods Ltd." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Email Address *</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Phone / WhatsApp *</label>
                        <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Products of Interest</label>
                      <input type="text" placeholder="e.g. Basmati Rice, Red Onions, Turmeric Powder" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Message / Requirement Details *</label>
                      <textarea required rows={4} placeholder="Please specify target destination port, estimated order quantity, and required packaging standards..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-800 text-sm" />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-4 bg-[#0B1F3A] hover:bg-[#163663] text-white rounded-xl font-bold tracking-widest uppercase text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? "Sending..." : "Submit Export Inquiry"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
