'use client';

import { motion } from "framer-motion";
import { Leaf, Sun, Cloud, Droplets } from "lucide-react";

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
            Everything Starts from the Soil
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}