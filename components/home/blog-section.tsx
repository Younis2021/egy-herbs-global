'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "The Health Benefits of Turmeric",
    excerpt: "Discover the amazing health benefits of this golden spice and how to incorporate it into your daily routine.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2024"
  },
  {
    title: "Cooking with Fresh vs. Dried Herbs",
    excerpt: "Learn when to use fresh herbs and when dried herbs work better in your cooking.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 12, 2024"
  },
  {
    title: "Essential Spices for Every Kitchen",
    excerpt: "A guide to building your essential spice collection for delicious cooking.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 10, 2024"
  }
];

export function BlogSection() {
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
            Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover recipes, tips, and insights about herbs and spices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0">Read More →</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}