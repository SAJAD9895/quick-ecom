import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const PromoBannerSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[320px] flex items-center shadow-xl border border-slate-800">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80"
          alt="Upgrade Your Everyday Collection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 hover:scale-105 transition-transform duration-700 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-xl p-8 sm:p-12 space-y-4">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            Editorial Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Upgrade Your Everyday
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Discover curated acoustic tech, ergonomic living gear, and premium leather accessories engineered for modern productivity and comfort.
          </p>
          <div className="pt-2">
            <Link to="/shop">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
