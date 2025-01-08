'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    title: "Herbs",
    description: "Traditional and exotic herbs for cooking and wellness",
<<<<<<< HEAD
    image: "https://ik.imagekit.io/pcet3dvcu/home/Herbs-1.jpg?updatedAt=1736081793544",
=======
    image: "https://images.unsplash.com/photo-1515594848784-77172e3f3c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
    items: "24+ varieties"
  },
  {
    title: "Spices",
    description: "Premium spices from around the world",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: "32+ varieties"
  },
  {
    title: "Seeds",
    description: "Organic seeds for cooking and planting",
<<<<<<< HEAD
    image: "https://ik.imagekit.io/pcet3dvcu/home/SUN-FLOWER-SEEDS.jpg?updatedAt=1736082173051",
=======
    image: "https://images.unsplash.com/photo-1558818498-c326e6505d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
    items: "20+ varieties"
  },
  {
    title: "Legumes",
    description: "High-quality legumes and pulses",
<<<<<<< HEAD
    image: "https://ik.imagekit.io/pcet3dvcu/home/82e7ab67cd.jpg?updatedAt=1736082572058",
=======
    image: "https://images.unsplash.com/photo-1614441884165-f0b7703f3586?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
    items: "20+ varieties"
  }
];

export function CollectionSection() {
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
            Our Herbs & Spices Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of premium herbs, spices, seeds, and legumes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={collection.image}
                    alt={collection.title}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{collection.items}</span>
                    <Button variant="outline">Explore</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}