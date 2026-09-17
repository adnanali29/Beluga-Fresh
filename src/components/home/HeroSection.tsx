'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

import { useStore } from '../../context/StoreContext';

export const HeroSection: React.FC = () => {
  const { heroSlides } = useStore();
  const slides = heroSlides.length > 0 ? heroSlides : [
    {
      id: 'default',
      tag: '100% PURE KERALA PRODUCE',
      title: 'Taste Kerala. Love Natural.',
      description: 'Pre-cleaned Ready-to-Cook Sadya Vegetable Mixes & Spices',
      image: '/hero-banner-1920x910.jpg',
      ctaText: 'SHOP NOW',
      ctaLink: '/spices'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full max-w-[1920px] mx-auto h-[540px] sm:h-[580px] lg:h-[620px] bg-stone-950 text-white overflow-hidden group select-none">
      
      {/* Background Banner Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center brightness-75 hover:scale-105 transition-transform duration-10000"
            priority={idx === 0}
          />
          {/* Gradient Dark Overlay for Crisp Text Readability matching reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-10" />
        </div>
      ))}

      {/* Hero Slide Text Overlay Content Container matching reference layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full h-full flex flex-col justify-center text-left">
        <div className="max-w-2xl space-y-4">
          
          {/* Small Gold Category Tag */}
          <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase block">
            {activeSlide.tag}
          </span>

          {/* Large Bold Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            {activeSlide.title}
          </h1>

          {/* Subtitle description */}
          <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal">
            {activeSlide.description}
          </p>

          {/* Solid Dark Navy / Green SHOP NOW Button matching reference */}
          <div className="pt-3">
            <Link
              href={activeSlide.ctaLink}
              className="inline-block bg-[#072655] hover:bg-[#0c397c] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-md shadow-xl transition duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {activeSlide.ctaText}
            </Link>
          </div>

        </div>
      </div>

      {/* Slide Pagination Indicators matching reference */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-sky-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating WhatsApp Quick Support Button in Bottom-Right Corner matching reference */}
      <a
        href="https://wa.me/919447012345?text=Hello%20Beluga%20Team,%20I%20have%20an%20inquiry%20regarding%20Kerala%20produce/spices."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition duration-300 hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>

    </section>
  );
};
