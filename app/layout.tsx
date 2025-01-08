import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Egy Herbs Global - Premium Egyptian Herbs & Spices',
  description: 'Discover our premium collection of Egyptian herbs, spices, and seeds. Direct from Egypt\'s fertile lands, delivered globally.',
=======
  title: 'Herbal Treasures - Premium Herbs & Spices',
  description: 'Discover our premium collection of organic herbs, spices, seeds, and legumes. Sourced from nature, delivered with care.',
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}