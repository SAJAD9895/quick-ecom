import React from 'react';

export const ProductSkeleton = ({ count = 4, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-subtle animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full aspect-square bg-slate-100 rounded-xl mb-4" />
          
          {/* Brand & Badge skeleton */}
          <div className="flex justify-between items-center mb-2">
            <div className="h-3 w-16 bg-slate-100 rounded" />
            <div className="h-3 w-10 bg-slate-100 rounded" />
          </div>

          {/* Title skeleton */}
          <div className="h-4 w-5/6 bg-slate-100 rounded mb-1.5" />
          <div className="h-4 w-3/4 bg-slate-100 rounded mb-3" />

          {/* Rating skeleton */}
          <div className="h-3 w-20 bg-slate-100 rounded mb-4" />

          {/* Price & Action skeleton */}
          <div className="flex justify-between items-center pt-2 border-t border-slate-50">
            <div className="h-5 w-20 bg-slate-100 rounded" />
            <div className="h-9 w-9 bg-slate-100 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};
