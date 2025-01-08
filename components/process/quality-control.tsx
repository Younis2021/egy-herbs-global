'use client';

import { motion } from "framer-motion";
import { Microscope, ShieldCheck, Gauge, Award } from "lucide-react";

const qualitySteps = [
  {
    icon: Microscope,
    title: "Laboratory Testing",
    description: "Every batch undergoes rigorous testing for quality and purity"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict quality control measures throughout processing"
  },
  {
    icon: Gauge,
    title: "Potency Analysis",
    description: "Regular testing to ensure optimal active compounds"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Meeting international quality standards"
  }
];

export function QualityControl() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Quality Control
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive quality control process ensures that every product
            meets our high standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualitySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}