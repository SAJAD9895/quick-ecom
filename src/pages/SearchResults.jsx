import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar } from '../components/product/FilterSidebar';
import { SortDropdown } from '../components/product/SortDropdown';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Filter } from 'lucide-react';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: 'all',
    brands: [],
    minPrice: 0,
    maxPrice: 75000,
    minRating: 0,
    inStockOnly: false,
    minDiscount: 0
  });

  const [sortBy, setSortBy] = useState('featured');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    productService
      .queryProducts({
        query,
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
        document.title = `Search results for "${query}" — Quick-Ecom`;
      });
  }, [query, filters, sortBy]);

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
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumb items={[{ label: 'Search Results' }]} />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Search results for: <span className="text-brand-600">"{query}"</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Found <strong className="text-slate-900">{products.length}</strong> matching products
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2"
          >
            <Filter className="w-4 h-4 text-brand-600" />
            <span>Filters</span>
          </button>

          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="flex gap-8">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          isOpenMobile={mobileDrawerOpen}
          onCloseMobile={() => setMobileDrawerOpen(false)}
        />

        <div className="flex-1">
          <ProductGrid
            products={products}
            isLoading={isLoading}
            emptyTitle={`No products found for "${query}"`}
            emptyDescription="Try adjusting your search query, checking spelling, or resetting your filters."
            onClearFilters={() => { handleResetFilters(); navigate('/shop'); }}
          />
        </div>
      </div>
    </div>
  );
};
