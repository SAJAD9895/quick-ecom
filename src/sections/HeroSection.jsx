import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../components/common/Button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl my-4 mx-4 sm:mx-6 lg:mx-8">
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-brand-300 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Redefining Online Shopping Speed</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            Everything You Need.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300">
              One Quick Shop.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
            Discover quality products, great deals, and a faster way to shop online with instant checkout and rapid delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link to="/shop">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Shop Now
              </Button>
            </Link>
            <Link to="/shop?deal=true">
              <Button variant="outline" size="lg" className="border-slate-700 text-white bg-slate-800/60 hover:bg-slate-800">
                Explore Deals
              </Button>
            </Link>
          </div>

          {/* Highlights */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Same-Day Dispatch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Warranties</span>
            </div>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80"
              alt="Quick-Ecom Featured Products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            {/* Floating Tag */}
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">SonicPro Wireless Headphones X1</p>
                <p className="text-[10px] text-slate-300">Save 38% Today • Limited Stock</p>
              </div>
              <span className="text-xs font-extrabold text-amber-300">₹2,499</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
