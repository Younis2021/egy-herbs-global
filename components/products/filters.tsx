'use client';

import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export function ProductFilters() {
  return (
    <Card className="p-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-semibold text-lg mb-4">Filters</h3>
        
        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>

          {/* Origin */}
          <div>
            <h4 className="font-medium mb-3">Origin</h4>
            <div className="space-y-2">
              {['India', 'Sri Lanka', 'Egypt', 'Morocco'].map((origin) => (
                <div key={origin} className="flex items-center space-x-2">
                  <Checkbox id={`origin-${origin}`} />
                  <Label htmlFor={`origin-${origin}`}>{origin}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-medium mb-3">Certifications</h4>
            <div className="space-y-2">
              {['Organic', 'Non-GMO', 'Fair Trade'].map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox id={`cert-${cert}`} />
                  <Label htmlFor={`cert-${cert}`}>{cert}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
}