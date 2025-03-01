'use client';

import { AboutHero } from '@/components/about/hero';
import { OurStory } from '@/components/about/our-story';
import { OurValues } from '@/components/about/values';
import { TeamSection } from '@/components/about/team';
import { Testimonials } from '@/components/about/testimonials';
import { Partners } from '@/components/about/partners';
import { Stats } from '@/components/about/stats';
import { Mission } from '@/components/about/mission';
import { Awards } from '@/components/about/awards';
import { CTA } from '@/components/about/cta';

export default function AboutPage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <AboutHero />
      <Stats />
      <OurStory />
      <Mission />
      <OurValues />
      <TeamSection />
      <Awards />
      <Testimonials />
      <Partners />
      <CTA />
    </div>
  );
}