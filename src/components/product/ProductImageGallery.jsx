import React, { useState } from 'react';

export const ProductImageGallery = ({ images = [], productName = 'Product' }) => {
  const gallery = images.length > 0 ? images : ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnail Selector List */}
      {gallery.length > 1 && (
        <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 shrink-0">
          {gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 ${
                selectedImage === img
                  ? 'border-brand-600 ring-2 ring-brand-100'
                  : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${productName} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Main High-Res Image Box */}
      <div className="flex-1 aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle group relative">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};
