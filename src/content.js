const content = [
  // ABS Category
  {
    id: 'virgin-abs-granules',
    name: 'Virgin ABS Granules',
    category: 'ABS',
    images: [
      '/Virgin ABS Natural Granules.png',
      '/Bhansali Abs Plastic Granules.png',
      '/Polimaxx ABS GA 850.png'
    ],
    description: 'High-quality virgin ABS granules for superior performance and consistency.'
  },
  {
    id: 'reprocess-abs-granules',
    name: 'Reprocess ABS Granules',
    category: 'ABS',
    images: [
      
      '/RAA-4100 S Natural Abs Granules.png',
      '/Green Reprocessed Abs Granules.png',
      '/Grey Reprocessed Abs Granules.png',
      '/Milky White Reprocessed Abs Granules.png',
      '/Purple Reprocessed Abs Granules.png',
      '/RAA-100 Blue Reprocessed Abs Granules.png',
      '/RAA-360 Pioneer Green Abs Plastic Granules.png',
      '/RAA-2580 Garnet Red Abs Granules.png',
      '/RAA-2130 Philips Yellow Reprocessed Abs Granules.png',
      '/RAA -2550 S Standard Red ABS Plastic Granules.png',
      '/RAA-850 B Pink Reprocessed Abs Granules.png',
      '/Red Reprocessed Abs Plastic Granules.png',
      '/Yellow Recycled Abs Plastic Granules.png',
      '/White Recycled Abs Plastic Granules.png',
      '/Natural Recycled Transparent Abs Plastic Granules.png',
      '/Purple Blue Reprocessed Abs Granules.png'
    ],
    description: 'Cost-effective reprocessed ABS granules available in multiple colors.'
  },

  // Polystyrene Granules Category
  {
    id: 'virgin-gpps',
    name: 'Virgin GPPS',
    category: 'Polystyrene Granules',
    images: [
      '/Prime GPPS Virgin Granules.png',
      '/Styrenix 133 GPPS Virgin Granules.png',
      '/Polimaxx GPPS GP-150.png'
    ],
    description: 'Premium virgin GPPS granules for high-performance applications.'
  },
  {
    id: 'reprocess-gpps',
    name: 'Reprocess GPPS',
    category: 'Polystyrene Granules',
    images: [
      '/Gpps Reprocessed Granules.png',
      '/Black GPPS Reprocess Granules.png',
      '/Ivory GPPS Reprocess Granules.png',
      '/Pink GPPS Reprocess Granules.png',
      '/Amber GPPS Reprocessed Granule.png',
      '/Red T GPPS Reprocess Granules.png',
      '/P 37 D GPPS Reprocess Granule.png',
      '/Orange Pearl GPPS Reprocessed Granule.png',
      '/Maroon GPPS Reprocess Granules.png',
      '/GPPS Golden Reprocess Granule.png',
      '/P 37 GPPS Reprocess Granules.png',
      '/P 51 Ivory GPPS Reprocess Granules.png'
    ],
    description: 'Reprocessed GPPS granules in various colors for diverse applications.'
  },
  {
    id: 'virgin-hips',
    name: 'Virgin HIPS',
    category: 'Polystyrene Granules',
    images: ['/virgin hip.png'],
    description: 'High-impact polystyrene granules for superior durability.'
  },
  {
    id: 'reprocess-hips',
    name: 'Reprocess HIPS',
    category: 'Polystyrene Granules',
    images: ['/Reprocess HIPS Natural Granules.png'],
    description: 'Cost-effective reprocessed HIPS granules for various applications.'
  },

  // PP Category
  {
    id: 'virgin-pp',
    name: 'Virgin PP',
    category: 'PP',
    images: [
      '/M12RR Hmel PP Injection Molding Granules.png'
    ],
    description: 'Premium virgin polypropylene granules for injection molding.'
  },
  {
    id: 'reprocess-pp',
    name: 'Reprocess PP',
    category: 'PP',
    images: ['/reprocesspp.png'],
    description: 'Reprocessed polypropylene granules for cost-effective solutions.'
  },

  // SAN Category
  {
    id: 'virgin-san-granules',
    name: 'Virgin SAN Granules',
    category: 'SAN',
    images: [
      '/Kumho San 310 C Tr.png'
    ],
    description: 'High-quality virgin SAN granules for transparent applications.'
  },
  {
    id: 'reprocess-san-granules',
    name: 'Reprocess SAN Granules',
    category: 'SAN',
    images: [
      '/Reprocessed San Granules.png',
      '/Reprocessed San Granules 1.png',
      '/Reprocessed San Granules 2.png',
      '/Reprocessed San Granules 3.png'
    ],
    description: 'Reprocessed SAN granules maintaining good optical properties.'
  },
  {
    id: 'san-regrind',
    name: 'SAN Regrind',
    category: 'SAN',
    images: [
      '/Natural San Regrind.png'
    ],
    description: 'SAN regrind material for recycling applications.'
  },

  // PC Category
  {
    id: 'virgin-polycarbonate-granules',
    name: 'Virgin Polycarbonate Granules',
    category: 'PC',
    images: ['/Virgin Polycarbonate Granules.png'],
    description: 'Premium virgin polycarbonate granules for high-performance applications.'
  },
  {
    id: 'reprocess-polycarbonate-granules',
    name: 'Reprocess Polycarbonate Granules',
    category: 'PC',
    images: ['/Reprocess Polycarbonate Granules.png'],
    description: 'Reprocessed polycarbonate granules maintaining excellent properties.'
  },
  {
    id: 'polycarbonate-regrind',
    name: 'Polycarbonate Regrind',
    category: 'PC',
    images: ['/Smocky Polycarbonate Regrind.png',
      '/Natural Polycarbonate Regrind.png',
      '/Red Polycarbonate Regrind.png'
    ],
    description: 'Polycarbonate regrind material for sustainable applications.'
  },

  // PET Category
  {
    id: 'virgin-pet-resin',
    name: 'Virgin PET Resin',
    category: 'PET',
    images: [
      '/WANKAI Pet Granules.png'
    ],
    description: 'High-grade virgin PET resin for bottle and container manufacturing.'
  },
  {
    id: 'pet-preform-regrind',
    name: 'PET Preform Regrind',
    category: 'PET',
    images: ['/PET.jpeg'],
    description: 'PET preform regrind material for recycling applications.'
  },
  {
    id: 'hot-wash-pet-flakes',
    name: 'Hot wash PET Flakes',
    category: 'PET',
    images: ['/Hot wash PET Flakes.png'],
    description: 'Clean hot-washed PET flakes ready for reprocessing.'
  },

  // PE Category
  {
    id: 'ldpe',
    name: 'LDPE',
    category: 'PE',
    images: ['/Low Density Polyethylene Granule.png'],
    description: 'Low-density polyethylene for flexible packaging applications.'
  },
  {
    id: 'lldpe',
    name: 'LLDPE',
    category: 'PE',
    images: ['/LLDPE.png'],
    description: 'Linear low-density polyethylene for enhanced strength and flexibility.'
  },
  {
    id: 'hdpe',
    name: 'HDPE',
    category: 'PE',
    images: ['/HDPE.png'],
    description: 'High-density polyethylene for rigid container applications.'
  }
];

export default content;