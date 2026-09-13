import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SortDropdown } from '../components/product/SortDropdown';

export const CategoryProducts = () => {
  const { category: categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      productService.getProductsByCategory(categorySlug),
      productService.getCategories()
    ]).then(([prodRes, catRes]) => {
      const match = catRes.find((c) => c.slug === categorySlug);
      setCategoryInfo(match || { name: categorySlug, description: `Discover ${categorySlug} products` });
      
      // Sort products
      let sorted = [...prodRes];
      if (sortBy === 'price-low-high') sorted.sort((a, b) => a.price - b.price);
      if (sortBy === 'price-high-low') sorted.sort((a, b) => b.price - a.price);
      if (sortBy === 'rating-high') sorted.sort((a, b) => b.rating - a.rating);

      setProducts(sorted);
      setIsLoading(false);
      document.title = `${match?.name || categorySlug} — Quick-Ecom`;
    });
  }, [categorySlug, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Categories', url: '/shop' },
          { label: categoryInfo?.name || categorySlug }
        ]}
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight capitalize">
            {categoryInfo?.name || categorySlug}
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            {categoryInfo?.description} • {products.length} products available
          </p>
        </div>

        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
};
