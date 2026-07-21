"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Contact Premium Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#020813]">
        {/* Premium Dark Gradient & Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020813] via-[#051229] to-[#020813]" />
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-accent/5 rounded-full blur-[80px] md:blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

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
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Let's Discuss <span className="text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Business</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Whether you need a custom quote, bulk orders, or logistical support, our global export team is ready to assist you 24/7.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 relative -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info Cards */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-slate-400 mb-2">Call / WhatsApp</h3>
                <a href="https://wa.me/918143944888" target="_blank" rel="noopener noreferrer" className="text-xl font-heading font-bold text-[#25D366] hover:text-[#20bd5a] transition-colors block">
                  +91 8143944888
                </a>
                <p className="text-sm text-slate-500 mt-2">Available 24/7. Click to chat on WhatsApp.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-slate-400 mb-2">Email Us</h3>
                <p className="text-sm font-heading font-bold text-primary">Garudaaglobalexports@gmail.com</p>
                <p className="text-sm text-slate-500 mt-2">We reply within 2 hours.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-slate-400 mb-2">Global Headquarters</h3>
                <p className="text-lg font-heading font-bold text-primary">Kakinada, Andhra Pradesh, India</p>
                <p className="text-sm text-slate-500 mt-2">Serving 40+ countries globally.</p>
              </motion.div>

            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-2/3 bg-white p-6 sm:p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl relative"
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Request a Quote</h2>
              <p className="text-slate-500 mb-8">Fill out the form below and our export specialists will get back to you immediately.</p>

              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center bg-slate-50 rounded-xl border border-dashed border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-600 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                  <p className="text-slate-500">We will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Company Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Global Imports LLC" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Phone / WhatsApp</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Product Interest</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700">
                      <option value="">Select a Product Category</option>
                      <option value="rice">Premium Rice (Basmati / Non-Basmati)</option>
                      <option value="vegetables">Fresh Vegetables</option>
                      <option value="makhana">Makhana (Fox Nuts)</option>
                      <option value="fruits">Export Quality Fruits</option>
                      <option value="spices">Authentic Spices</option>
                      <option value="pulses">Pulses & Peanuts</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message Details</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Please provide details about your required quantities, destination port, etc." />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#0B2B5E] hover:bg-accent text-white py-4 px-4 rounded-lg text-sm md:text-base font-bold tracking-widest md:tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 whitespace-normal text-center"
                  >
                    {isSubmitting ? "Sending..." : "Submit Quote Request"} <Send className="w-4 h-4 shrink-0" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
