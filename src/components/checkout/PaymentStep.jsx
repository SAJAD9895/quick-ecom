import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Wallet, Banknote, ShieldCheck } from 'lucide-react';

export const PaymentStep = ({ selectedPayment, onSelectPayment }) => {
  const paymentMethods = [
    { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, subtitle: 'Visa, Mastercard, RuPay, Amex' },
    { id: 'upi', name: 'UPI Instant Pay', icon: Smartphone, subtitle: 'GPay, PhonePe, Paytm, BHIM' },
    { id: 'netbanking', name: 'Net Banking', icon: Building, subtitle: 'All Indian Major Banks' },
    { id: 'wallet', name: 'Wallets', icon: Wallet, subtitle: 'Amazon Pay, Paytm Wallet' },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote, subtitle: 'Pay cash upon delivery' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-brand-600" />
        <span>Select Payment Method</span>
      </h3>

      <div className="space-y-2.5">
        {paymentMethods.map((pm) => {
          const isSelected = selectedPayment === pm.name;
          const Icon = pm.icon;
          return (
            <div
              key={pm.id}
              onClick={() => onSelectPayment(pm.name)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/30 ring-2 ring-brand-100 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{pm.name}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{pm.subtitle}</p>
                </div>
              </div>

              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-brand-600 bg-brand-600' : 'border-slate-300'}`}>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-slate-500 text-xs">
        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
        <span>Your payment information is encrypted and processed securely.</span>
      </div>
    </div>
  );
};
