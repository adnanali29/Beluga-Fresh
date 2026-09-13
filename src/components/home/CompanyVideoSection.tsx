'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const facilityVideos = [
  { id: 1, src: '/videos/shadaya.mp4' },
  { id: 2, src: '/videos/cardamom.mp4' },
  { id: 3, src: '/videos/blackpepper.mp4' },
  { id: 4, src: '/videos/thoorandal.mp4' },
];

export const CompanyVideoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play next video when current index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [currentIndex]);

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % facilityVideos.length);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentVideo = facilityVideos[currentIndex];

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Top Heading Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
          Inside Beluga Processing Facilities
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
          Experience our state-of-the-art RO washing, spice grading, cold storage, and export packaging units operating in real-time across Kerala.
        </p>
      </div>

      {/* Pure Edge-to-Edge Clean Video Card */}
      <div className="relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[460px] lg:min-h-[540px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-stone-800 group">
        
        {/* Video Element - Edge-to-edge object-cover with zero overlays */}
        <video
          ref={videoRef}
          key={currentVideo.src}
          src={currentVideo.src}
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover"
        />

        {/* Subtle Floating Mute Toggle Button on Hover */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer shadow-lg"
          title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>

      </div>

    </section>
  );
};




