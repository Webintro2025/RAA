"use client";
import React, { useEffect, useState } from 'react';

const images = [
  // ABS Granules
  { src: '/Bhanshali MI 45 ABS Natural.png', alt: 'BHANSALI ABS NATURAL', slug: 'abs-granules' },
  { src: '/Polimaxx ABS GA 850.png', alt: 'POLIMAXX ABS GRANULES', slug: 'abs-granules' },
  { src: '/Taita 5000 W ABS Natural.png', alt: 'TAITA ABS NATURAL', slug: 'abs-granules' },
  { src: '/RAA-4100 S Natural Abs Granules.png', alt: 'RAA NATURAL ABS', slug: 'abs-granules' },
  { src: '/RAA-4100 Semi Transparent Natural ABS Granules.png', alt: 'RAA SEMI TRANSPARENT ABS', slug: 'abs-granules' },
  { src: '/RAA-100 Blue Reprocessed Abs Granules.png', alt: 'RAA BLUE ABS', slug: 'abs-granules' },
  { src: '/RAA-360 Pioneer Green Abs Plastic Granules.png', alt: 'RAA PIONEER GREEN ABS', slug: 'abs-granules' },
  { src: '/RAA-2580 Garnet Red Abs Granules.png', alt: 'RAA GARNET RED ABS', slug: 'abs-granules' },
  { src: '/RAA-2130 Philips Yellow Reprocessed Abs Granules.png', alt: 'RAA YELLOW ABS', slug: 'abs-granules' },
  { src: '/RAA -2550 S Standard Red ABS Plastic Granules.png', alt: 'RAA STANDARD RED ABS', slug: 'abs-granules' },
  { src: '/RAA-850 B Pink Reprocessed Abs Granules.png', alt: 'RAA PINK ABS', slug: 'abs-granules' },
  { src: '/RAA-760 IP Violet ABS Granules.png', alt: 'RAA PURPLE ABS', slug: 'abs-granules' },
  { src: '/RAA-1200 Fl. Orange ABS Granules. Orange ABS Granules.png', alt: 'RAA ORANGE ABS', slug: 'abs-granules' },
  { src: '/RAA-2725 Poster Green ABS Granules.png', alt: 'RAA POSTER GREEN ABS', slug: 'abs-granules' },
  { src: '/RAA-3100 Milky White ABS Granule.png', alt: 'RAA MILKY WHITE ABS', slug: 'abs-granules' },
  { src: '/RAA-3110 Milky White ABS Granules.png', alt: 'RAA WHITE ABS', slug: 'abs-granules' },
  { src: '/RAA-515 S Grey ABS Granules.png', alt: 'RAA GREY ABS', slug: 'abs-granules' },
  { src: '/RAA-955 Chocolate Brown ABS Granules.png', alt: 'RAA BROWN ABS', slug: 'abs-granules' },
  { src: '/Purple Reprocessed Abs Granules.png', alt: 'PURPLE ABS GRANULES', slug: 'abs-granules' },
  { src: '/Red Reprocessed Abs Plastic Granules.png', alt: 'RED ABS GRANULES', slug: 'abs-granules' },
  { src: '/White Reprocessed Abs Granules.png', alt: 'WHITE ABS GRANULES', slug: 'abs-granules' },
  { src: '/Yellow Recycled Abs Plastic Granules.png', alt: 'YELLOW ABS GRANULES', slug: 'abs-granules' },
  { src: '/Recycled Abs Granules.png', alt: 'RECYCLED ABS GRANULES', slug: 'abs-granules' },
  
  // GPPS Granules
  { src: '/Prime GPPS Virgin Granules.png', alt: 'PRIME GPPS VIRGIN', slug: 'gpps-granules' },
  { src: '/Styrenix 133 GPPS Virgin Granules.png', alt: 'STYRENIX GPPS', slug: 'gpps-granules' },
  { src: '/Virgin GPPS Styrenix 133.png', alt: 'VIRGIN GPPS STYRENIX', slug: 'gpps-granules' },
  { src: '/Polimaxx GPPS GP-150.png', alt: 'POLIMAXX GPPS', slug: 'gpps-granules' },
  { src: '/Supreme 206 HT GPPS.png', alt: 'SUPREME GPPS', slug: 'gpps-granules' },
  { src: '/Natural GPPS Granules.png', alt: 'NATURAL GPPS', slug: 'gpps-granules' },
  { src: '/Black GPPS Reprocess Granules.png', alt: 'BLACK GPPS', slug: 'gpps-granules' },
  { src: '/Ivory GPPS Reprocess Granules.png', alt: 'IVORY GPPS', slug: 'gpps-granules' },
  { src: '/Pink GPPS Reprocess Granules.png', alt: 'PINK GPPS', slug: 'gpps-granules' },
  { src: '/Amber GPPS Reprocessed Granule.png', alt: 'AMBER GPPS', slug: 'gpps-granules' },
  { src: '/Red T GPPS Reprocess Granules.png', alt: 'RED GPPS', slug: 'gpps-granules' },
  { src: '/P 37 D GPPS Reprocess Granule.png', alt: 'P37D GPPS', slug: 'gpps-granules' },
  { src: '/Orange Pearl GPPS Reprocessed Granule.png', alt: 'ORANGE PEARL GPPS', slug: 'gpps-granules' },
  { src: '/Maroon GPPS Reprocess Granules.png', alt: 'MAROON GPPS', slug: 'gpps-granules' },
  { src: '/Golden Pearl GPPS Granules.png', alt: 'GOLDEN PEARL GPPS', slug: 'gpps-granules' },
  { src: '/Coffee Pearl GPPS Granules.png', alt: 'COFFEE PEARL GPPS', slug: 'gpps-granules' },
  { src: '/Maroon Pearl GPPS Granules.png', alt: 'MAROON PEARL GPPS', slug: 'gpps-granules' },
  { src: '/P 37 GPPS Reprocess Granules.png', alt: 'P37 GPPS', slug: 'gpps-granules' },
  { src: '/P 51 Ivory GPPS Reprocess Granules.png', alt: 'P51 IVORY GPPS', slug: 'gpps-granules' },
  { src: '/P 35 GPPS Granules.png', alt: 'P35 GPPS', slug: 'gpps-granules' },
  { src: '/GPPS Green Reprocess Granules.png', alt: 'GREEN GPPS', slug: 'gpps-granules' },
  
  // HIPS Granules
  { src: '/virgin hip.png', alt: 'VIRGIN HIPS', slug: 'hips-granules' },
  { src: '/IDEMITSU NC 770 HIPS Natural.png', alt: 'IDEMITSU HIPS', slug: 'hips-granules' },
  { src: '/Polimaxx HIPS HG 451.png', alt: 'POLIMAXX HIPS HG451', slug: 'hips-granules' },
  { src: '/Polimaxx HIPS HI 650.png', alt: 'POLIMAXX HIPS HI650', slug: 'hips-granules' },
  { src: '/Supreme SH 300 HIPS.png', alt: 'SUPREME HIPS', slug: 'hips-granules' },
  { src: '/Reprocess HIPS Natural Granules.png', alt: 'REPROCESS HIPS NATURAL', slug: 'hips-granules' },
  { src: '/Hips Black.png', alt: 'BLACK HIPS', slug: 'hips-granules' },
  { src: '/HIPS Milky White.png', alt: 'MILKY WHITE HIPS', slug: 'hips-granules' },
  
  // PP Granules
  { src: '/M12RR Hmel PP Injection Molding Granules.png', alt: 'PP INJECTION GRANULES', slug: 'pp-granules' },
  { src: '/reprocesspp.png', alt: 'REPROCESS PP', slug: 'pp-granules' },
  
  // SAN Granules
  { src: '/Kumho San 310 C Tr.png', alt: 'KUMHO SAN GRANULES', slug: 'san-granules' },
  { src: '/SAN Taita 1400 ZN.png', alt: 'TAITA SAN GRANULES', slug: 'san-granules' },
  { src: '/Natural SAN Granules.png', alt: 'NATURAL SAN GRANULES', slug: 'san-granules' },
  { src: '/Natural Blue SAN Granules.png', alt: 'NATURAL BLUE SAN GRANULES', slug: 'san-granules' },
  { src: '/Blue SAN Granules.png', alt: 'BLUE SAN GRANULES', slug: 'san-granules' },
  { src: '/Smoke SAN Granules.png', alt: 'SMOKE SAN GRANULES', slug: 'san-granules' },
  { src: '/Natural San Regrind.png', alt: 'NATURAL SAN REGRIND', slug: 'san-granules' },
  { src: '/Color SAN Regrind.png', alt: 'COLOR SAN REGRIND', slug: 'san-granules' },
  
  // PC Granules
  { src: '/Virgin Polycarbonate Granules.png', alt: 'VIRGIN PC GRANULES', slug: 'pc-granules' },
  { src: '/SABIC PC 1003 R.png', alt: 'SABIC PC GRANULES', slug: 'pc-granules' },
  { src: '/Reprocess Polycarbonate Granules.png', alt: 'REPROCESS PC', slug: 'pc-granules' },
  { src: '/Milky PC Granules.png', alt: 'MILKY PC GRANULES', slug: 'pc-granules' },
  { src: '/Smoke PC Granules.png', alt: 'SMOKE PC GRANULES', slug: 'pc-granules' },
  { src: '/Natural Polycarbonate Regrind.png', alt: 'NATURAL PC REGRIND', slug: 'pc-granules' },
  { src: '/Red Polycarbonate Regrind.png', alt: 'RED PC REGRIND', slug: 'pc-granules' },
  { src: '/Smocky Polycarbonate Regrind.png', alt: 'SMOKY PC REGRIND', slug: 'pc-granules' },
  
  // PET Granules
  { src: '/WANKAI Pet Granules.png', alt: 'WANKAI PET GRANULES', slug: 'pet-granules' },
  { src: '/PET Preform Regrind.jpeg', alt: 'PET PREFORM REGRIND', slug: 'pet-granules' },
  { src: '/Hot wash PET Flakes.png', alt: 'HOT WASH PET FLAKES', slug: 'pet-granules' },
  
  // PE Granules
  { src: '/Reliance Ldpe 16ma400.png', alt: 'RELIANCE LDPE', slug: 'pe-granules' },
  { src: '/RIL LL JF19020 LLDPE Granule.png', alt: 'RIL LLDPE GRANULES', slug: 'pe-granules' },
  { src: '/Haldia B6401 HDPE Granule.png', alt: 'HALDIA HDPE GRANULES', slug: 'pe-granules' }
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 20));

  useEffect(() => {
    if (showAll) {
      setVisibleImages(images);
    } else {
      setVisibleImages(images.slice(0, 20));
    }
  }, [showAll]);

  const handleReadMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F8FF] py-10 px-4">
      <h2 className="text-3xl font-bold text-[#449833] text-center mb-10 tracking-wide">Our Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-[#E8F4FD] rounded-lg shadow-md overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-[#449833]"
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
      
      {/* Read More / Show Less Button */}
      <div className="text-center mt-8">
        {!showAll ? (
          <button
            onClick={handleReadMore}
            className="bg-gradient-to-r from-[#449833] to-[#48A1C7] text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-[#5AA843] hover:to-[#5BB1D7] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Read More ({images.length - 20} more images)
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-gradient-to-r from-[#48A1C7] to-[#449833] text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-[#5BB1D7] hover:to-[#5AA843] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;