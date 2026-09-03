'use client';

import React, { useState } from 'react';
import { CategorySlug } from '../../lib/types/ecommerce';
import { useStore } from '../../context/StoreContext';
import { ProductCard } from './ProductCard';
import { Search } from 'lucide-react';

interface ProductGridProps {
  category: CategorySlug;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const { products, searchQuery, setSearchQuery } = useStore();
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  let subCategories = ['all'];
  if (category === 'spices') {
    subCategories = ['all', 'Whole Spices'];
  } else if (category === 'veg-fruits') {
    subCategories = ['all', 'Ready-to-Cook Mixes', 'Coconut Products', 'Fresh Fruits', 'Vegetables & Greens'];
  } else if (category === 'rubber') {
    subCategories = ['all', 'Export Grade Rubber', 'Industrial Grade Rubber'];
  }

  const filteredProducts = products.filter(p => {
    const matchCat = p.navCategory === category;
    const matchSub = activeSubFilter === 'all' || p.subCategory === activeSubFilter;
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.regionalName && p.regionalName.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchSub && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Subcategory Filter Tabs */}
      {subCategories.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {subCategories.map(sub => (
            <button
              key={sub}
              onClick={() => setActiveSubFilter(sub)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeSubFilter === sub
                  ? 'bg-[#072655] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              {sub === 'all' ? 'All Items' : sub}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8">
          <Search className="w-10 h-10 text-stone-300 mx-auto mb-2" />
          <h3 className="text-lg font-bold text-stone-900">No products found</h3>
          <p className="text-stone-500 text-xs mt-1">Try clearing your search query or selecting "All Items"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveSubFilter('all');
            }}
            className="mt-4 bg-[#072655] text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-[#0b3574] transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
