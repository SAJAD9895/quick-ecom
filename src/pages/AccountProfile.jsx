import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { User, Mail, Phone } from 'lucide-react';

export const AccountProfile = () => {
  const { currentUser, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await updateProfile(formData);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-slate-100">
        <h2 className="text-xl font-extrabold text-slate-900">Personal Information</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          Manage your profile credentials and contact details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="text-xs font-bold text-slate-700">Full Name</label>
          <div className="relative mt-1">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500"
            />
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700">Email Address</label>
          <div className="relative mt-1">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500"
            />
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700">Phone Number</label>
          <div className="relative mt-1">
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500"
            />
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" isLoading={isSubmitting}>
            Save Profile Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
