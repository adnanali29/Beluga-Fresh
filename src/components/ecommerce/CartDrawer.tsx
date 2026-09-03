'use client';

import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MessageSquare, X, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    toggleCartDrawer,
    updateCartQty,
    removeCartItem,
    openEnquiryModal
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 p-6 flex flex-col justify-between shadow-2xl">
          
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#072655]" />
                <h3 className="font-black text-lg text-stone-900">Selected Enquiry Items</h3>
              </div>
              <button
                onClick={() => toggleCartDrawer(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-500 my-3">
              Add produce & spices to your inquiry list and request direct wholesale / retail price quotes.
            </p>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="text-center py-12 text-stone-400 space-y-2">
                <MessageSquare className="w-12 h-12 mx-auto text-stone-300" />
                <p className="font-bold text-stone-800 text-sm">Your enquiry list is empty</p>
                <p className="text-xs text-stone-500">Explore spices, mixes, and fresh produce to add items</p>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto max-h-[55vh] pr-1">
                {cart.map(item => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-stone-900 line-clamp-1">{item.product.name}</h4>
                      <span className="text-[11px] text-stone-500">
                        {item.product.weight} • {item.product.brand}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-stone-200">
                      <button
                        onClick={() => updateCartQty(item.product.id, -1)}
                        className="text-stone-500 hover:text-stone-900 font-bold px-1"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-stone-900">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQty(item.product.id, 1)}
                        className="text-stone-500 hover:text-stone-900 font-bold px-1"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeCartItem(item.product.id)}
                      className="text-stone-400 hover:text-rose-500 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Enquiry Action */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <div className="flex justify-between text-xs font-bold text-stone-700">
              <span>Total Selected Items</span>
              <span className="text-[#072655] font-black">{cart.reduce((a, i) => a + i.quantity, 0)} Items</span>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={openEnquiryModal}
              className="w-full bg-[#072655] hover:bg-[#0b3574] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
