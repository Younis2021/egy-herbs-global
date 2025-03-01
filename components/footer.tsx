'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './ui/logo';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-emerald-800 rounded-2xl p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-emerald-100">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-emerald-600 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="bg-white text-emerald-800 hover:bg-emerald-100 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="block">
              <Logo className="text-white" width={60} height={60} />
            </div>
            <p className="text-sm">
              Premium quality Egyptian herbs, spices, and seeds, sourced directly from Egypt's fertile lands.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-emerald-500 transition-colors p-2 bg-gray-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors p-2 bg-gray-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors p-2 bg-gray-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors p-2 bg-gray-800 rounded-full">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products#herbs" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Herbs
                </Link>
              </li>
              <li>
                <Link href="/products#spices" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Spices
                </Link>
              </li>
              <li>
                <Link href="/products#seeds" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Seeds
                </Link>
              </li>
              <li>
                <Link href="/products#legumes" className="hover:text-emerald-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  Legumes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>info@egyherbsglobal.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>+20 123 456 789</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Industrial Zone, Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Egy Herbs Global. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-emerald-500 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}