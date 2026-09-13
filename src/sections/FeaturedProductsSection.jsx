import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { ArrowRight } from 'lucide-react';

export const FeaturedProductsSection = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productService.getFeaturedProducts(8).then((res) => {
      setFeaturedProducts(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Handpicked Selections</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Featured Products
          </h2>
        </div>
        <Link
          to="/shop?featured=true"
          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
        >
          <span>Explore All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <ProductGrid products={featuredProducts} isLoading={isLoading} />
    </section>
  );
};
