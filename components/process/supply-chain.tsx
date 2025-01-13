'use client';

import { motion } from "framer-motion";
import { Sprout, Sun, Factory, Truck, Store } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Cultivation",
    description: "Carefully selected farms using sustainable practices"
  },
  {
    icon: Sun,
    title: "Harvesting",
    description: "Harvested at peak maturity for optimal quality"
  },
  {
    icon: Factory,
    title: "Processing",
    description: "State-of-the-art facilities maintaining product integrity"
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Temperature-controlled logistics network"
  },
  {
    icon: Store,
    title: "Retail",
    description: "Fresh products delivered to your doorstep"
  }
];

export function SupplyChain() {
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
            Our Supply Chain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every step in our process is carefully monitored to ensure the highest quality
            and sustainability standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-emerald-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}