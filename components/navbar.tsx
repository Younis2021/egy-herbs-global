'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingCart, Home, Package, Workflow, Info, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './ui/logo';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/process', label: 'Process', icon: Workflow },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Logo isScrolled={isScrolled || isOpen} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-emerald-600 text-white'
                      : isScrolled
                      ? 'text-gray-700 hover:bg-emerald-50'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <Button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-white text-emerald-700 hover:bg-white/90'
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || isOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                        pathname === link.href
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 z-40"
        />
      )}
    </>
  );
}