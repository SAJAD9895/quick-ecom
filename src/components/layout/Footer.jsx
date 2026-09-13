import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, Headphones, Globe, Share2, Mail, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Value Proposition Grid */}
      <div className="border-b border-slate-800/80 py-8 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-xs">Fast Delivery</p>
              <p className="text-[11px] text-slate-400">Quick & reliable shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-xs">Secure Payments</p>
              <p className="text-[11px] text-slate-400">256-bit SSL protection</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-400 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-xs">Easy Returns</p>
              <p className="text-[11px] text-slate-400">7-day hassle-free policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-400 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-xs">24/7 Support</p>
              <p className="text-[11px] text-slate-400">Dedicated help center</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Info (Cols 1-2) */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-lg text-white">
              Quick<span className="text-brand-400">-Ecom</span>
            </span>
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Quick-Ecom is a modern online shopping platform focused on fast shopping, simple navigation, clean product discovery, and instant checkout.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="Globe">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="Mail">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-slate-300" aria-label="Chat">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-bold text-slate-100 text-sm mb-4 uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2.5">
            <li><Link to="/shop" className="hover:text-slate-100 transition-colors">All Products</Link></li>
            <li><Link to="/shop?new=true" className="hover:text-slate-100 transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop?featured=true" className="hover:text-slate-100 transition-colors">Best Sellers</Link></li>
            <li><Link to="/shop?deal=true" className="hover:text-slate-100 transition-colors">Deals & Offers</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-bold text-slate-100 text-sm mb-4 uppercase tracking-wider">Customer Support</h4>
          <ul className="space-y-2.5">
            <li><Link to="/orders" className="hover:text-slate-100 transition-colors">Order Tracking</Link></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-slate-100 text-sm mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-slate-100 transition-colors">About Quick-Ecom</a></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-slate-100 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Quick-Ecom Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Designed for Speed & Simplicity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
