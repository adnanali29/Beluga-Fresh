'use client';

import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ProductSVG } from './ProductSVG';
import { X, Check, Heart, MessageSquare } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, openB2BModal, wishlist, toggleWishlist } = useStore();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  if (!quickViewProduct) return null;

  const isRubber = quickViewProduct.navCategory === 'rubber';
  const isWish = wishlist.includes(quickViewProduct.id);
  const images = quickViewProduct.images && quickViewProduct.images.length > 0 ? quickViewProduct.images : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white border border-stone-200 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden my-8 text-stone-900">
        <button
          onClick={() => {
            setSelectedImgIdx(0);
            closeQuickView();
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 flex items-center justify-center text-stone-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image & Thumbnails Section optimized for 1080x1080 */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex flex-col items-center">
            <div className="w-full aspect-square relative rounded-xl bg-white p-2 border border-stone-100 flex items-center justify-center overflow-hidden shadow-inner">
              {images.length > 0 && !imgError ? (
                <img
                  src={images[selectedImgIdx] || images[0]}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-contain rounded-lg transition-all duration-300"
                  onError={() => setImgError(true)}
                />
              ) : (
                <ProductSVG type={quickViewProduct.imageType} />
              )}
            </div>

            {/* Thumbnail Selector if multiple images exist */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`w-14 h-14 rounded-lg p-1 border transition-all ${
                      selectedImgIdx === idx
                        ? 'border-[#072655] ring-2 ring-[#072655]/20 bg-white scale-105'
                        : 'border-stone-200 bg-stone-100 hover:border-stone-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain rounded" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-3 flex items-center justify-between text-xs text-stone-500 w-full pt-2 border-t border-stone-200">
              <span>Shelf Life: {quickViewProduct.shelfLife}</span>
              <span className="font-semibold text-[#072655]">Origin: {quickViewProduct.origin}</span>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <span className="bg-blue-100 text-[#072655] text-[11px] px-2.5 py-1 rounded-md font-bold uppercase">
                {quickViewProduct.badge}
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-2">{quickViewProduct.name}</h2>

              <p className="text-xs text-stone-600 mt-1 leading-relaxed">{quickViewProduct.description}</p>
            </div>

            {quickViewProduct.highlights && (
              <div className="space-y-1.5 text-xs text-stone-600">
                {quickViewProduct.highlights.map((hl: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#072655] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            )}

            {quickViewProduct.ingredients && (
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <p className="text-[11px] font-bold text-stone-900 mb-1">Contains Fresh Cuts Of:</p>
                <div className="flex flex-wrap gap-1">
                  {quickViewProduct.ingredients.map((ing: string, idx: number) => (
                    <span key={idx} className="bg-white text-stone-700 text-[10px] px-2 py-0.5 rounded border border-stone-200 font-medium">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Row */}
            <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-3">
              {isRubber ? (
                <button
                  onClick={() => {
                    closeQuickView();
                    openB2BModal();
                  }}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl text-xs cursor-pointer shadow-md transition flex items-center justify-center gap-2"
                >
                  Export RFQ
                </button>
              ) : (
                <button
                  onClick={() => {
                    addToCart(quickViewProduct.id, 1);
                    closeQuickView();
                  }}
                  className="flex-1 bg-[#072655] hover:bg-[#0b3574] text-white font-bold py-3 px-6 rounded-xl text-xs cursor-pointer shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire Now</span>
                </button>
              )}

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3 rounded-xl border transition flex items-center justify-center shrink-0 ${
                  isWish
                    ? 'bg-rose-50 border-rose-200 text-rose-500'
                    : 'bg-stone-100 hover:bg-stone-200 border-stone-200 text-stone-700'
                }`}
                title={isWish ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-4 h-4 ${isWish ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
