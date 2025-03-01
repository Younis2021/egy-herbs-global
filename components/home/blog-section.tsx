'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";

const posts = [
    {
    title: "A Strong Start at the Medicinal & Aromatic Plants Expo",
    excerpt: "From our booth on the opening day, proudly presenting the finest herbs and spices to industry professionals.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/WhatsApp%20Image%202025-01-06%20at%2014.57.07_3e47265b.jpg?updatedAt=1736168485410",
    date: "Sep 12, 2024",
    slug: "medicinal-aromatic-plants-expo"
  },
  {
    title: "International Connections: A Productive Meeting with Russian Clients",
    excerpt:
      "A professional business session presenting our premium samples and exploring collaboration opportunities.",
    image: "https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099",
    date: "Dec 3, 2024",
    slug: "international-connections-russian-clients"
  },
  {
      title: "Building Partnerships at Food Africa",
    excerpt:
      "A special session with one of our valued clients, showcasing samples and discussing opportunities during Food Africa.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/1733337518996.jpeg?updatedAt=1736153997851",
    date: "Dec 4, 2024",
    slug: "building-partnerships-food-africa"
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
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
            <span className="text-emerald-600 font-medium">LATEST UPDATES</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            News & Events
            <motion.div 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Stay updated with our latest activities, industry events, and insights about herbs and spices.
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
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-0 shadow-xl rounded-xl group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    width={600}
                    height={338}
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center text-sm text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 h-14 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700 font-medium flex items-center group">
                      Read More <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}