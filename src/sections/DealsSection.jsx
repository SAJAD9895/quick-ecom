import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { Flame, Clock } from 'lucide-react';

export const DealsSection = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Countdown timer simulation (14h 32m 45s)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    productService.getDeals(4).then((res) => {
      setDeals(res);
      setIsLoading(false);
    });

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-transparent rounded-3xl border border-amber-200/60">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-rose-600 font-extrabold text-xs uppercase tracking-widest">
            <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" />
            <span>Limited Time Offers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Today's Best Deals
          </h2>
        </div>

        {/* Countdown Timer Badge */}
        <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-sm text-xs font-bold shrink-0">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Ends in:</span>
          <span className="font-mono text-amber-300">
            {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>

      <ProductGrid products={deals} isLoading={isLoading} />
    </section>
  );
};
