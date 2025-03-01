'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export function DiscoverSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/12.jpg?updatedAt=1726259343720")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-900/90" />
        </motion.div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-emerald-300 mx-auto mb-8 rounded-full"
          />
          
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Discover the <span className="text-emerald-300">Egyptian Herbs</span> Difference
          </h2>
          
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Experience the finest quality herbs and spices, sourced directly from nature and delivered to your doorstep. Join us in our commitment to quality, sustainability, and exceptional flavor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-7 rounded-full text-lg font-medium shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white bg-white/10 hover:bg-white/20 px-8 py-7 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "100+", label: "Products" },
              { number: "50+", label: "Countries" },
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-emerald-300 mb-1">{stat.number}</p>
                <p className="text-emerald-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl z-[-1]"
            animate={{ 
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl z-[-1]"
            animate={{ 
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}