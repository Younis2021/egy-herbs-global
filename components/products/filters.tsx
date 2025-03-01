'use client';

import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Filter, RefreshCw } from "lucide-react";

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);
  
  const origins = ['Egypt', 'India', 'Sri Lanka', 'Morocco'];
  const certifications = ['Organic', 'Non-GMO', 'Fair Trade'];
  
  const handleOriginChange = (origin: string) => {
    setSelectedOrigins(prev => 
      prev.includes(origin) 
        ? prev.filter(o => o !== origin) 
        : [...prev, origin]
    );
  };
  
  const handleCertificationChange = (cert: string) => {
    setSelectedCertifications(prev => 
      prev.includes(cert) 
        ? prev.filter(c => c !== cert) 
        : [...prev, cert]
    );
  };
  
  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedOrigins([]);
    setSelectedCertifications([]);
  };

  return (
    <Card className="p-6 sticky top-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Filters</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="text-gray-500 hover:text-emerald-600 flex items-center gap-1 text-xs"
          >
            <RefreshCw className="h-3 w-3" />
            Reset
          </Button>
        </div>
        
        <div className="space-y-8">
          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-emerald-600" />
              Price Range
            </h4>
            <Slider
              value={priceRange}
              max={100}
              step={1}
              className="mb-2"
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Origin */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-emerald-600" />
              Origin
            </h4>
            <div className="space-y-2">
              {origins.map((origin) => (
                <div key={origin} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`origin-${origin}`} 
                    checked={selectedOrigins.includes(origin)}
                    onCheckedChange={() => handleOriginChange(origin)}
                    className="text-emerald-600 border-gray-300"
                  />
                  <Label 
                    htmlFor={`origin-${origin}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {origin}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-emerald-600" />
              Certifications
            </h4>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`cert-${cert}`} 
                    checked={selectedCertifications.includes(cert)}
                    onCheckedChange={() => handleCertificationChange(cert)}
                    className="text-emerald-600 border-gray-300"
                  />
                  <Label 
                    htmlFor={`cert-${cert}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {cert}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Apply Filters Button */}
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            Apply Filters
          </Button>
        </div>
      </motion.div>
    </Card>
  );
}