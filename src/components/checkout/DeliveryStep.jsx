import React from 'react';
import { Truck, Zap, Check } from 'lucide-react';

export const DELIVERY_OPTIONS = [
  {
    id: 'standard',
    title: 'Standard Delivery',
    description: 'Delivered in 3 to 5 business days',
    price: 0,
    estimatedDays: '3-5 Business Days',
    icon: Truck
  },
  {
    id: 'express',
    title: 'Express Priority Delivery',
    description: 'Guaranteed next-day or 2-day delivery',
    price: 149,
    estimatedDays: '1-2 Business Days',
    icon: Zap
  }
];

export const DeliveryStep = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
        <Truck className="w-5 h-5 text-brand-600" />
        <span>Choose Delivery Method</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DELIVERY_OPTIONS.map((opt) => {
          const isSelected = selectedOption?.id === opt.id;
          const Icon = opt.icon;
          return (
            <div
              key={opt.id}
              onClick={() => onSelectOption(opt)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/30 ring-2 ring-brand-100 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">{opt.title}</span>
                  {isSelected && <Check className="w-4 h-4 text-brand-600 stroke-[3]" />}
                </div>
                <p className="text-xs text-slate-500 mt-1">{opt.description}</p>
                <p className="text-xs font-bold text-slate-900 mt-2">
                  {opt.price === 0 ? 'FREE' : `+₹${opt.price}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
