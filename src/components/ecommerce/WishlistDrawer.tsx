'use client';

import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Heart, X, Plus } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    products,
    wishlist,
    isWishlistOpen,
    toggleWishlistDrawer,
    toggleWishlist,
    addToCart,
    formatPrice
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <h3 className="font-black text-lg text-stone-900">Saved Wishlist</h3>
              </div>
              <button
                onClick={() => toggleWishlistDrawer(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {wishlistProducts.length === 0 ? (
              <div className="text-center py-12 text-stone-400 space-y-2">
                <Heart className="w-12 h-12 mx-auto text-stone-300" />
                <p className="font-bold text-stone-800 text-sm">Your wishlist is empty</p>
                <p className="text-xs text-stone-500">Tap the heart icon on any product to save it here</p>
              </div>
            ) : (
              <div className="mt-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {wishlistProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-stone-900 line-clamp-1">{product.name}</h4>
                      <p className="text-xs text-[#072655] font-bold">{formatPrice(product.priceINR)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          addToCart(product.id, 1);
                          toggleWishlist(product.id);
                        }}
                        className="bg-[#072655] hover:bg-[#0b3574] text-white p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-stone-400 hover:text-rose-500 p-1.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => toggleWishlistDrawer(false)}
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 rounded-xl font-bold text-xs transition"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
