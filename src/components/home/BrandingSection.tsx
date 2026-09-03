'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Globe2, Leaf, MapPin, CheckCircle2 } from 'lucide-react';

export const BrandingSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-stone-50 via-emerald-50/20 to-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background Organic Ambient Glows */}
      <div className="absolute top-5 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Organic Leaf Wave Outline SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-5 -z-10 flex items-center justify-center overflow-hidden">
        <svg className="w-[1000px] h-[500px] text-emerald-900" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 20, 50 50 T 100 50 V 100 H 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Organic Content (Compact & Parallel Height) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-4">
            
            {/* Tag & Headline Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-300/60 px-3 py-1 rounded-full text-emerald-900 text-[11px] font-black tracking-widest uppercase shadow-xs">
                <Leaf className="w-3 h-3 text-emerald-700 fill-emerald-700/20" />
                <span>The Beluga Promise</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-snug">
                Purity Sourced Directly from{' '}
                <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-[#072655] bg-clip-text text-transparent block sm:inline">
                  Kerala’s Pristine Estates
                </span>
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                Beluga Fresh &amp; Beluga Pure represent the gold standard in Kerala agrarian produce. By cutting out intermediaries, we empower local farm cooperatives across Idukki, Wayanad, Palakkad, and Kottayam while delivering untouched natural purity.
              </p>
            </div>

            {/* Feature Cards - Compact Organic Design */}
            <div className="space-y-2.5 pt-1">
              
              <div className="group bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/60 group-hover:scale-105 transition-transform mt-0.5">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm group-hover:text-emerald-950 transition-colors">
                    100% Adulteration-Free Guarantee
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-normal">
                    Zero added artificial colors, mineral oils, or chemical glazes on whole spices &amp; fresh cuts.
                  </p>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-100 to-orange-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200/60 group-hover:scale-105 transition-transform mt-0.5">
                  <HeartHandshake className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm group-hover:text-amber-950 transition-colors">
                    Direct Fair-Trade Farm Pricing
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-normal">
                    Ensuring sustainable livelihoods and premium income for traditional Kerala farming families.
                  </p>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-100 to-sky-50 text-[#072655] flex items-center justify-center shrink-0 border border-blue-200/60 group-hover:scale-105 transition-transform mt-0.5">
                  <Globe2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm group-hover:text-[#072655] transition-colors">
                    Global Export Standard Compliance
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-normal">
                    Strict FSSAI and Rubber Board certification for international container export shipments.
                  </p>
                </div>
              </div>

            </div>

            {/* Compact Action Button */}
            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-800 via-teal-800 to-[#072655] hover:from-emerald-700 hover:to-[#0b3574] text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Organic Visual Estate Card (Parallel Height) */}
          <div className="lg:col-span-6 relative">
            
            {/* Organic Ambient Leaf Badge */}
            <div className="absolute -top-4 -left-4 bg-emerald-500/20 w-24 h-24 rounded-full blur-2xl pointer-events-none" />

            {/* Main Visual Card */}
            <div className="relative rounded-2xl sm:rounded-3xl rounded-tr-[3.5rem] overflow-hidden shadow-xl border border-emerald-900/20 group transition-all duration-500">
              
              {/* Background Estate Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/kerala_estate_banner.jpg"
                  alt="Kerala Spice & Tea Plantation Estates"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Organic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072655] via-[#072655]/85 to-emerald-950/75 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-[#072655]/90" />
              </div>

              {/* Content Overlay - Compact */}
              <div className="relative z-10 p-5 sm:p-6 text-white space-y-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-emerald-300 font-bold border border-emerald-400/30 shadow-xs">
                    <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>Kerala Agricultural Excellence</span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-amber-300/20">
                    <MapPin className="w-3 h-3" />
                    <span>Idukki &amp; Wayanad</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-black leading-snug tracking-tight text-white drop-shadow-xs">
                  From High-Range Cardamom Hills to Global Sea Ports
                </h3>

                {/* 4 Stat Pods - Compact Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:border-emerald-300/50 hover:bg-white/15 transition-all duration-300 group/pod">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white group-hover/pod:text-emerald-300 transition-colors">
                        15+
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 opacity-80" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-100 block">
                      Farmer Cooperatives
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:border-emerald-300/50 hover:bg-white/15 transition-all duration-300 group/pod">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white group-hover/pod:text-amber-300 transition-colors">
                        48 Hrs
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 opacity-80" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-100 block">
                      Farm to Processing
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:border-emerald-300/50 hover:bg-white/15 transition-all duration-300 group/pod">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white group-hover/pod:text-cyan-300 transition-colors">
                        100%
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 opacity-80" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-100 block">
                      RO Water Hygienic Wash
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:border-emerald-300/50 hover:bg-white/15 transition-all duration-300 group/pod">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white group-hover/pod:text-sky-300 transition-colors">
                        FOB/CIF
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 opacity-80" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-100 block">
                      Cochin Port Export
                    </span>
                  </div>

                </div>

                {/* Footer Ribbon inside card */}
                <div className="pt-1.5 flex items-center justify-between text-[11px] text-emerald-200/90 border-t border-white/15">
                  <span className="flex items-center gap-1 font-medium">
                    <Leaf className="w-3 h-3 text-emerald-400" />
                    Direct Estate Sourced
                  </span>
                  <span className="font-semibold text-white/90">
                    Beluga Fresh &amp; Beluga Pure
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


