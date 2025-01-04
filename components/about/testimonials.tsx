'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The quality of their herbs is unmatched. You can taste the difference in every dish.",
    author: "Chef Maria Santos",
    role: "Executive Chef, The Green Table"
  },
  {
    quote: "Their commitment to sustainability sets them apart. A true leader in responsible sourcing.",
    author: "Dr. James Wilson",
    role: "Environmental Consultant"
  },
  {
    quote: "Working with Herbal Treasures has transformed our supply chain. Exceptional quality and service.",
    author: "Lisa Chen",
    role: "Procurement Director, Organic Foods Co."
  }
];

export function Testimonials() {
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
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our valued customers and partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <Quote className="w-8 h-8 text-emerald-600 mb-6" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}