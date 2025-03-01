'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "USDA Organic",
    image: "https://images.unsplash.com/photo-1584281722575-f5ab0e655a5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Certified organic products meeting USDA standards"
  },
  {
    name: "Fair Trade Certified",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Supporting fair wages and sustainable farming practices"
  },
  {
    name: "Non-GMO Project",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Verified non-GMO ingredients and processes"
  }
];

export function Certifications() {
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
            Our Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards through internationally recognized
            certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-[4/3] relative">
                  <Image
                    width={100}
                    height={100}
                    src={cert.image}
                    alt={cert.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}