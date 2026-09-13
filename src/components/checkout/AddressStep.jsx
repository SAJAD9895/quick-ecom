import React, { useState } from 'react';
import { MapPin, Plus, Check } from 'lucide-react';
import { Button } from '../common/Button';

export const AddressStep = ({ addresses = [], selectedAddress, onSelectAddress, onSaveNewAddress }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India'
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSaveNewAddress(formData);
    setShowAddForm(false);
    setFormData({
      fullName: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'India'
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-brand-600" />
          <span>Select Shipping Address</span>
        </h3>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{showAddForm ? 'Cancel' : 'Add New Address'}</span>
        </button>
      </div>

      {/* New Address Form */}
      {showAddForm && (
        <form onSubmit={handleFormSubmit} className="p-4 rounded-xl border border-brand-200 bg-brand-50/40 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700">Street Address *</label>
            <input
              type="text"
              required
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">City *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">State *</label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">PIN Code *</label>
              <input
                type="text"
                required
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full bg-white border border-slate-200 text-xs rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <Button type="submit" size="sm">Save & Use This Address</Button>
        </form>
      )}

      {/* Saved Addresses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {addresses.map((addr) => {
          const isSelected = selectedAddress?.id === addr.id;
          return (
            <div
              key={addr.id}
              onClick={() => onSelectAddress(addr)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/30 ring-2 ring-brand-100 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-bold text-xs text-slate-900">{addr.fullName}</span>
                {isSelected && (
                  <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {addr.street}, {addr.city}, {addr.state} - {addr.postalCode}
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-2">Phone: {addr.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
