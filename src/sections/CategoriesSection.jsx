import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ArrowRight } from 'lucide-react';

export const CategoriesSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Discover Categories</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Shop by Category
          </h2>
        </div>
        <Link
          to="/shop"
          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?cat=${cat.slug}`}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col"
          >
            <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm sm:text-base font-extrabold leading-tight group-hover:text-brand-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                  {cat.count}+ Products
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
