'use client';

import { useState } from 'react';
import { ProductHero } from '@/components/products/hero';
import { ProductCategories } from '@/components/products/categories';
import { ProductGrid } from '@/components/products/product-grid';
import { ProductFilters } from '@/components/products/filters';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <ProductHero />
      <ProductCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-6">
            <Button 
              onClick={() => setShowMobileFilters(true)}
              className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Show Filters
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop filters */}
            <div className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
              <ProductFilters />
            </div>
            
            {/* Mobile filters */}
            {showMobileFilters && (
              <div className="fixed inset-0 bg-black/50 z-50 lg:hidden flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-auto relative"
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 z-10"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="p-4">
                    <ProductFilters />
                  </div>
                </motion.div>
              </div>
            )}
            
            <div className="flex-1">
              <ProductGrid category={selectedCategory} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}