'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function AboutHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/about/9.jpg?updatedAt=1726257808493")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-emerald-400"></div>
            <span className="mx-4 text-emerald-300 font-medium">ABOUT US</span>
            <div className="h-px w-12 bg-emerald-400"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the passion and dedication behind Egy Herbs Global, bringing Egypt's finest herbs and spices to the world.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center"
            >
              <span className="text-sm">Founded in 2010</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center"
            >
              <span className="text-sm">100% Egyptian Quality</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToNextSection}
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}