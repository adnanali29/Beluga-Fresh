import React from 'react';
import { ProductGrid } from '../../components/ecommerce/ProductGrid';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';
import { ProductSVG } from '../../components/ecommerce/ProductSVG';

export const metadata = {
  title: 'Beluga Pure Spices | Single-Estate Kerala Spices',
  description: 'Handpicked 8mm+ Green Cardamom, Malabar Bold Garbled Black Pepper, Whole Cloves with crowns, and Ceylon Cinnamon Sticks.'
};

export default function SpicesPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Hero Banner with Image Upload Slot */}
      <PageHeroBanner
        categoryTag="BELUGA CATALOG"
        subTag="SINGLE-ORIGIN SPICES"
        title="Beluga Pure Spices"
        description="Rooted in Kerala's heritage. Bold, natural, authentic green cardamom, Tellicherry black pepper, whole cloves, and Ceylon cinnamon."
        heroImage="/category_spices.jpg"
      />

      {/* Products Catalog Grid */}
      <ProductGrid category="spices" />
    </div>
  );
}
