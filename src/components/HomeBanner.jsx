"use client";
import React, { useEffect, useState } from 'react';

const desktopBanners = [
  "/banner1.jpg",
  "/banner2.jpg",
];

const mobileBanners = [
  "/banner1M.jpg",
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Changed from 640 to 768
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const arr = isMobile ? mobileBanners : desktopBanners;
        return (prev + 1) % arr.length;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const banners = isMobile ? mobileBanners : desktopBanners;

  return (
    <div className="relative w-full mt-16 md:mt-20 lg:mt-24 overflow-hidden">
      {/* Mobile Banner */}
      <div className="md:hidden">
        <div 
          className="relative w-full"
          style={{ 
            minHeight: '250px',
            height: '50vw',
            maxHeight: '400px'
          }}
        >
          {mobileBanners.map((src, i) => (
            <img
              key={`mobile-${src}`}
              src={src}
              alt={`Mobile Banner ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Banner */}
      <div className="hidden md:block">
        <div 
          className="relative w-full"
          style={{ 
            minHeight: '400px',
            height: '60vh',
            maxHeight: '700px'
          }}
        >
          {desktopBanners.map((src, i) => (
            <img
              key={`desktop-${src}`}
              src={src}
              alt={`Desktop Banner ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 focus:outline-none ${
              index === i 
                ? 'bg-[#449833] border-[#449833] scale-125' 
                : 'bg-white/70 border-white hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;