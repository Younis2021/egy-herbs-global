'use client';

import { motion } from "framer-motion";
import { Award, Leaf, Truck, Shield } from "lucide-react";

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality herbs and spices with exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}