import React from 'react';
import { Truck, ShieldCheck, Award, RotateCcw } from 'lucide-react';

export const WhyUsSection = () => {
  const points = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping with real-time package tracking.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: 'Encrypted checkout supporting Card, UPI, Wallets, and COD.'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Directly sourced from trusted global brands and verified sellers.'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Simple and transparent 7-day return policy with zero friction.'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Why Choose Us</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          Designed for Your Peace of Mind
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((pt, idx) => {
          const Icon = pt.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{pt.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">{pt.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
