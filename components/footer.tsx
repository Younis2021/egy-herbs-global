import Link from 'next/link';
<<<<<<< HEAD
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Logo } from './ui/logo';
=======
import { Leaf, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
<<<<<<< HEAD
            <Logo className="text-white" width={60} height={60} />
            <p className="text-sm">
              Premium quality Egyptian herbs, spices, and seeds, sourced directly from Egypt's fertile lands.
=======
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl text-white">Herbal Treasures</span>
            </div>
            <p className="text-sm">
              Premium quality herbs, spices, seeds, and legumes sourced directly from nature.
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-emerald-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-emerald-500 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#herbs" className="hover:text-emerald-500 transition-colors">
                  Herbs
                </Link>
              </li>
              <li>
                <Link href="/products#spices" className="hover:text-emerald-500 transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link href="/products#seeds" className="hover:text-emerald-500 transition-colors">
                  Seeds
                </Link>
              </li>
<<<<<<< HEAD
=======
              <li>
                <Link href="/products#legumes" className="hover:text-emerald-500 transition-colors">
                  Legumes
                </Link>
              </li>
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li>Email: info@egyherbsglobal.com</li>
              <li>Phone: +20 123 456 789</li>
              <li>Address: Industrial Zone, Cairo, Egypt</li>
=======
              <li>Email: info@herbaltreasures.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Nature Way, Green Valley, CA 90210</li>
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
<<<<<<< HEAD
          <p>&copy; {new Date().getFullYear()} Egy Herbs Global. All rights reserved.</p>
=======
          <p>&copy; {new Date().getFullYear()} Herbal Treasures. All rights reserved.</p>
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
        </div>
      </div>
    </footer>
  );
}