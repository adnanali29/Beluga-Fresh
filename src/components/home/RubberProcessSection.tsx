'use client';

import React from 'react';

export const RubberProcessSection: React.FC = () => {
  return (
    <div className="mt-14 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="text-xs font-bold text-[#072655] uppercase tracking-wider">Sustainable Sourcing</span>
        <h3 className="text-2xl font-black text-stone-900 mt-1">From Tree to Rubber Sheet — 5 Stage Process</h3>
        <p className="text-xs text-stone-500 mt-1">Hygienically processed and smoke cured to international Green Book standards</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <span className="text-3xl block mb-2">🌲</span>
          <span className="text-[10px] font-black text-[#072655] uppercase">Step 1</span>
          <p className="font-bold text-xs text-stone-900 mt-0.5">Tapping</p>
          <p className="text-[10px] text-stone-500 mt-1">Dawn harvest cuts</p>
        </div>
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <span className="text-3xl block mb-2">🥛</span>
          <span className="text-[10px] font-black text-[#072655] uppercase">Step 2</span>
          <p className="font-bold text-xs text-stone-900 mt-0.5">Latex Collection</p>
          <p className="text-[10px] text-stone-500 mt-1">DRC % testing</p>
        </div>
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <span className="text-3xl block mb-2">🥣</span>
          <span className="text-[10px] font-black text-[#072655] uppercase">Step 3</span>
          <p className="font-bold text-xs text-stone-900 mt-0.5">Coagulation</p>
          <p className="text-[10px] text-stone-500 mt-1">Formic acid vats</p>
        </div>
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <span className="text-3xl block mb-2">📜</span>
          <span className="text-[10px] font-black text-[#072655] uppercase">Step 4</span>
          <p className="font-bold text-xs text-stone-900 mt-0.5">Sheeting</p>
          <p className="text-[10px] text-stone-500 mt-1">Ribbed rolls & smoke</p>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-stone-50 p-4 rounded-xl border border-stone-200">
          <span className="text-3xl block mb-2">🚢</span>
          <span className="text-[10px] font-black text-[#072655] uppercase">Step 5</span>
          <p className="font-bold text-xs text-stone-900 mt-0.5">Export Shipping</p>
          <p className="text-[10px] text-stone-500 mt-1">Cochin (COK) Port</p>
        </div>
      </div>
    </div>
  );
};
