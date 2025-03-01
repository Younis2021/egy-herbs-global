'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export function Mission() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099"
                alt="Our mission"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">Our Promise</h3>
                  <p className="text-gray-900 font-medium">
                    "To deliver the authentic taste of Egypt through ethically sourced, premium quality herbs and spices."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-50 rounded-full z-[-1]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-300 mt-3"></div>
              <span className="text-emerald-600 font-medium">OUR MISSION</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bringing Egypt's Finest to the World
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              At Egy Herbs Global, our mission is to share the rich heritage of Egyptian herbs and spices with the world while supporting sustainable farming practices and empowering local communities.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Preserve traditional Egyptian farming methods",
                "Ensure the highest quality standards at every step",
                "Support local farmers with fair compensation",
                "Minimize environmental impact through sustainable practices",
                "Promote the health benefits of natural herbs and spices"
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's premier source of Egyptian herbs and spices, recognized globally for our commitment to quality, sustainability, and cultural heritage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}