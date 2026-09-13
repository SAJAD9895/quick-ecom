import React from 'react';
import { CheckCircle2, Clock, Truck, PackageCheck, Home, AlertCircle } from 'lucide-react';

export const OrderTimeline = ({ currentStatus = 'Order Placed' }) => {
  const steps = [
    { id: 'placed', label: 'Order Placed', icon: Clock },
    { id: 'confirmed', label: 'Confirmed', icon: CheckCircle2 },
    { id: 'packed', label: 'Packed', icon: PackageCheck },
    { id: 'shipped', label: 'Shipped', icon: Truck },
    { id: 'out', label: 'Out for Delivery', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: Home }
  ];

  const statusIndexes = {
    'Order Placed': 0,
    'Confirmed': 1,
    'Processing': 1,
    'Packed': 2,
    'Shipped': 3,
    'Out for Delivery': 4,
    'Delivered': 5,
    'Cancelled': -1
  };

  const currentIndex = statusIndexes[currentStatus] ?? 0;

  if (currentStatus === 'Cancelled') {
    return (
      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
        <span>This order was cancelled and cannot be tracked further.</span>
      </div>
    );
  }

  return (
    <div className="w-full py-4">
      {/* Desktop Horizontal Timeline */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-brand-600 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx <= currentIndex;
          const isCurrent = idx === currentIndex;
          const Icon = step.icon;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isCompleted
                    ? 'bg-brand-600 text-white shadow-sm ring-4 ring-brand-100'
                    : 'bg-white border-2 border-slate-300 text-slate-400'
                } ${isCurrent ? 'scale-110' : ''}`}
              >
                <Icon className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span
                className={`text-[11px] font-bold text-center max-w-[80px] leading-tight ${
                  isCompleted ? 'text-slate-900' : 'text-slate-400 font-medium'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="sm:hidden space-y-4 relative pl-4 border-l-2 border-slate-200 ml-2">
        {steps.map((step, idx) => {
          const isCompleted = idx <= currentIndex;
          const Icon = step.icon;

          return (
            <div key={step.id} className="relative flex items-center gap-3">
              <div
                className={`absolute -left-[25px] w-6 h-6 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-400'
                }`}
              >
                <Icon className="w-3 h-3" />
              </div>
              <span className={`text-xs font-bold ${isCompleted ? 'text-slate-900' : 'text-slate-400 font-medium'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
