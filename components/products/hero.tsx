'use client';

import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

export function ProductHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/Herbs-1.jpg?updatedAt=1736081793544")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-emerald-400"></div>
          <span className="mx-4 text-emerald-300 font-medium">PREMIUM QUALITY</span>
          <div className="h-px w-12 bg-emerald-400"></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Our Premium Collection
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Discover our carefully curated selection of premium herbs, spices, seeds, and legumes.
          Each product is sourced with care and processed to maintain its natural goodness.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center"
          >
            <Search className="w-4 h-4 mr-2 text-emerald-300" />
            <span className="text-sm">100+ Products</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center"
          >
            <Filter className="w-4 h-4 mr-2 text-emerald-300" />
            <span className="text-sm">Premium Quality</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}