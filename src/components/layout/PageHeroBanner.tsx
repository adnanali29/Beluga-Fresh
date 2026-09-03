'use client';

import React from 'react';
import Image from 'next/image';

interface PageHeroBannerProps {
  categoryTag?: string;
  subTag?: string;
  title?: string;
  description?: string;
  heroImage?: string; // High-res full banner image
  bannerBgImage?: string;
  alt?: string;
  actionButton?: React.ReactNode;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  title = 'Beluga Category Banner',
  heroImage,
  bannerBgImage,
  alt
}) => {
  const bgImg = heroImage || bannerBgImage || '/category_spices.jpg';

  return (
    <div className="relative w-full h-56 sm:h-72 lg:h-88 xl:h-[380px] rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl mb-8 sm:mb-10 group">
      <Image
        src={bgImg}
        alt={alt || title}
        fill
        className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
        priority
      />
    </div>
  );
};



