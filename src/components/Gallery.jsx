
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const images = [
  { src: '/Bhansali Abs Plastic Granules.png', alt: 'ABS PLASTIC GRANULES', slug: 'abs-granules' },
  { src: '/Green Reprocessed Abs Granules.png', alt: 'GREEN ABS GRANULES', slug: 'abs-granules' },
  { src: '/Grey Reprocessed Abs Granules.png', alt: 'GREY ABS GRANULES', slug: 'abs-granules' },
  { src: '/Milky White Reprocessed Abs Granules.png', alt: 'WHITE ABS GRANULES', slug: 'abs-granules' },
  { src: '/Purple Reprocessed Abs Granules.png', alt: 'PURPLE ABS GRANULES', slug: 'abs-granules' },
  { src: '/RAA-100 Blue Reprocessed Abs Granules.png', alt: 'BLUE ABS GRANULES', slug: 'abs-granules' },
  { src: '/Prime GPPS Virgin Granules.png', alt: 'GPPS VIRGIN GRANULES', slug: 'gpps-granules' },
  { src: '/Styrenix 133 GPPS Virgin Granules.png', alt: 'GPPS STYRENIX GRANULES', slug: 'gpps-granules' },
  { src: '/Polimaxx GPPS GP-150.png', alt: 'GPPS POLIMAXX GRANULES', slug: 'gpps-granules' },
  { src: '/Gpps Reprocessed Granules.png', alt: 'GPPS REPROCESSED GRANULES', slug: 'gpps-granules' },
  { src: '/Black GPPS Reprocess Granules.png', alt: 'BLACK GPPS GRANULES', slug: 'gpps-granules' },
  { src: '/Ivory GPPS Reprocess Granules.png', alt: 'IVORY GPPS GRANULES', slug: 'gpps-granules' },
  { src: '/Pink GPPS Reprocess Granules.png', alt: 'PINK GPPS GRANULES', slug: 'gpps-granules' },
  { src: '/Amber GPPS Reprocessed Granule.png', alt: 'AMBER GPPS GRANULES', slug: 'gpps-granules' },
  { src: '/M12RR Hmel PP Injection Molding Granules.png', alt: 'PP INJECTION GRANULES', slug: 'pp-granules' },
  { src: '/Reprocessed San Granules.png', alt: 'SAN REPROCESSED GRANULES', slug: 'san-granules' },
  { src: '/Reprocessed San Granules 1.png', alt: 'SAN GRANULES TYPE 1', slug: 'san-granules' },
  { src: '/Reprocessed San Granules 2.png', alt: 'SAN GRANULES TYPE 2', slug: 'san-granules' },
  { src: '/Reprocessed San Granules 3.png', alt: 'SAN GRANULES TYPE 3', slug: 'san-granules' },
  { src: '/Kumho San 310 C Tr.png', alt: 'KUMHO SAN GRANULES', slug: 'san-granules' },
  { src: '/Natural San Regrind.png', alt: 'NATURAL SAN REGRIND', slug: 'san-granules' },
  { src: '/WANKAI Pet Granules.png', alt: 'PET GRANULES', slug: 'pet-granules' },
  { src: '/Virgin ABS Natural Granules.png', alt: 'VIRGIN ABS NATURAL', slug: 'abs-granules' },
  { src: '/RAA-4100 S Natural Abs Granules.png', alt: 'NATURAL ABS GRANULES', slug: 'abs-granules' },
  { src: '/RAA-360 Pioneer Green Abs Plastic Granules.png', alt: 'PIONEER GREEN ABS', slug: 'abs-granules' },
  { src: '/RAA-2580 Garnet Red Abs Granules.png', alt: 'GARNET RED ABS', slug: 'abs-granules' },
  { src: '/RAA-2130 Philips Yellow Reprocessed Abs Granules.png', alt: 'YELLOW ABS GRANULES', slug: 'abs-granules' },
  { src: '/RAA -2550 S Standard Red ABS Plastic Granules.png', alt: 'STANDARD RED ABS', slug: 'abs-granules' },
  { src: '/RAA-850 B Pink Reprocessed Abs Granules.png', alt: 'PINK ABS GRANULES', slug: 'abs-granules' },
  { src: '/Polimaxx ABS GA 850.png', alt: 'POLIMAXX ABS GRANULES', slug: 'abs-granules' },
  { src: '/Red Reprocessed Abs Plastic Granules.png', alt: 'RED ABS GRANULES', slug: 'abs-granules' },
  { src: '/Yellow Recycled Abs Plastic Granules.png', alt: 'YELLOW RECYCLED ABS', slug: 'abs-granules' },
  { src: '/White Recycled Abs Plastic Granules.png', alt: 'WHITE RECYCLED ABS', slug: 'abs-granules' },
  { src: '/Natural Recycled Transparent Abs Plastic Granules.png', alt: 'TRANSPARENT ABS', slug: 'abs-granules' },
  { src: '/Purple Blue Reprocessed Abs Granules.png', alt: 'PURPLE BLUE ABS', slug: 'abs-granules' },
 
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(images);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(images);
      } else {
        setVisibleImages(images.slice(0, images.length - 1));
      }
    };
    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F0F8FF] py-10 px-4">
      <h2 className="text-3xl font-bold text-[#449833] text-center mb-10 tracking-wide">Our Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-[#E8F4FD] rounded-lg shadow-md overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-[#449833] focus:outline-none cursor-pointer"
            tabIndex={0}
            onClick={() => img.slug && router.push(`/products/${img.slug}`)}
            onKeyDown={e => {
              if (e.key === 'Enter' && img.slug) router.push(`/products/${img.slug}`);
            }}
            role="button"
            aria-label={`Go to ${img.alt} page`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-contain bg-[#F0F8FF]"
            />
            <div className="py-2 text-black font-semibold text-sm text-center w-full border-t border-[#449833] bg-[#48A1C7]">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;