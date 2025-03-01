'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Organic Farms Co",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Green Logistics",
    logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Eco Packaging",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Quality Labs",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Global Distribution",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Sustainable Harvest",
    logo: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Organic Certification",
    logo: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "International Trade",
    logo: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

export function Partners() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
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
            <span className="text-emerald-600 font-medium">OUR PARTNERS</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Working Together for Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver premium quality herbs and spices through sustainable and ethical practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm w-full aspect-square flex items-center justify-center border border-gray-100 hover:shadow-md transition-all duration-300">
                <Image
                  width={120}
                  height={120}
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain max-h-24"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Interested in partnering with us? <span className="text-emerald-600 font-medium">Contact our team today.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}