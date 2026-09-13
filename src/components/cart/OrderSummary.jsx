import React from 'react';
import { formatPrice } from '../../utils/formatters';
import { Button } from '../common/Button';
import { CouponInput } from './CouponInput';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const OrderSummary = ({
  totals,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
  onProceedCheckout,
  showProceedButton = true,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle space-y-6 ${className}`}>
      <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100">
        Order Summary
      </h3>

      {/* Coupon Code Section */}
      {onApplyCoupon && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700">Have a coupon code?</label>
          <CouponInput
            appliedCoupon={appliedCoupon}
            onApplyCoupon={onApplyCoupon}
            onRemoveCoupon={onRemoveCoupon}
          />
        </div>
      )}

      {/* Pricing Breakdown */}
      <div className="space-y-3 text-xs font-medium text-slate-600 pt-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-slate-900">{formatPrice(totals.subtotal)}</span>
        </div>

        {totals.couponDiscount > 0 && (
          <div className="flex justify-between text-emerald-600 font-semibold">
            <span>Coupon Discount</span>
            <span>-{formatPrice(totals.couponDiscount)}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Delivery Charge</span>
          {totals.deliveryFee === 0 ? (
            <span className="font-bold text-emerald-600 uppercase text-[11px]">FREE</span>
          ) : (
            <span className="font-bold text-slate-900">{formatPrice(totals.deliveryFee)}</span>
          )}
        </div>

        <div className="flex justify-between">
          <span>Estimated Taxes (GST 5%)</span>
          <span className="font-bold text-slate-900">{formatPrice(totals.tax)}</span>
        </div>

        {totals.totalSavings > 0 && (
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold text-center border border-emerald-100">
            🎉 You are saving {formatPrice(totals.totalSavings)} on this order!
          </div>
        )}

        <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
          <span className="text-sm font-extrabold text-slate-900">Total Amount</span>
          <span className="text-xl font-extrabold text-slate-900">{formatPrice(totals.total)}</span>
        </div>
      </div>

      {/* CTA Button */}
      {showProceedButton && (
        <Button
          onClick={onProceedCheckout}
          fullWidth
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        >
          Proceed to Checkout
        </Button>
      )}

      {/* Trust Callout */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 font-medium">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Safe & Secure 256-Bit Encrypted Checkout</span>
      </div>
    </div>
  );
};
