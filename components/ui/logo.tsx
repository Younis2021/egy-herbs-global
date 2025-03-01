'use client';

import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  width?: number;
  height?: number;
}

export function Logo({ 
  className, 
  isScrolled = false, 
  width = 40, 
  height = 40 
}: LogoProps) {
  return (
    <div className={cn(
      "flex items-center gap-2",
      className
    )}>
      <div className="flex items-center justify-center">
        <Leaf 
          className={cn(
            "transition-colors duration-300",
            isScrolled ? "text-emerald-600" : "text-white"
          )} 
          width={width} 
          height={height}
        />
      </div>
      <span className={cn(
        "font-bold text-2xl transition-colors duration-300",
        isScrolled ? "text-gray-900" : "text-white"
      )}>
        Egy Herbs Global
      </span>
    </div>
  );
}