'use client';

import React from 'react';
import { Product } from '../../lib/types/ecommerce';
import { useStore } from '../../context/StoreContext';
import { ProductSVG } from './ProductSVG';
import { Heart, Star, MessageSquare, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, openB2BModal, openQuickView } = useStore();

  const isWish = wishlist.includes(product.id);
  const isRubber = product.navCategory === 'rubber';

  return (
    <div className="bg-white rounded-2xl border border-stone-200 hover:border-[#072655] hover:shadow-lg transition flex flex-col justify-between overflow-hidden group">
      <div className="relative p-3 bg-stone-50/70 border-b border-stone-100 flex items-center justify-center">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#072655] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wide">
            {product.badge}
          </span>
        </div>

        <div
          onClick={() => openQuickView(product)}
          className="cursor-pointer group-hover:scale-105 transition duration-300 w-full flex items-center justify-center py-2"
        >
          <ProductSVG type={product.imageType} />
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="font-bold text-[#072655] uppercase tracking-wider">{product.brand}</span>
            <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700 font-semibold">{product.weight}</span>
          </div>

          <h3
            onClick={() => openQuickView(product)}
            className="font-black text-sm text-stone-900 group-hover:text-[#072655] transition cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          {product.regionalName && (
            <p className="text-xs font-bold text-[#072655]">{product.regionalName}</p>
          )}
          <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">{product.tagline}</p>

          <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-bold text-stone-800">{product.rating}</span>
            <span className="text-stone-400 text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Action Row matching Reference: Inquire CTA taking space on Left, Wishlist Heart button pushed to Far Right */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
          {isRubber ? (
            <button
              onClick={openB2BModal}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Export RFQ</span>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product.id, 1)}
              className="flex-1 bg-[#072655] hover:bg-[#0b3574] active:scale-95 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </button>
          )}

          {/* Wishlist Heart Button Pushed to Far Right */}
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-2.5 rounded-xl border transition flex items-center justify-center shrink-0 ${
              isWish
                ? 'bg-rose-50 border-rose-200 text-rose-500'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-500'
            }`}
            title={isWish ? 'Saved in Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWish ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
