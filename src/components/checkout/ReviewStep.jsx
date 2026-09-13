import React from 'react';
import { formatPrice } from '../../utils/formatters';
import { ShoppingBag, MapPin, Truck, CreditCard } from 'lucide-react';

export const ReviewStep = ({ cart, address, deliveryMethod, paymentMethod, totals }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
        <ShoppingBag className="w-5 h-5 text-brand-600" />
        <span>Review Order Details</span>
      </h3>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Address summary */}
        <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Shipping Address</span>
          </div>
          <p className="font-semibold text-slate-800">{address?.fullName}</p>
          <p className="text-slate-600">{address?.street}, {address?.city}</p>
          <p className="text-slate-500">Phone: {address?.phone}</p>
        </div>

        {/* Delivery summary */}
        <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Truck className="w-3.5 h-3.5 text-brand-600" />
            <span>Delivery Option</span>
          </div>
          <p className="font-semibold text-slate-800">{deliveryMethod?.title}</p>
          <p className="text-slate-600">{deliveryMethod?.description}</p>
        </div>

        {/* Payment summary */}
        <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <CreditCard className="w-3.5 h-3.5 text-brand-600" />
            <span>Payment Method</span>
          </div>
          <p className="font-semibold text-slate-800">{paymentMethod}</p>
          <p className="text-slate-500">Status: Pending Placement</p>
        </div>
      </div>

      {/* Item List */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Ordered Items ({cart.length})</h4>
        <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white overflow-hidden">
          {cart.map((item) => (
            <div key={item.cartItemId} className="p-3 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg bg-slate-50 shrink-0" />
                <div className="truncate">
                  <p className="font-bold text-slate-900 truncate">{item.name}</p>
                  <p className="text-[11px] text-slate-500">Variant: {item.variant} • Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="font-bold text-slate-900 shrink-0">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
