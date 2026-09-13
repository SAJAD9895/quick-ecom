import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { User, Mail, Phone, Lock } from 'lucide-react';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Create Account — Quick-Ecom';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsSubmitting(true);
    await register(formData);
    setIsSubmitting(false);
    navigate('/shop');
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900">Create Quick-Ecom Account</h2>
        <p className="text-xs text-slate-500 font-medium">
          Join thousands of smart shoppers for fast delivery & perks
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="text-xs font-bold text-slate-700">Full Name</label>
          <div className="relative mt-1">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Alex Vance"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
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
              placeholder="alex@example.com"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
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
              placeholder="+91 98765 43210"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700">Password</label>
          <div className="relative mt-1">
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700">Confirm Password</label>
          <div className="relative mt-1">
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" fullWidth isLoading={isSubmitting} size="lg">
            Create Account
          </Button>
        </div>
      </form>

      <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
        Already have an account?{' '}
        <Link to="/login" className="font-extrabold text-brand-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
