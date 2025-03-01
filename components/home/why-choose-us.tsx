'use client';

import { motion } from "framer-motion";
import { Award, Leaf, Truck, Shield, Check } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the highest quality herbs and spices from trusted farmers worldwide."
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our products are certified organic and free from artificial additives."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and secure shipping to ensure freshness and quality."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We stand behind our products with a 100% satisfaction guarantee."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-white z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/pattern-light.png?updatedAt=1736259343720")',
            backgroundSize: '200px',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-300 mt-3"></div>
              <span className="text-emerald-600 font-medium">WHY CHOOSE US</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              The Egy Herbs Global Difference
              <motion.div 
                className="absolute -bottom-2 left-0 right-1/2 h-1 bg-emerald-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We're committed to providing the highest quality herbs and spices with exceptional service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                      <reason.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Feature list */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ethically sourced ingredients",
                "Sustainable packaging",
                "Expert quality control",
                "International certifications"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://ik.imagekit.io/pcet3dvcu/home/1733129054864.jpeg?updatedAt=1736154429707"
                alt="Premium quality herbs"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-900 font-medium italic">
                    "The quality of their herbs is unmatched. You can taste the difference in every dish."
                  </p>
                  <p className="text-emerald-600 font-semibold mt-2">
                    — Chef Maria Santos
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-50 rounded-full z-[-1]" />
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-10 -left-10 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Organic</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}