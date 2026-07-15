"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center pt-24 pb-12 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-heading font-bold text-[#0B1F3A] mb-8">404</h1>
          <h2 className="text-3xl font-heading font-semibold text-[#0B1F3A] mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            Check the URL or head back to our homepage to continue browsing our premium exports.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#c4a132] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
