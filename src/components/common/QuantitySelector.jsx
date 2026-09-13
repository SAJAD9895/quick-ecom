import React from 'react';
import { Minus, Plus } from 'lucide-react';

export const QuantitySelector = ({
  quantity = 1,
  onQuantityChange,
  min = 1,
  max = 99,
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const sizes = {
    sm: 'h-8 text-xs',
    md: 'h-10 text-sm',
    lg: 'h-11 text-base'
  };

  const btnSizes = {
    sm: 'w-7 h-8',
    md: 'w-9 h-10',
    lg: 'w-10 h-11'
  };

  return (
    <div className={`inline-flex items-center border border-slate-200 rounded-xl bg-white shadow-sm select-none ${className}`}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || quantity <= min}
        className={`flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-l-xl ${btnSizes[size] || btnSizes.md}`}
        aria-label="Decrease quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <span className={`flex items-center justify-center min-w-[36px] font-semibold text-slate-800 ${sizes[size] || sizes.md}`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || quantity >= max}
        className={`flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-r-xl ${btnSizes[size] || btnSizes.md}`}
        aria-label="Increase quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
