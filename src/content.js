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
    description: 'Our premium virgin ABS (Acrylonitrile Butadiene Styrene) granules offer exceptional mechanical properties, including high impact resistance, dimensional stability, and excellent surface finish. These first-grade materials are perfect for automotive components, electronic housings, appliance parts, and consumer goods. With superior chemical resistance and temperature tolerance, our virgin ABS granules ensure consistent processing performance and reliable end-product quality for demanding industrial applications across multiple manufacturing sectors.'
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
    description: 'Our eco-friendly reprocessed ABS granules provide an economical solution without compromising quality. Available in a vibrant spectrum of colors including natural, blue, green, red, yellow, and custom shades, these recycled materials maintain excellent mechanical properties and processing characteristics. Ideal for non-critical applications such as toys, housewares, garden products, and decorative items. Our rigorous quality control ensures consistent color matching and reliable performance while supporting sustainable manufacturing practices and reducing environmental impact.'
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
    description: 'Our premium virgin GPPS (General Purpose Polystyrene) granules offer exceptional clarity, dimensional stability, and ease of processing. These crystal-clear materials are perfect for disposable cups, food containers, CD cases, and transparent packaging applications. With excellent stiffness, low moisture absorption, and superior optical properties, our virgin GPPS ensures consistent injection molding and thermoforming results. The material provides outstanding surface finish and maintains its clarity throughout the manufacturing process, making it ideal for high-visibility consumer products.'
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
    description: 'Our cost-effective reprocessed GPPS granules offer excellent value while maintaining good mechanical and optical properties. Available in an extensive color palette including black, ivory, pink, amber, red, orange pearl, maroon, and golden shades, these materials are perfect for decorative items, promotional products, and non-critical packaging applications. Despite being recycled, our reprocessed GPPS maintains reliable processing characteristics and dimensional stability, making them suitable for injection molding and extrusion processes while supporting environmental sustainability initiatives.'
  },
  {
    id: 'virgin-hips',
    name: 'Virgin HIPS',
    category: 'Polystyrene Granules',
    images: ['/virgin hip.png'],
    description: 'Our virgin HIPS (High Impact Polystyrene) granules combine the processability of general-purpose polystyrene with enhanced impact resistance and toughness. These premium materials are engineered for applications requiring durability and strength, including refrigerator linings, television housings, computer monitors, and automotive interior components. With excellent dimensional stability, good chemical resistance, and superior impact properties, our virgin HIPS ensures reliable performance in demanding applications while maintaining ease of processing and cost-effectiveness for high-volume production runs.'
  },
  {
    id: 'reprocess-hips',
    name: 'Reprocess HIPS',
    category: 'Polystyrene Granules',
    images: ['/Reprocess HIPS Natural Granules.png'],
    description: 'Our reprocessed HIPS granules provide an economical alternative while retaining good impact strength and processing characteristics. These recycled materials are suitable for less critical applications such as disposable containers, protective packaging, toys, and household items. With maintained dimensional stability and acceptable mechanical properties, our reprocessed HIPS offers cost savings without significant performance compromise. The material processes well in injection molding and thermoforming applications, making it an excellent choice for manufacturers seeking sustainable and budget-friendly solutions for non-demanding applications.'
  },

  // PP Category
  {
    id: 'virgin-pp',
    name: 'Virgin PP',
    category: 'PP',
    images: [
      '/M12RR Hmel PP Injection Molding Granules.png'
    ],
    description: 'Our premium virgin polypropylene granules offer exceptional chemical resistance, low density, and excellent mechanical properties. These high-grade materials are perfect for automotive parts, food packaging, medical devices, and consumer appliances. With outstanding fatigue resistance, good dimensional stability, and superior processing characteristics, our virgin PP ensures consistent injection molding performance. The material exhibits excellent resistance to stress cracking, chemicals, and environmental conditions, making it ideal for demanding applications requiring long-term durability and reliability in various industrial and commercial sectors.'
  },
  {
    id: 'reprocess-pp',
    name: 'Reprocess PP',
    category: 'PP',
    images: ['/reprocesspp.png'],
    description: 'Our reprocessed polypropylene granules provide cost-effective solutions while maintaining good chemical resistance and mechanical properties. These recycled materials are suitable for non-critical applications such as storage containers, garden furniture, automotive non-structural components, and general-purpose molded parts. With retained flexibility, good impact resistance, and reliable processing characteristics, our reprocessed PP offers significant cost savings. The material maintains acceptable dimensional stability and chemical resistance, making it an environmentally responsible choice for manufacturers seeking sustainable alternatives without compromising basic performance requirements for everyday applications.'
  },

  // SAN Category
  {
    id: 'virgin-san-granules',
    name: 'Virgin SAN Granules',
    category: 'SAN',
    images: [
      '/Kumho San 310 C Tr.png'
    ],
    description: 'Our premium virgin SAN (Styrene Acrylonitrile) granules offer exceptional optical clarity, superior chemical resistance, and excellent dimensional stability. These high-performance materials are ideal for transparent applications including cosmetic containers, food storage, laboratory equipment, and optical components. With outstanding stress crack resistance, good thermal properties, and superior surface hardness, our virgin SAN ensures crystal-clear transparency and long-lasting performance. The material processes exceptionally well in injection molding, providing consistent results for applications demanding both aesthetic appeal and functional reliability in transparent plastic products.'
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
    description: 'Our reprocessed SAN granules maintain excellent optical properties while offering cost-effective solutions for semi-transparent applications. These recycled materials retain good clarity, chemical resistance, and processing characteristics suitable for non-critical transparent products such as storage containers, display cases, and decorative items. With maintained dimensional stability and acceptable stress crack resistance, our reprocessed SAN provides significant cost savings while supporting sustainable manufacturing practices. The material offers reliable injection molding performance and maintains sufficient transparency for applications where perfect optical clarity is not essential.'
  },
  {
    id: 'san-regrind',
    name: 'SAN Regrind',
    category: 'SAN',
    images: [
      '/Natural San Regrind.png'
    ],
    description: 'Our SAN regrind material provides an economical solution for recycling applications while maintaining basic processing characteristics. This ground material is suitable for non-critical applications such as filler material, secondary products, and applications where appearance is not a primary concern. With acceptable flow properties and dimensional stability, our SAN regrind can be used as an additive to virgin materials or processed independently for cost-sensitive applications. The material supports sustainable manufacturing practices by reducing waste and providing an environmentally responsible alternative for budget-conscious production requirements.'
  },

  // PC Category
  {
    id: 'virgin-polycarbonate-granules',
    name: 'Virgin Polycarbonate Granules',
    category: 'PC',
    images: ['/Virgin Polycarbonate Granules.png'],
    description: 'Our premium virgin polycarbonate granules offer exceptional impact resistance, optical clarity, and high-temperature performance. These engineering-grade materials are perfect for demanding applications including automotive glazing, electronic housings, safety equipment, and optical lenses. With outstanding dimensional stability, excellent UV resistance, and superior mechanical properties at elevated temperatures, our virgin PC ensures reliable performance in critical applications. The material exhibits exceptional toughness, flame resistance, and maintains its properties across a wide temperature range, making it ideal for high-performance engineering applications requiring durability and precision.'
  },
  {
    id: 'reprocess-polycarbonate-granules',
    name: 'Reprocess Polycarbonate Granules',
    category: 'PC',
    images: ['/Reprocess Polycarbonate Granules.png'],
    description: 'Our reprocessed polycarbonate granules maintain excellent mechanical properties while providing cost-effective solutions for less critical applications. These recycled materials retain good impact resistance, dimensional stability, and processing characteristics suitable for automotive interior components, electronic enclosures, and industrial parts. With maintained toughness and acceptable optical properties, our reprocessed PC offers significant cost savings without major performance compromise. The material provides reliable injection molding performance and maintains sufficient engineering properties for applications where virgin-grade performance is not essential, supporting sustainable manufacturing practices.'
  },
  {
    id: 'polycarbonate-regrind',
    name: 'Polycarbonate Regrind',
    category: 'PC',
    images: ['/Smocky Polycarbonate Regrind.png',
      '/Natural Polycarbonate Regrind.png',
      '/Red Polycarbonate Regrind.png'
    ],
    description: 'Our polycarbonate regrind material offers an environmentally sustainable solution while maintaining basic engineering properties. Available in natural, smoky, and red colors, this ground material is suitable for non-critical applications, filler material, and blend applications. With acceptable impact resistance and processing characteristics, our PC regrind can be used independently or blended with virgin materials to reduce costs. The material supports circular economy initiatives by recycling post-industrial waste while providing adequate performance for applications where appearance and maximum properties are not primary requirements, enabling sustainable manufacturing practices.'
  },

  // PET Category
  {
    id: 'virgin-pet-resin',
    name: 'Virgin PET Resin',
    category: 'PET',
    images: [
      '/WANKAI Pet Granules.png'
    ],
    description: 'Our high-grade virgin PET resin offers exceptional clarity, excellent barrier properties, and superior mechanical strength for bottle and container manufacturing. These premium materials are ideal for food and beverage packaging, pharmaceutical containers, and cosmetic bottles. With outstanding chemical resistance, good thermal stability, and excellent processing characteristics, our virgin PET ensures consistent blow molding and injection molding performance. The material provides excellent gas barrier properties, maintains transparency, and meets stringent food safety requirements, making it the preferred choice for high-quality packaging applications requiring purity and performance.'
  },
  {
    id: 'pet-preform-regrind',
    name: 'PET Preform Regrind',
    category: 'PET',
    images: ['/PET.jpeg'],
    description: 'Our PET preform regrind material provides an economical and sustainable solution for recycling applications while maintaining acceptable processing characteristics. This ground material, derived from preform manufacturing waste, is suitable for non-food applications such as fiber production, strapping, and secondary packaging. With maintained molecular weight and acceptable thermal properties, our PET regrind can be processed independently or blended with virgin materials. The material supports circular economy principles by reducing waste and providing cost-effective raw material for applications where food-grade requirements are not necessary, enabling sustainable manufacturing practices.'
  },
  {
    id: 'hot-wash-pet-flakes',
    name: 'Hot wash PET Flakes',
    category: 'PET',
    images: ['/Hot wash PET Flakes.png'],
    description: 'Our premium hot-washed PET flakes are thoroughly cleaned and ready for reprocessing into new products. These high-quality recycled flakes undergo intensive washing and decontamination processes, removing adhesives, labels, and contaminants to meet stringent quality standards. Ideal for fiber production, sheet extrusion, and non-food packaging applications, our hot-washed PET flakes maintain excellent mechanical properties and processing characteristics. With consistent quality, low contamination levels, and reliable performance, these flakes provide an environmentally responsible raw material solution for manufacturers committed to sustainable production and circular economy principles.'
  },

  // PE Category
  {
    id: 'ldpe',
    name: 'LDPE',
    category: 'PE',
    images: ['/Reliance Ldpe 16ma400.png'],
    description: 'Our low-density polyethylene granules offer exceptional flexibility, excellent chemical resistance, and superior processing characteristics for flexible packaging applications. These versatile materials are perfect for plastic bags, food wraps, squeeze bottles, and flexible containers. With outstanding clarity, good seal strength, and excellent impact resistance at low temperatures, our LDPE ensures reliable performance in demanding packaging applications. The material exhibits excellent processability in blown film, injection molding, and rotational molding processes, making it the preferred choice for applications requiring flexibility, durability, and cost-effectiveness in packaging and consumer products.'
  },
  {
    id: 'lldpe',
    name: 'LLDPE',
    category: 'PE',
    images: ['/RIL LL JF19020 LLDPE Granule.png'],
    description: 'Our linear low-density polyethylene granules combine enhanced strength with exceptional flexibility, offering superior performance for demanding packaging applications. These advanced materials provide excellent puncture resistance, outstanding tear strength, and superior environmental stress crack resistance compared to conventional LDPE. Ideal for heavy-duty bags, agricultural films, stretch wrap, and industrial liners, our LLDPE ensures reliable performance under stress. With excellent processability, good optical properties, and enhanced mechanical performance, these granules deliver cost-effective solutions for applications requiring superior toughness and flexibility in challenging environments.'
  },
  {
    id: 'hdpe',
    name: 'HDPE',
    category: 'PE',
    images: ['/Haldia B6401 HDPE Granule.png'],
    description: 'Our high-density polyethylene granules offer exceptional strength, rigidity, and chemical resistance for demanding container applications. These robust materials are perfect for milk jugs, detergent bottles, fuel tanks, and industrial containers. With outstanding environmental stress crack resistance, excellent chemical compatibility, and superior barrier properties, our HDPE ensures long-lasting performance in harsh environments. The material exhibits excellent processability in blow molding and injection molding applications, providing consistent wall thickness and dimensional stability. Ideal for applications requiring durability, chemical resistance, and structural integrity in rigid container manufacturing.'
  }
];

export default content;