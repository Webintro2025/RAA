"use client";
import React, { useState } from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: 'ABS GRANULES',
      description: 'Virgin & Reprocessed ABS granules for durable automotive and household applications.'
    },
    {
      id: 2,
      title: 'GPPS GRANULES',
      description: 'Virgin & Reprocessed GPPS granules for packaging and consumer goods.'
    },
    {
      id: 3,
      title: 'POLYSTYRENE GRANULES',
      description: 'High-quality polystyrene granules for various manufacturing needs.'
    },
    {
      id: 4,
      title: 'PP GRANULES (VIRGIN)',
      description: 'Premium virgin PP granules for superior performance applications.'
    },
    {
      id: 5,
      title: 'PET GRANULES & WANKAI PET RESIN',
      description: 'Quality PET granules and Wankai PET resin for packaging solutions.'
    },
    {
      id: 6,
      title: 'SAN GRANULES',
      description: 'Reprocessed & Regrind SAN granules for cost-effective manufacturing.'
    },
    {
      id: 7,
      title: 'AUTOMOTIVE COMPONENTS',
      description: 'Specialized granules for manufacturing durable interior and exterior automotive parts.'
    },
    {
      id: 8,
      title: 'HOUSEHOLD APPLIANCES',
      description: 'Materials for casings, parts, and functional elements of everyday electronics.'
    },
    {
      id: 9,
      title: 'ELECTRONICS HOUSING',
      description: 'High-grade materials for housings, connectors, and insulating parts.'
    },
    {
      id: 10,
      title: 'CUSTOM POLYMER SOLUTIONS',
      description: 'Tailored polymer solutions to meet specific manufacturing requirements.'
    }
  ];

  return (
  <div className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#449833] mb-3 sm:mb-4">What We Do</h2>
          <div className="text-xs sm:text-base md:text-lg text-[#449833] w-full mx-auto mb-4 sm:mb-6">
            <p className="mb-3 sm:mb-4">
              Raa Polyplast is a dynamic Manufacturer, Wholesaler, and Distributor specializing in a comprehensive range of polymer granules. We serve diverse industries by providing both high-grade virgin materials and cost-effective reprocessed granules to meet specific quality, performance, and budgetary requirements. Our operations are streamlined to ensure a consistent supply of quality products for your manufacturing needs.
            </p>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#449833] mb-2 sm:mb-3">Industries We Serve</h3>
            <p className="mb-3 sm:mb-4">
              Our versatile product range provides essential materials for a wide spectrum of industries. We are proud to be a critical part of the supply chain for sectors that demand precision, durability, and quality. Key industries we cater to include: Automotive, Household Appliances, Packaging, Consumer Goods & Toys, Electronics, and Textiles and Furnishings.
            </p>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#449833] mb-2 sm:mb-3">Tailored Polymer Solutions</h3>
            <p className="mb-3 sm:mb-4">
              We understand that every manufacturing process has unique demands. Our experienced team works closely with clients to understand their specific needs—from material properties and melt flow index to colour matching and performance characteristics. Whether you require a cost-effective reprocessed material for general use or a high-performance virgin grade for a critical application, we provide tailored solutions that align perfectly with your production goals.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border-2 border-[#449833] p-3 sm:p-4"
              style={{ boxShadow: '0 2px 8px 0 #e0e0e0' }}
            >
              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-[#449833] mb-1 sm:mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <div className="text-[#449833] leading-relaxed">
                <p className="mb-1 sm:mb-2 text-xs sm:text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <div className="w-full bg-gradient-to-r from-[#449833] via-[#E8F4FD] to-[#449833] rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-bold text-black mb-2 sm:mb-3">
              Commitment to Quality and Supply
            </h3>
            <p className="text-xs sm:text-base text-black mb-3 sm:mb-4">
              Our promise of quality is backed by a rigorous process. We ensure that every batch of granules adheres to strict quality parameters for consistency and performance. Our strategic location in New Delhi, combined with an efficient logistics network, ensures a reliable and timely supply to keep your production lines running smoothly without interruption.
            </p>
            <button className="bg-[#449833] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base border-2 border-[#449833] hover:bg-[#48A1C7] hover:text-white transition-colors duration-200">
              Get Your Quote Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
