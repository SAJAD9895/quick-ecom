import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full uppercase tracking-wider select-none';

  const variants = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200',
    primary: 'bg-brand-50 text-brand-700 border border-brand-200',
    new: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    discount: 'bg-rose-50 text-rose-700 border border-rose-200',
    deal: 'bg-amber-50 text-amber-700 border border-amber-200',
    outOfStock: 'bg-slate-200 text-slate-600 border border-slate-300',
    inStock: 'bg-emerald-100 text-emerald-800'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1 text-xs font-bold'
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
};
