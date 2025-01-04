'use client';

import { AboutHero } from '@/components/about/hero';
import { OurStory } from '@/components/about/our-story';
import { OurValues } from '@/components/about/values';
import { TeamSection } from '@/components/about/team';
import { Testimonials } from '@/components/about/testimonials';
import { Partners } from '@/components/about/partners';

export default function AboutPage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <Testimonials />
      <Partners />
    </div>
  );
}