import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900">Reset Password</h2>
        <p className="text-xs text-slate-500 font-medium">
          Enter your registered email to receive reset instructions
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="font-bold text-sm">Reset Link Sent!</h3>
          <p className="text-xs text-emerald-700">
            We have sent password recovery instructions to <strong>{email}</strong>. Please check your inbox.
          </p>
          <div className="pt-2">
            <Link to="/login">
              <Button size="sm" variant="outline">Back to Sign In</Button>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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

          <Button type="submit" fullWidth size="lg">Send Reset Instructions</Button>
        </form>
      )}

      <div className="pt-2 border-t border-slate-100">
        <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Sign In</span>
        </Link>
      </div>
    </div>
  );
};
