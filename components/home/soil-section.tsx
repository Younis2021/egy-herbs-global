'use client';

import { motion } from "framer-motion";
import { Leaf, Sun, Cloud, Droplets } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "We use only organic farming methods to ensure the highest quality herbs and spices."
  },
  {
    icon: Sun,
    title: "Natural Growth",
    description: "Our plants grow in their natural habitat, ensuring optimal conditions and potency."
  },
  {
    icon: Cloud,
    title: "Clean Environment",
    description: "We maintain strict environmental standards to protect our crops and the ecosystem."
  },
  {
    icon: Droplets,
    title: "Sustainable Water",
    description: "Our irrigation systems use sustainable water sources and efficient distribution methods."
  }
];

export function SoilSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://ik.imagekit.io/pcet3dvcu/home/soil-bg.jpg?updatedAt=1736259343720"
            alt="Fertile soil"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">OUR PHILOSOPHY</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Everything Starts from the Soil
            <motion.div 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            We believe that exceptional herbs and spices begin with healthy soil. Our commitment to sustainable farming practices ensures the highest quality products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6 transform transition-transform duration-500 hover:rotate-12">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full opacity-70" />
        <div className="absolute top-40 -left-20 w-60 h-60 bg-emerald-50 rounded-full opacity-70" />
      </div>
    </section>
  );
}