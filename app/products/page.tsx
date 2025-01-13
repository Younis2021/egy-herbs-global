'use client';

import { useState } from 'react';
import { ProductHero } from '@/components/products/hero';
import { ProductCategories } from '@/components/products/categories';
import { ProductGrid } from '@/components/products/product-grid';
import { ProductFilters } from '@/components/products/filters';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <ProductHero />
      <ProductCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-64 flex-shrink-0">
              <ProductFilters />
            </div>
            <div className="flex-1">
              <ProductGrid category={selectedCategory} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}