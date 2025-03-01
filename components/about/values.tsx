'use client';

import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Users, Sparkles, Scale } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about providing the highest quality herbs and spices, preserving traditional methods while embracing innovation."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental stewardship and sustainable practices that protect our planet for future generations."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Uncompromising standards in every product we offer, from cultivation to processing and packaging."
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting farmers and communities worldwide through fair trade practices and ethical sourcing."
  },
  {
    icon: Sparkles,
    title: "Authenticity",
    description: "Preserving the genuine flavors and properties of Egyptian herbs through careful harvesting and processing."
  },
  {
    icon: Scale,
    title: "Integrity",
    description: "Conducting business with honesty, transparency, and respect for all stakeholders in our supply chain."
  }
];

export function OurValues() {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/pattern.png?updatedAt=1736259343720")',
          backgroundSize: '400px',
        }}
      />
      
      {/* Decorative blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-800/50 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-700/30 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-400"></div>
            <span className="text-emerald-300 font-medium">OUR CORE VALUES</span>
            <div className="h-px w-12 bg-emerald-400"></div>
          </div>
          
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Our values form the foundation of everything we do, from how we source our products to how we treat our partners and customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6 transform transition-transform duration-500 hover:rotate-12">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-emerald-100">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}