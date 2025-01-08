'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
<<<<<<< HEAD
import { Logo } from '../ui/logo';
=======
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10

export function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('bestsellers');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<<<<<<< HEAD
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://egyherbsglobal-770136110.imgix.net/home/1.png")',
=======
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
<<<<<<< HEAD
          <h1 className="text-4xl sm:text-5xl md:text-[48px] font-bold mb-6 flex items-end justify-center gap-4">
            <span className="mb-1">
              <Logo />
            </span>
            <span className="mt-2">Finest Herbs & Spices</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our premium collection of Egyptian herbs, spices, and
            seeds, sourced directly from the fertile lands of the Nile Valley.
=======
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Nature's Finest Herbs & Spices
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our premium collection of organic herbs, spices, seeds, and legumes,
            sourced directly from nature's most pristine locations.
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Explore Products
            </Button>
<<<<<<< HEAD
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white/10 hover:text-white"
            >
=======
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
