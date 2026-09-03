import React from 'react';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';

export const metadata = {
  title: 'About Us | Beluga Fresh & Beluga Pure Kerala Heritage',
  description: 'Learn how Beluga Fresh bridges Kerala agricultural tradition with modern culinary convenience and global exports.'
};

export default function AboutPage() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Hero Banner */}
      <PageHeroBanner
        categoryTag="HERITAGE & VISION"
        subTag="KERALA AGRARIAN STORY"
        title="Rooted in Soil. Delivered Globally."
        description="Beluga Fresh & Beluga Pure bridge the rich agrarian heritage of Kerala with modern culinary convenience and global industrial quality."
      />

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
            <div className="text-3xl mb-2">🌱</div>
            <h3 className="font-bold text-stone-900 text-base">Direct From Farmers</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              We work directly with smallholder farming clusters in Idukki, Wayanad, Palakkad, and Kottayam, guaranteeing fair-trade pricing and zero adulteration.
            </p>
          </div>

          <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-stone-900 text-base">Hygienic Clean Cuts</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Our ready-to-cook Kerala sadya mixes are triple-washed in RO water and vacuum-sealed under 4°C cold-chain controls without artificial preservatives.
            </p>
          </div>

          <div className="bg-sky-50/60 p-6 rounded-2xl border border-sky-100">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-stone-900 text-base">Global Export Ready</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              From whole spices certified for maximum piperine and eugenol to natural rubber RSS sheets meeting Green Book norms for worldwide manufacturing.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#072655] text-white flex items-center justify-center font-black text-2xl shrink-0">
            BF
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Beluga Quality Guarantee</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              "Every pack of Beluga cardamom, avial mix, or rubber bale carries the fragrance and uncompromising pride of Kerala's soil. Pure. Natural. Sustainable."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
