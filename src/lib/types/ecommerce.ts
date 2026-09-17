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
  images: string[];
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

export interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface PromiseItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface CategoryCardItem {
  id: string;
  href: string;
  brandTag: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  cta: string;
}

export interface JourneyStep {
  id: string;
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PageBannerConfig {
  categoryTag: string;
  subTag: string;
  title: string;
  description: string;
  heroImage: string;
}

export interface AboutPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutContent {
  missionTitle?: string;
  missionText?: string;
  visionTitle?: string;
  visionText?: string;
  pillars: AboutPillar[];
  guaranteeTitle: string;
  guaranteeText: string;
}

export interface ContactContent {
  officeAddress: string;
  phoneIndia: string;
  phoneUAE: string;
  email: string;
  fssaiNo: string;
  rubberBoardNo: string;
}

