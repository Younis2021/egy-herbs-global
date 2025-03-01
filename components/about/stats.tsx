'use client';

import { motion } from "framer-motion";
import { Users, Award, Globe, Leaf } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Team Members",
    description: "Dedicated professionals"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise"
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Global distribution"
  },
  {
    icon: Leaf,
    value: "100+",
    label: "Products",
    description: "Premium quality"
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-lg font-medium text-emerald-600 mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}