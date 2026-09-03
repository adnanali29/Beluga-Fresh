'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 text-xs pt-12 pb-8 border-t border-stone-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-auto">
                <Image
                  src="/logo.jpg"
                  alt="Beluga Fresh Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain bg-white p-1 rounded-lg"
                />
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Taste Kerala. Love Natural. Farm-fresh vegetable mixes, single-estate spices, desiccated coconut, and export natural rubber.
            </p>
            <div className="text-[11px] text-sky-400 font-semibold">
              FSSAI Lic No: 11324005000128
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/spices" className="hover:text-sky-400 transition">Beluga Pure Spices</Link></li>
              <li><Link href="/veg-fruits" className="hover:text-sky-400 transition">Vegetables and fruits</Link></li>
              <li><Link href="/rubber" className="hover:text-sky-400 transition">Natural Rubber (RSS 3/4)</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition">About Our Kerala Heritage</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition">Contact & Export Desk</Link></li>
            </ul>
          </div>

          {/* Product Specialties */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Product Specialties</h4>
            <ul className="space-y-2 text-stone-400">
              <li>Sadya Avial & Sambar Mixes</li>
              <li>8mm+ Bold Green Cardamom</li>
              <li>Desiccated Coconut Pouch & Box</li>
              <li>Vazhakulam GI Pineapples</li>
              <li>Green Book RSS 3 Rubber Sheets</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm mb-3">Kerala Office</h4>
            <p className="text-stone-300">Rubber Board Complex Road, Kottayam, Kerala 686002, India</p>
            <p className="text-stone-300">+91 481 258 4400</p>
            <p className="text-stone-300">hello@belugafresh.com</p>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <p>© 2026 Beluga Fresh & Beluga Pure. All Rights Reserved. Proudly From Kerala, India.</p>
          <div className="flex gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer">Export Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
