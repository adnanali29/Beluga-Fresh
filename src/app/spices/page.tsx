import React from 'react';
import { ProductGrid } from '../../components/ecommerce/ProductGrid';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';

export const metadata = {
  title: 'Beluga Pure Spices | Single-Estate Kerala Spices',
  description: 'Handpicked 8mm+ Green Cardamom, Malabar Bold Garbled Black Pepper, Whole Cloves with crowns, and Ceylon Cinnamon Sticks.'
};

export default function SpicesPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dynamic Category Hero Banner */}
      <PageHeroBanner pageKey="spices" />

      {/* Products Catalog Grid */}
      <ProductGrid category="spices" />
    </div>
  );
}
