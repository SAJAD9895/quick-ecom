import React from 'react';
import { formatPrice } from '../../utils/formatters';

export const PriceDisplay = ({
  price,
  originalPrice = null,
  discount = null,
  size = 'md',
  showDiscountBadge = true,
  className = ''
}) => {
  const priceSizes = {
    sm: 'text-sm font-semibold text-slate-900',
    md: 'text-base font-bold text-slate-900',
    lg: 'text-xl font-bold text-slate-900',
    xl: 'text-2xl lg:text-3xl font-extrabold text-slate-900'
  };

  const originalSizes = {
    sm: 'text-xs text-slate-400 line-through',
    md: 'text-xs text-slate-400 line-through',
    lg: 'text-sm text-slate-400 line-through',
    xl: 'text-base text-slate-400 line-through'
  };

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className={`flex items-baseline gap-2 flex-wrap ${className}`}>
      <span className={priceSizes[size] || priceSizes.md}>{formatPrice(price)}</span>
      {hasDiscount && (
        <span className={originalSizes[size] || originalSizes.md}>
          {formatPrice(originalPrice)}
        </span>
      )}
      {hasDiscount && discount && showDiscountBadge && (
        <span className="text-xs font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
          {discount}% OFF
        </span>
      )}
    </div>
  );
};
