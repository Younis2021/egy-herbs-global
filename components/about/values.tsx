'use client';

import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about providing the highest quality herbs and spices"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental stewardship and sustainable practices"
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Uncompromising standards in every product we offer"
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting farmers and communities worldwide"
  }
];

export function OurValues() {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Our Values
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
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