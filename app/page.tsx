import { HeroSection } from '@/components/home/hero-section';
import { BestSellers } from '@/components/home/best-sellers';
import { Newsletter } from '@/components/home/newsletter';
import { SoilSection } from '@/components/home/soil-section';
import { CollectionSection } from '@/components/home/collection-section';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { BlogSection } from '@/components/home/blog-section';
import { DiscoverSection } from '@/components/home/discover-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BestSellers />
      <Newsletter />
      <SoilSection />
      <CollectionSection />
      <WhyChooseUs />
      <BlogSection />
      <DiscoverSection />
    </div>
  );
}