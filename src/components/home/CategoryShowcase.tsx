'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Leaf, Factory, Flame, ChevronRight } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const CategoryShowcase: React.FC = () => {
  const { categoryCards } = useStore();
  const categories = categoryCards;

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('spice')) return Flame;
    if (title.toLowerCase().includes('rubber')) return Factory;
    return Leaf;
  };

  return (
    <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full text-emerald-900 text-[11px] font-black tracking-widest uppercase shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Beluga Product Ranges</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Explore by <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-[#072655] bg-clip-text text-transparent">Category</span>
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
          From Kerala’s high-range spice gardens to farm-fresh produce mixes and industrial smoked rubber.
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((item, idx) => {
          const IconComp = getIcon(item.title);
          return (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300/80 transition-all duration-500 flex flex-col justify-between overflow-hidden relative cursor-pointer"
            >
              <div>
                {/* Image Container with Dynamic Hover Zoom */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />



                  {/* Icon Floating Badge */}
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-stone-900 flex items-center justify-center shadow-md border border-white/40 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-4.5 h-4.5 text-emerald-800" />
                    </div>
                    <span className="text-white font-extrabold text-lg drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-2.5">
                  <p className="text-stone-600 text-xs leading-relaxed min-h-[3.25rem]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive CTA Bar */}
              <div className="px-5 pb-5 pt-1">
                <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-bold text-[#072655] group-hover:text-emerald-800 transition-colors">
                  <span>{item.cta}</span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-emerald-800 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </Link>
          );
        })}
      </div>

    </section>
  );
};

