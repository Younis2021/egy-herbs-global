'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Award } from "lucide-react";

const awards = [
  {
    title: "Organic Excellence Award",
    organization: "International Organic Federation",
    year: "2023",
    description: "Recognized for outstanding commitment to organic farming practices and product quality."
  },
  {
    title: "Sustainability Leadership",
    organization: "Global Agricultural Council",
    year: "2022",
    description: "Awarded for innovative approaches to sustainable farming and environmental stewardship."
  },
  {
    title: "Export Achievement Award",
    organization: "Egyptian Chamber of Commerce",
    year: "2021",
    description: "Honored for exceptional growth in international markets and export excellence."
  },
  {
    title: "Quality Innovation Prize",
    organization: "World Spice Organization",
    year: "2020",
    description: "Awarded for pioneering quality control methods in the herb and spice industry."
  }
];

export function Awards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/pattern-light.png?updatedAt=1736259343720")',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">RECOGNITION</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition of our commitment to quality, sustainability, and excellence in the global herb and spice industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-8 h-full border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{award.title}</h3>
                <div className="bg-emerald-50 rounded-full px-4 py-1 text-sm text-emerald-600 font-medium text-center mb-4 mx-auto">
                  {award.year}
                </div>
                <p className="text-gray-600 mb-4 text-center flex-grow">{award.description}</p>
                <p className="text-sm text-gray-500 text-center font-medium">{award.organization}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}