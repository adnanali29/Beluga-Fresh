export type CurrencyCode = 'INR' | 'USD' | 'AED' | 'EUR';

export interface CurrencyConfig {
  symbol: string;
  rate: number;
}

export type CategorySlug = 'spices' | 'veg-fruits' | 'rubber';

export interface Product {
  id: string;
  name: string;
  regionalName?: string;
  navCategory: CategorySlug;
  subCategory: string;
  tagline: string;
  brand: 'BELUGA PURE' | 'BELUGA FRESH' | 'BELUGA INDUSTRIAL';
  priceINR: number;
  rating: number;
  reviewsCount: number;
  weight: string;
  badge: string;
  description: string;
  highlights?: string[];
  ingredients?: string[];
  imageType: string;
  origin: string;
  shelfLife: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface B2BInquiry {
  companyName: string;
  country: string;
  email: string;
  phone: string;
  productRequired: string;
  volumeAndTerms: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  message?: string;
}
