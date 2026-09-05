'use client';

import React, { useState, useEffect } from 'react';
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

  const images = product.images && product.images.length > 0 ? product.images : [];
  const hasMultipleImages = images.length > 1;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Auto-slide images every 3 seconds cleanly without overlay dots or badges
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, images.length]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl border border-stone-200 hover:border-[#072655] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      {/* Clean Image Container Optimized for 1080x1080 Square (1:1 Ratio) - No overlay dots or badges */}
      <div className="relative p-2.5 bg-stone-50/80 border-b border-stone-100 flex flex-col items-center justify-center overflow-hidden">
        <div
          onClick={() => openQuickView(product)}
          className="relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer flex items-center justify-center bg-white p-2 border border-stone-100 shadow-inner group-hover:border-stone-200 transition"
        >
          {images.length > 0 && !imgError ? (
            <img
              src={images[currentImgIndex]}
              alt={product.name}
              className="w-full h-full object-contain rounded-lg transition-all duration-700 ease-in-out group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <ProductSVG type={product.imageType} />
          )}
        </div>
      </div>

      {/* Card Body Information */}
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

          <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">{product.tagline}</p>

          <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-bold text-stone-800">{product.rating}</span>
            <span className="text-stone-400 text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
          {isRubber ? (
            <button
              onClick={openB2BModal}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
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

          {/* Wishlist Button */}
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
