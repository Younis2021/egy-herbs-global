'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DiscoverSection() {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/12.jpg?updatedAt=1726259343720")'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Discover the Herbal Treasures Difference
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Experience the finest quality herbs and spices, sourced directly from nature and delivered to your doorstep. Join us in our commitment to quality, sustainability, and exceptional flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:text-emerald-900">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}