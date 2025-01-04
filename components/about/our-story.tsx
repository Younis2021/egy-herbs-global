'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "1995",
    title: "Our Beginning",
    description: "Started as a small family-owned herb garden in California"
  },
  {
    year: "2005",
    title: "Going Organic",
    description: "Achieved USDA organic certification and expanded operations"
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Established partnerships with farmers worldwide"
  },
  {
    year: "2024",
    title: "Today",
    description: "Leading supplier of premium herbs and spices globally"
  }
];

export function OurStory() {
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
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a leading supplier of premium herbs and spices,
            our journey has been guided by a commitment to quality and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="text-3xl font-bold text-emerald-600 mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}