'use client';

import { ProductCard } from '@/components/products/product-card';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function BestSellers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const bestSellers = products.filter((product) => product.isBestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="bestsellers" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          style={{ opacity }} 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              MOST POPULAR
            </span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Best Sellers
            <motion.div 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Discover our most popular herbs and spices, carefully selected for
            their exceptional quality and flavor.
          </p>
        </motion.div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full h-12 w-12 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-none w-[320px] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full h-12 w-12 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/products">
            <Button 
              variant="outline" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
        
        {/* Testimonial badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -bottom-10 right-10 bg-white rounded-xl shadow-xl p-4 max-w-xs hidden lg:block"
        >
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-gray-700 text-sm italic">
            "The quality of their herbs is exceptional. You can taste the difference in every dish!"
          </p>
          <p className="text-emerald-600 text-xs font-medium mt-2">— Chef Maria Santos</p>
        </motion.div>
      </div>
    </section>
  );
}