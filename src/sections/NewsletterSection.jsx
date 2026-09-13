import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Subscribed! Check your inbox for exclusive offers.', 'success');
      setEmail('');
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6">
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center relative overflow-hidden shadow-xl">
        <div className="max-w-xl mx-auto space-y-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-brand-600/30 border border-brand-500/40 text-brand-400 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get the Latest Deals & Drops
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Subscribe for product updates, exclusive flash sales, and special promotional discount codes delivered straight to your inbox.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-900/80 border border-emerald-700 text-emerald-300 text-xs font-bold rounded-xl animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-slate-800 border border-slate-700 text-white text-xs font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 placeholder-slate-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow transition-all shrink-0 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-500 font-medium pt-2">
            No spam guaranteed. Unsubscribe anytime with 1-click.
          </p>
        </div>
      </div>
    </section>
  );
};
