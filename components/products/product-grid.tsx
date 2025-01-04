'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    category: "spices",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    origin: "India",
    weight: "100g"
  },
  {
    id: 2,
    name: "Ceylon Cinnamon",
    category: "spices",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1573484037817-1a9b5d7a4f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    origin: "Sri Lanka",
    weight: "50g"
  },
  {
    id: 3,
    name: "Dried Basil Leaves",
    category: "herbs",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    origin: "Egypt",
    weight: "30g"
  },
  {
    id: 4,
    name: "Black Peppercorns",
    category: "spices",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1599690925058-90e1a0b56154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    origin: "India",
    weight: "100g"
  },
];

interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full">
            <div className="aspect-square relative overflow-hidden">
              <Image
                width={100}
                height={100}
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">{product.origin}</span>
                <span className="text-sm text-gray-600">{product.weight}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <Button>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}