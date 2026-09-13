import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('alex.vance@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign In — Quick-Ecom';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await login(email, password);
    setIsSubmitting(false);
    navigate('/shop');
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900">Welcome Back</h2>
        <p className="text-xs text-slate-500 font-medium">
          Enter your credentials to access your account & orders
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-700">Email Address</label>
          <div className="relative mt-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700">Password</label>
            <Link to="/forgot-password" className="text-xs font-bold text-brand-600 hover:underline">
              Forgot?
            </Link>
          </div>
          <div className="relative mt-1">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-9 pr-9 py-2.5 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" fullWidth isLoading={isSubmitting} size="lg">
            Sign In
          </Button>
        </div>
      </form>

      {/* Quick Demo Helper */}
      <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-[11px] text-brand-800 text-center font-medium">
        <span>💡 Demo Account Credentials Pre-filled. Click Sign In to continue!</span>
      </div>

      <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
        Don't have an account?{' '}
        <Link to="/register" className="font-extrabold text-brand-600 hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};
