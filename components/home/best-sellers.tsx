'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Organic Turmeric",
    description: "Premium ground turmeric with high curcumin content",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Ceylon Cinnamon",
    description: "True Ceylon cinnamon sticks from Sri Lanka",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1573484037817-1a9b5d7a4f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Organic Basil",
    description: "Fresh-dried organic sweet basil leaves",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Black Peppercorns",
    description: "Premium Malabar black peppercorns",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1599690925058-90e1a0b56154?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export function BestSellers() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="bestsellers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular herbs and spices, carefully selected for their exceptional quality and flavor.
          </p>
        </motion.div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex-none w-[300px] snap-start"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      width={100}
                      height={100}
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{product.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}