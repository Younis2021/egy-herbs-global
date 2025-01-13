export interface Product {
  id: string;
  url: string;
  name: string;
  category: string;
  rating: number;
  botanicalName: string;
  availableForms: string;
  packing: string;
  weight: string;
  season: string;
  isBestSeller?: boolean;
}