import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { MapPin, Plus, Trash2, Check } from 'lucide-react';

export const AccountAddresses = () => {
  const { addresses, saveAddress, deleteAddress } = useAuth();
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await saveAddress(formData);
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
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Saved Addresses</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Manage your delivery destinations for faster checkout
          </p>
        </div>
        <Button
          size="sm"
          icon={Plus}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Address'}
        </Button>
      </div>

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
          <Button type="submit" size="sm">Save Address</Button>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900">{addr.fullName}</span>
              {addr.isDefault && (
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Default Address
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {addr.street}, {addr.city}, {addr.state} - {addr.postalCode}
            </p>
            <p className="text-[11px] text-slate-400 font-medium">Phone: {addr.phone}</p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => deleteAddress(addr.id)}
                className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                title="Delete address"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
