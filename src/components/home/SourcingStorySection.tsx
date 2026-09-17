'use client';

import React from 'react';
import { Sprout, ShieldCheck, Snowflake, PlaneTakeoff, Award, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

import { useStore } from '../../context/StoreContext';

export const SourcingStorySection: React.FC = () => {
  const { journeySteps } = useStore();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Snowflake':
        return Snowflake;
      case 'PlaneTakeoff':
        return PlaneTakeoff;
      default:
        return Sprout;
    }
  };

  const processSteps = journeySteps.map((step, idx) => {
    const colors = [
      { color: 'from-emerald-100 to-teal-50 text-emerald-800 border-emerald-200/80', badgeColor: 'bg-emerald-100 text-emerald-900' },
      { color: 'from-blue-100 to-cyan-50 text-[#072655] border-blue-200/80', badgeColor: 'bg-blue-100 text-[#072655]' },
      { color: 'from-cyan-100 to-sky-50 text-cyan-800 border-cyan-200/80', badgeColor: 'bg-cyan-100 text-cyan-900' },
      { color: 'from-indigo-100 to-blue-50 text-indigo-800 border-indigo-200/80', badgeColor: 'bg-indigo-100 text-indigo-900' }
    ];
    const c = colors[idx % colors.length];
    return {
      ...step,
      icon: getStepIcon(step.iconName),
      color: c.color,
      badgeColor: c.badgeColor
    };
  });

  const qualityBadges = [
    { label: '100% Farm-Direct Sourcing', detail: 'Zero Middlemen' },
    { label: 'FSSAI Certified Facility', detail: 'Lic #11324005000128' },
    { label: 'Rubber Board Registered', detail: 'Reg #RB/KL/EX/2026' },
    { label: 'Zero Added Preservatives', detail: 'Pure & Natural' }
  ];

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-stone-50 via-emerald-50/20 to-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      
      {/* Organic Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1 rounded-full text-emerald-900 text-[11px] font-black tracking-widest uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our Farm-To-Table Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight pt-1">
            How Beluga Sourcing <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-[#072655] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            From the fertile hillsides of Kerala to your kitchen table or industrial plant — built on transparency, hygiene, and fair farm prices.
          </p>
        </div>

        {/* 4-Step Sourcing Process Timeline */}
        <div className="relative">
          
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-indigo-300 z-0 rounded-full opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xs p-5 sm:p-6 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon & Step Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-black px-3 py-1 rounded-full ${item.badgeColor} shadow-2xs`}>
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Quality Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Guarantee Banner - Organic Leaf Curved Silhouette */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-[#072655] text-white p-7 sm:p-9 rounded-3xl rounded-tr-[4rem] shadow-2xl border border-emerald-900/40 relative overflow-hidden">
          {/* Ambient Glow behind banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-7 space-y-2.5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-emerald-300 font-bold border border-emerald-400/30">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified Excellence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Authentic Kerala Soil Heritage
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                Every single batch of green cardamom, peeled sadya vegetables, desiccated coconut, and RSS 3 rubber is batch-tested for chemical purity, volatile oil content, and moisture limits before dispatch.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {qualityBadges.map((badge, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 hover:border-emerald-300/40 transition-colors">
                  <p className="font-extrabold text-xs text-white">{badge.label}</p>
                  <p className="text-[10px] font-semibold text-emerald-300 mt-0.5">{badge.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

