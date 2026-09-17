'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

import { useStore } from '../../context/StoreContext';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useStore();
  const reviews = testimonials;

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-[#072655] uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight pt-1">
            What Our Clients & Chefs Say
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Real feedback from commercial kitchens, global rubber buyers, and spice connoisseurs.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 stroke-1" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-stone-900 text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-stone-500">{rev.role}</p>
                  <p className="text-[10px] text-[#072655] font-bold mt-0.5">{rev.location}</p>
                </div>

                <div className="bg-blue-50 text-[#072655] text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{rev.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
