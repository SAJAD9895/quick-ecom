import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Store, Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const MobileNav = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Shop', path: '/shop', icon: Store },
    { name: 'Wishlist', path: '/wishlist', icon: Heart, badge: wishlistCount },
    { name: 'Cart', path: '/cart', icon: ShoppingBag, badge: cartCount },
    { name: 'Account', path: '/account', icon: User }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-3 flex items-center justify-around shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-0.5 p-1 text-[10px] font-semibold transition-colors ${
                isActive ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`
            }
          >
            <div className="relative">
              <Icon className="w-5 h-5 stroke-[2]" />
              {Boolean(item.badge && item.badge > 0) && (
                <span className="absolute -top-1 -right-2 min-w-[15px] h-[15px] rounded-full bg-brand-600 text-white text-[9px] font-extrabold flex items-center justify-center px-1">
                  {item.badge}
                </span>
              )}
            </div>
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
