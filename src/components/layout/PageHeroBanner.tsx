'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '../../context/StoreContext';

interface PageHeroBannerProps {
  pageKey?: string;
  categoryTag?: string;
  subTag?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  bannerBgImage?: string;
  alt?: string;
  actionButton?: React.ReactNode;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  pageKey,
  categoryTag: propTag,
  subTag: propSubTag,
  title: propTitle,
  description: propDesc,
  heroImage: propImg,
  bannerBgImage,
  alt,
  actionButton
}) => {
  const { pageBanners } = useStore();
  const bannerConfig = pageKey ? pageBanners[pageKey] : null;

  const bgImg = bannerConfig?.heroImage || propImg || bannerBgImage || '/category_spices.jpg';
  const displayTitle = bannerConfig?.title || propTitle || 'Beluga Category Banner';
  const displayTag = bannerConfig?.categoryTag || propTag;
  const displaySubTag = bannerConfig?.subTag || propSubTag;
  const displayDesc = bannerConfig?.description || propDesc;

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[400px] rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl mb-8 sm:mb-10 group select-none">
      <Image
        src={bgImg}
        alt={alt || displayTitle}
        fill
        className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
        priority
      />
      {/* Dark overlay for crisp readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-10" />

      {/* Banner Text Overlay Content */}
      <div className="relative z-20 h-full max-w-4xl px-8 sm:px-12 flex flex-col justify-center text-left text-white space-y-3">
        {(displayTag || displaySubTag) && (
          <div className="flex items-center gap-2 flex-wrap">
            {displayTag && (
              <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-amber-400/30">
                {displayTag}
              </span>
            )}
            {displaySubTag && (
              <span className="text-[11px] font-bold tracking-wider text-emerald-300 uppercase bg-emerald-950/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                {displaySubTag}
              </span>
            )}
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
          {displayTitle}
        </h1>

        {displayDesc && (
          <p className="text-stone-200 text-xs sm:text-sm lg:text-base max-w-xl leading-relaxed font-medium drop-shadow-xs">
            {displayDesc}
          </p>
        )}

        {actionButton && <div className="pt-2">{actionButton}</div>}
      </div>
    </div>
  );
};
