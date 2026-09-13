import React from 'react';
import { X, Filter, RotateCcw, Star } from 'lucide-react';
import { categories } from '../../data/categories';
import { formatPrice } from '../../utils/formatters';

export const FilterSidebar = ({
  filters,
  onFilterChange,
  onResetFilters,
  brandsList = ['SonicPro', 'Horizon', 'Aura', 'UrbanFit', 'ZenHome', 'Apex', 'Botanical', 'Titan'],
  isOpenMobile = false,
  onCloseMobile = () => {},
  className = ''
}) => {
  const handleCategoryToggle = (slug) => {
    onFilterChange('category', filters.category === slug ? 'all' : slug);
  };

  const handleBrandToggle = (brand) => {
    const current = filters.brands || [];
    const updated = current.includes(brand)
      ? current.filter((b) => b !== brand)
      : [...current, brand];
    onFilterChange('brands', updated);
  };

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
          <Filter className="w-4 h-4 text-brand-600" />
          <span>Filters</span>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Category Section */}
      <div className="space-y-3">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Category</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => onFilterChange('category', 'all')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              filters.category === 'all'
                ? 'bg-brand-50 text-brand-700 font-bold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryToggle(cat.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                filters.category === cat.slug
                  ? 'bg-brand-50 text-brand-700 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-slate-400 font-semibold">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Price Range</h4>
          <span className="text-xs font-bold text-brand-600">
            Up to {formatPrice(filters.maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="500"
          max="75000"
          step="500"
          value={filters.maxPrice}
          onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
        />
        <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
          <span>₹500</span>
          <span>₹75,000+</span>
        </div>
      </div>

      {/* Brand Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Brand</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
          {brandsList.map((b) => {
            const checked = (filters.brands || []).includes(b);
            return (
              <label key={b} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer hover:text-slate-900">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleBrandToggle(b)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 cursor-pointer"
                />
                <span>{b}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Rating Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3].map((r) => (
            <button
              key={r}
              onClick={() => onFilterChange('minRating', filters.minRating === r ? 0 : r)}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filters.minRating === r ? 'bg-amber-50 border border-amber-200 text-amber-900' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-bold">{r} Stars & Above</span>
            </button>
          ))}
        </div>
      </div>

      {/* Discount Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Discount</h4>
        <div className="grid grid-cols-2 gap-2">
          {[10, 20, 30, 50].map((d) => (
            <button
              key={d}
              onClick={() => onFilterChange('minDiscount', filters.minDiscount === d ? 0 : d)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                filters.minDiscount === d
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {d}% or more
            </button>
          ))}
        </div>
      </div>

      {/* Availability Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <label className="flex items-center justify-between text-xs font-semibold text-slate-800 cursor-pointer">
          <span>In Stock Only</span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
            className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:block w-64 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle shrink-0 h-fit sticky top-24 ${className}`}>
        {content}
      </div>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onCloseMobile} />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full p-6 shadow-modal overflow-y-auto z-10 animate-slide-in flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
                <span className="font-bold text-lg text-slate-900">Filter Products</span>
                <button onClick={onCloseMobile} className="p-1 rounded-lg hover:bg-slate-100 text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={onCloseMobile}
                className="w-full py-3 bg-brand-600 text-white font-bold rounded-xl shadow text-sm hover:bg-brand-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
