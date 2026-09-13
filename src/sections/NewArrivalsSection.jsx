import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { Sparkles, ArrowRight } from 'lucide-react';

export const NewArrivalsSection = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productService.getNewArrivals(4).then((res) => {
      setNewArrivals(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Just Dropped</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            New Arrivals
          </h2>
        </div>
        <Link
          to="/shop?new=true"
          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
        >
          <span>View All New</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <ProductGrid products={newArrivals} isLoading={isLoading} />
    </section>
  );
};
