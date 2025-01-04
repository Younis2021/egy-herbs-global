'use client';

import { ContactHero } from '@/components/contact/hero';
import { ContactForm } from '@/components/contact/form';
import { ContactInfo } from '@/components/contact/info';
import { LocationMap } from '@/components/contact/map';
import { FAQ } from '@/components/contact/faq';

export default function ContactPage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <LocationMap />
      <FAQ />
    </div>
  );
}