'use client';

import { ProcessHero } from '@/components/process/hero';
import { SupplyChain } from '@/components/process/supply-chain';
import { QualityControl } from '@/components/process/quality-control';
import { Sustainability } from '@/components/process/sustainability';
import { Certifications } from '@/components/process/certifications';

export default function ProcessPage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <ProcessHero />
      <SupplyChain />
      <QualityControl />
      <Sustainability />
      <Certifications />
    </div>
  );
}