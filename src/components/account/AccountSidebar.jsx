import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AccountSidebar = ({ className = '' }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Profile Information', path: '/account', icon: User },
    { name: 'My Orders', path: '/orders', icon: Package },
    { name: 'My Wishlist', path: '/wishlist', icon: Heart },
    { name: 'Saved Addresses', path: '/account/addresses', icon: MapPin },
    { name: 'Account Settings', path: '/account/settings', icon: Settings }
  ];

  return (
    <div className={`bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle space-y-6 ${className}`}>
      {/* User Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
        />
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-slate-900 truncate">{currentUser?.name}</h4>
          <p className="text-xs text-slate-400 truncate">{currentUser?.email}</p>
        </div>
      </div>

      {/* Nav List */}
      <nav className="space-y-1">
        {navLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/account'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left pt-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </nav>
    </div>
  );
};
