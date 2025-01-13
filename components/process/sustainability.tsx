'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Heart, Leaf, Recycle } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Supporting organic farming practices that protect soil health and biodiversity"
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "Implementing zero-waste practices in processing and packaging"
  },
  {
    icon: Heart,
    title: "Fair Trade",
    description: "Ensuring fair compensation and working conditions for farmers"
  },
  {
    icon: Globe,
    title: "Carbon Neutral",
    description: "Working towards carbon neutrality across our operations"
  }
];

export function Sustainability() {
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
            Sustainability Initiatives
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Our commitment to sustainable practices ensures a better future for our planet
            and communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 border-white/20 p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <initiative.icon className="w-8 h-8" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-emerald-100">{initiative.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}