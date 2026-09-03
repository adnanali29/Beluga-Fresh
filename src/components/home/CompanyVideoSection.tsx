'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Sparkles } from 'lucide-react';

export const CompanyVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 16:9 Aspect Size Hero Video Banner */}
      <div className="relative w-full aspect-[16/9] min-h-[340px] sm:min-h-[460px] lg:min-h-[520px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-emerald-950 text-white flex items-center justify-center shadow-2xl border border-emerald-900/30">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility_video_bg.jpg"
            alt="Beluga Kerala Facility & Estate Tour"
            fill
            className="object-cover object-center brightness-75 scale-105"
            priority
          />
          {/* Dark Overlay Tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-black/75 to-emerald-950/90" />
          <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply" />
        </div>

        {/* Main Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-3 sm:space-y-4">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Facility Tour</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Inside Beluga Processing Facilities
          </h2>

          {/* Subtitle */}
          <p className="text-emerald-100/90 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Take a 3-minute video tour of our state-of-the-art RO washing facility in Kottayam, cold storage units, and natural rubber smoke curing yards.
          </p>

          {/* Center Glassmorphic Play Button Pill */}
          <div className="pt-2 sm:pt-3 flex justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="group inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-md text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-amber-400 group-hover:bg-amber-300 text-slate-950 flex items-center justify-center transition-colors shadow-sm">
                <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
              </div>
              <span>Watch Facility Tour</span>
            </button>
          </div>

        </div>

      </div>

      {/* Full-Screen Video Modal Popup */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-800 text-white p-2 rounded-full border border-white/20 transition-colors cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Beluga Kerala Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
};


