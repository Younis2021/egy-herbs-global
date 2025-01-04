'use client';

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team for any questions or inquiries
          </p>
        </motion.div>
      </div>
    </section>
  );
}