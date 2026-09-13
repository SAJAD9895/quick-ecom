import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar } from '../components/product/FilterSidebar';
import { SortDropdown } from '../components/product/SortDropdown';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Pagination } from '../components/common/Pagination';
import { Filter, X } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialDeal = searchParams.get('deal') === 'true';
  const initialNew = searchParams.get('new') === 'true';
  const initialFeatured = searchParams.get('featured') === 'true';

  const [filters, setFilters] = useState({
    category: initialCategory,
    brands: [],
    minPrice: 0,
    maxPrice: 75000,
    minRating: 0,
    inStockOnly: false,
    minDiscount: initialDeal ? 25 : 0
  });

  const [sortBy, setSortBy] = useState(initialNew ? 'newest' : initialFeatured ? 'featured' : 'featured');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    document.title = 'Shop All Products — Quick-Ecom';
  }, []);

  useEffect(() => {
    setIsLoading(true);
    productService
      .queryProducts({
        category: filters.category,
        brands: filters.brands,
        maxPrice: filters.maxPrice,
        minRating: filters.minRating,
        inStockOnly: filters.inStockOnly,
        minDiscount: filters.minDiscount,
        sortBy
      })
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
        setCurrentPage(1);
      });
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      brands: [],
      minPrice: 0,
      maxPrice: 75000,
      minRating: 0,
      inStockOnly: false,
      minDiscount: 0
    });
    setSearchParams({});
  };

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumb items={[{ label: 'Shop All Products' }]} />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Collection
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Showing <strong className="text-slate-900">{products.length}</strong> available items
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Mobile Filter Button Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2 shadow-subtle"
          >
            <Filter className="w-4 h-4 text-brand-600" />
            <span>Filters</span>
          </button>

          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {/* Active Filter Tags */}
      {(filters.category !== 'all' || filters.brands.length > 0 || filters.minRating > 0 || filters.minDiscount > 0) && (
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-bold text-slate-400">Active Filters:</span>

          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 font-semibold px-2.5 py-1 rounded-full border border-brand-200">
              Category: {filters.category}
              <X className="w-3.5 h-3.5 cursor-pointer hover:text-brand-900" onClick={() => handleFilterChange('category', 'all')} />
            </span>
          )}

          {filters.brands.map((b) => (
            <span key={b} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-full border border-slate-200">
              {b}
              <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-900" onClick={() => handleFilterChange('brands', filters.brands.filter((item) => item !== b))} />
            </span>
          ))}

          {filters.minRating > 0 && (
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 font-semibold px-2.5 py-1 rounded-full border border-amber-200">
              {filters.minRating}★ & Above
              <X className="w-3.5 h-3.5 cursor-pointer" onClick={() => handleFilterChange('minRating', 0)} />
            </span>
          )}

          <button onClick={handleResetFilters} className="text-rose-600 font-bold hover:underline ml-2">
            Clear All
          </button>
        </div>
      )}

      {/* Main Layout: Sidebar + Grid */}
      <div className="flex gap-8">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          isOpenMobile={mobileDrawerOpen}
          onCloseMobile={() => setMobileDrawerOpen(false)}
        />

        <div className="flex-1 space-y-8">
          <ProductGrid
            products={paginatedProducts}
            isLoading={isLoading}
            onClearFilters={handleResetFilters}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
