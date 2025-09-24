import React from 'react';
import content from '../../../content.js';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Generate static params for all products
export async function generateStaticParams() {
  return content.map((product) => ({
    slug: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const product = content.find((item) => item.id === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - RAA POLYPLAST`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, plastic granules, polymer`,
  };
}

export default function ProductPage({ params }) {
  const product = content.find((item) => item.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F0F8FF] pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#449833] via-[#E8F4FD] to-[#449833] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Product Images Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {product.images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#449833]/20 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative bg-[#F0F8FF] p-4">
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="p-3 bg-[#E8F4FD] border-t border-[#449833]/20">
                  <p className="text-sm text-[#449833] font-medium text-center">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-16 text-center border border-[#449833]/20 max-w-2xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-6 bg-[#E8F4FD] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#449833]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#449833] mb-4">{product.name}</h2>
            <p className="text-[#449833] font-medium text-lg mb-2">Product images coming soon</p>
            <p className="text-gray-600">We're updating our product gallery</p>
          </div>
        )}
      </div>
    </div>
  );
}