import React from 'react';
import { ProductGrid } from '../../components/ecommerce/ProductGrid';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';

export const metadata = {
  title: 'Vegetables & Fruits | Beluga Fresh Ready-to-Cook Mixes',
  description: 'Pre-cut Kerala Sadya Veg Mixes (Avial, Sambar, Thooran, Kalan, Olan), Desiccated Coconut, Butter Avocados, Vazhakulam Pineapple, and Greens.'
};

export default function VegFruitsPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dynamic Category Hero Banner */}
      <PageHeroBanner pageKey="veg-fruits" />

      {/* Products Catalog Grid */}
      <ProductGrid category="veg-fruits" />
    </div>
  );
}
