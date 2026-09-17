'use client';

import React from 'react';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';
import { useStore } from '../../context/StoreContext';
import { Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const { aboutContent } = useStore();

  const defaultMission = "To bring the authentic purity, rich heritage, and unmatched quality of Kerala's organic produce—from farm-fresh spices and ready-to-cook traditional Sadya mixes to industrial-grade natural rubber—directly to kitchens and global industries worldwide, empowering local farming communities through transparent fair-trade partnerships.";
  const defaultVision = "To be the world's most trusted gateway to Kerala's rich agricultural legacy by setting global benchmarks in farm-to-table sustainability, cold-chain freshness, zero-adulteration purity, and ethical eco-conscious export practices.";

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Dynamic Page Hero Banner */}
      <PageHeroBanner pageKey="about" />

      {/* Mission & Vision Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-[#072655] to-[#0d3b80] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-amber-400/30">
              <Target className="w-4 h-4 text-amber-400" />
              <span>{aboutContent.missionTitle || 'Our Mission'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Authentic Kerala Heritage, Global Purity
            </h2>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-normal">
              {aboutContent.missionText || defaultMission}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3 text-xs text-amber-300 font-bold">
            <span>Direct Farmer Sourcing</span>
            <span>•</span>
            <span>Fair Trade Partnerships</span>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all duration-500" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-300 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-emerald-400/30">
              <Lightbulb className="w-4 h-4 text-emerald-300" />
              <span>{aboutContent.visionTitle || 'Our Vision'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Setting Global Farm-to-Table Benchmarks
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-normal">
              {aboutContent.visionText || defaultVision}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3 text-xs text-emerald-300 font-bold">
            <span>Zero-Adulteration Standard</span>
            <span>•</span>
            <span>Worldwide Export Desk</span>
          </div>
        </div>
      </div>

      {/* Core Pillars & Guarantee */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-8">
        <div>
          <h3 className="text-xl font-black text-stone-900 mb-1">Our Core Pillars</h3>
          <p className="text-xs text-stone-500">The foundational promises that drive every harvest, pack, and shipment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutContent.pillars.map(pillar => (
            <div key={pillar.id} className="bg-stone-50 hover:bg-blue-50/50 p-6 rounded-2xl border border-stone-200 hover:border-blue-200 transition-all">
              <div className="text-3xl mb-2">{pillar.icon}</div>
              <h3 className="font-bold text-stone-900 text-base">{pillar.title}</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#072655] text-amber-400 flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
            BF
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <span>{aboutContent.guaranteeTitle}</span>
              <span className="bg-amber-200 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">100% Certified</span>
            </h4>
            <p className="text-xs text-stone-700 mt-1.5 leading-relaxed italic font-medium">
              {aboutContent.guaranteeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

