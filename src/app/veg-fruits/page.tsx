import React from 'react';
import { ProductGrid } from '../../components/ecommerce/ProductGrid';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';
import { ProductSVG } from '../../components/ecommerce/ProductSVG';

export const metadata = {
  title: 'Vegetables & Fruits | Beluga Fresh Ready-to-Cook Mixes',
  description: 'Pre-cut Kerala Sadya Veg Mixes (Avial, Sambar, Thooran, Kalan, Olan), Desiccated Coconut, Butter Avocados, Vazhakulam Pineapple, and Greens.'
};

export default function VegFruitsPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Hero Banner with Image Upload Slot */}
      <PageHeroBanner
        categoryTag="BELUGA FRESH"
        subTag="VEGETABLES AND FRUITS"
        title="Kerala Vegetables & Fresh Fruits"
        description="Ready-to-cook festive sadya mixes, desiccated coconut flakes, exotic farm fruits, and farm-fresh greens picked daily."
        heroImage="/category_veg.jpg"
      />

      {/* Products Catalog Grid */}
      <ProductGrid category="veg-fruits" />
    </div>
  );
}
