'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Herbs",
    description: "Traditional and exotic herbs for cooking and wellness",
    image: "https://ik.imagekit.io/pcet3dvcu/home/Herbs-1.jpg?updatedAt=1736081793544",
    items: "24+ varieties",
    link: "/products?category=herbs"
  },
  {
    title: "Spices",
    description: "Premium spices from around the world",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: "32+ varieties",
    link: "/products?category=spices"
  },
  {
    title: "Seeds",
    description: "Organic seeds for cooking and planting",
    image: "https://ik.imagekit.io/pcet3dvcu/home/SUN-FLOWER-SEEDS.jpg?updatedAt=1736082173051",
    items: "20+ varieties",
    link: "/products?category=seeds"
  },
  {
    title: "Legumes",
    description: "High-quality legumes and pulses",
    image: "https://ik.imagekit.io/pcet3dvcu/home/82e7ab67cd.jpg?updatedAt=1736082572058",
    items: "20+ varieties",
    link: "/products?category=legumes"
  }
];

export function CollectionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
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
            <span className="text-emerald-600 font-medium">EXPLORE OUR RANGE</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Premium Collection
            <motion.div 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Explore our diverse range of premium herbs, spices, seeds, and legumes, sourced directly from nature's finest.
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
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full border-0 shadow-xl rounded-xl group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    width={500}
                    height={375}
                    src={collection.image}
                    alt={collection.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-emerald-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      {collection.items}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">{collection.title}</h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                  <Link href={collection.link}>
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 group">
                      <span>Explore Collection</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}