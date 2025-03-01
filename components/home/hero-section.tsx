'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { ChevronDown, ShoppingCart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('bestsellers');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <Image
          src="https://egyherbsglobal-770136110.imgix.net/home/hero.png"
          alt="Egyptian herbs"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Animated Particles - Only rendered client-side to prevent hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.7, 0.1, 0.7],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Logo isScrolled={false} width={60} height={60} />
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              Egypt's Finest
            </span>
            <br />
            Herbs & Spices
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover our premium collection of Egyptian herbs, spices, and
            seeds, sourced directly from the fertile lands of the Nile Valley.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-7 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:shadow-emerald-600/50 hover:scale-105 flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Explore Products
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 hover:text-white text-lg px-8 py-7 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Floating badges */}
          {isMounted && (
            <>
              <div className="absolute top-20 -left-10 md:left-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium shadow-xl"
                >
                  100% Organic
                </motion.div>
              </div>
              
              <div className="absolute bottom-40 -right-10 md:right-20">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium shadow-xl"
                >
                  Premium Quality
                </motion.div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToNextSection}
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent z-5" />
      
      {isMounted && (
        <>
          <motion.div 
            className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-1"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl z-1"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </>
      )}
    </section>
  );
}