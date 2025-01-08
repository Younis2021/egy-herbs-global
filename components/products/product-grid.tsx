'use client';

import { memo } from 'react';
import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import { products } from "@/lib/products";

interface ProductGridProps {
  category: string;
}

const MemoizedProductCard = memo(ProductCard);

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="will-change-transform"
        >
          <MemoizedProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}