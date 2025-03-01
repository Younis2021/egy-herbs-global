'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Leaf, Flame, Sprout, Wheat } from "lucide-react";

const categories = [
  { id: 'all', name: 'All Products', Icon: Package },
  { id: 'herbs', name: 'Herbs', Icon: Leaf },
  { id: 'spices', name: 'Spices', Icon: Flame },
  { id: 'seeds', name: 'Seeds', Icon: Sprout },
  { id: 'legumes', name: 'Legumes', Icon: Wheat }
];

interface ProductCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductCategories({ selectedCategory, onCategoryChange }: ProductCategoriesProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`h-auto py-3 px-6 ${
                  selectedCategory === category.id 
                    ? "bg-emerald-600 hover:bg-emerald-700" 
                    : ""
                }`}
                onClick={() => onCategoryChange(category.id)}
              >
                <category.Icon className="w-5 h-5 mr-2" />
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}