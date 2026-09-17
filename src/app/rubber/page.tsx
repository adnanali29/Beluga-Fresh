'use client';

import React from 'react';
import { ProductGrid } from '../../components/ecommerce/ProductGrid';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';
import { RubberProcessSection } from '../../components/home/RubberProcessSection';
import { useStore } from '../../context/StoreContext';
import { FileText } from 'lucide-react';

export default function RubberPage() {
  const { openB2BModal } = useStore();

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dynamic Category Hero Banner */}
      <PageHeroBanner
        pageKey="rubber"
        actionButton={
          <button
            onClick={openB2BModal}
            className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 shadow-md cursor-pointer transition"
          >
            <FileText className="w-4 h-4" />
            <span>Request Export Container RFQ</span>
          </button>
        }
      />

      {/* Products Catalog Grid */}
      <ProductGrid category="rubber" />

      {/* 5-Step Process Infographic */}
      <RubberProcessSection />
    </div>
  );
}
