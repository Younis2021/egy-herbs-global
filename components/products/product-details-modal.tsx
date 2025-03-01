'use client';

import { Product } from '@/types/product';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.url}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Botanical Name</h3>
                <p className="text-lg font-medium">{product.botanicalName}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Available Forms</h3>
                <p className="text-lg">{product.availableForms}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Packing</h3>
                <p className="text-lg">{product.packing}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                <p className="text-lg">{product.weight}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Season</h3>
                <p className="text-lg">{product.season}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}