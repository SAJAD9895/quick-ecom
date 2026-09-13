import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export const SortDropdown = ({ value, onChange, className = '' }) => {
  const options = [
    { value: 'featured', label: 'Featured Products' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'rating-high', label: 'Highest Rated' },
    { value: 'discount-high', label: 'Biggest Discount' }
  ];

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl pl-8 pr-8 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 hover:border-slate-300 cursor-pointer shadow-subtle transition-all"
        aria-label="Sort products by"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 pointer-events-none text-slate-400 text-xs">▼</div>
    </div>
  );
};
