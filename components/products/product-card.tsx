'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from '@/types/product';
import { motion } from "framer-motion";
import { Eye, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import { ProductDetailsModal } from './product-details-modal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card className="relative overflow-hidden group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl h-full">
          {/* Image Container */}
          <div className="aspect-square relative overflow-hidden rounded-t-xl">
            <Image
              src={product.url}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              quality={85}
              priority={true}
            />
            
            {/* Overlay with buttons */}
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white hover:bg-emerald-50 text-emerald-600 h-12 w-12 shadow-lg transform hover:scale-110 transition-all duration-300"
                onClick={() => setShowDetails(true)}
              >
                <Eye className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white hover:bg-emerald-50 text-emerald-600 h-12 w-12 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <Badge className="bg-emerald-600/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                {product.category}
              </Badge>
              {product.isBestSeller && (
                <Badge className="bg-amber-500/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  Best Seller
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-gray-200'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>

            {/* Quick Info */}
            <div className="grid text-sm mb-4">
              <div className="text-gray-500">
                <span className="font-medium">Form:</span> {product.availableForms.split('-')[0]}
              </div>
            </div>

            <Button 
              className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-sm group-hover:shadow-md transition-all rounded-full"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </Button>
          </div>
        </Card>
      </motion.div>

      <ProductDetailsModal 
        product={product}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}