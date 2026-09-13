import React, { useState } from 'react';
import { Tag, Check, X } from 'lucide-react';

export const CouponInput = ({ appliedCoupon, onApplyCoupon, onRemoveCoupon }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      onApplyCoupon(code.trim());
      setCode('');
    }
  };

  if (appliedCoupon) {
    return (
      <div className="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-800">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
          <div>
            <span className="font-extrabold uppercase">{appliedCoupon.code}</span>
            <p className="text-[11px] text-emerald-600 font-normal">{appliedCoupon.description}</p>
          </div>
        </div>
        <button
          onClick={onRemoveCoupon}
          className="text-emerald-700 hover:text-emerald-900 p-1 rounded-lg hover:bg-emerald-100 transition-colors"
          title="Remove coupon"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Promo code (e.g. QUICK10)"
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 uppercase tracking-wider placeholder:normal-case placeholder:font-normal placeholder:tracking-normal"
        />
        <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
      </div>
      <button
        type="submit"
        disabled={!code.trim()}
        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl transition-all shrink-0"
      >
        Apply
      </button>
    </form>
  );
};
