'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
    {
    title: "A Strong Start at the Medicinal & Aromatic Plants Expo",
    excerpt: "From our booth on the opening day, proudly presenting the finest herbs and spices to industry professionals.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/WhatsApp%20Image%202025-01-06%20at%2014.57.07_3e47265b.jpg?updatedAt=1736168485410",
    date: "Sep 12, 2024"
  },
  {
    title: "International Connections: A Productive Meeting with Russian Clients",
    excerpt:
      "A professional business session presenting our premium samples and exploring collaboration opportunities.",
    image: "https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099",
    date: "Dec 3, 2024"
  },
  {
      title: "Building Partnerships at Food Africa",
    excerpt:
      "A special session with one of our valued clients, showcasing samples and discussing opportunities during Food Africa.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/1733337518996.jpeg?updatedAt=1736153997851",
    date: "Dec 4, 2024"
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