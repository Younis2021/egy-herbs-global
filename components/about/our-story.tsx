'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const milestones = [
  {
    year: "2010",
    title: "Our Beginning",
    description: "Started as a family-owned herb business in Egypt's fertile Nile Delta region, focusing on traditional cultivation methods and local distribution.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: "2015",
    title: "Going Global",
    description: "Expanded operations and began international exports, bringing Egyptian herbs and spices to markets across Europe, Asia, and North America.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: "2020",
    title: "Certification",
    description: "Achieved international quality certifications including USDA Organic, ISO 22000, and HACCP, establishing our reputation for premium quality.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    year: "2024",
    title: "Today",
    description: "Leading exporter of Egyptian herbs and spices with a commitment to sustainability, quality, and preserving traditional farming practices.",
    image: "https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099"
  }
];

export function OurStory() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">OUR JOURNEY</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            From Local Roots to Global Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our roots in Egypt's fertile lands to becoming a leading global supplier,
            our journey has been guided by a commitment to quality and authenticity.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-100 hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year marker for desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden md:block">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    {/* Year marker for mobile */}
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg mb-4 md:hidden">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                  </div>
                  
                  {/* Image */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}