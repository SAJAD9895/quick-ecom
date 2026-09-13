import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Rating } from '../components/common/Rating';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { EmptyState } from '../components/common/EmptyState';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'My Wishlist — Quick-Ecom';
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <Breadcrumb items={[{ label: 'My Wishlist' }]} />
        <EmptyState
          icon={Heart}
          title="Your Wishlist is Empty"
          description="Save products here and come back later to review or purchase your favorite items."
          actionLabel="Continue Shopping"
          onAction={() => navigate('/shop')}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumb items={[{ label: 'My Wishlist' }]} />

      <div className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          My Saved Wishlist
        </h1>
        <p className="text-xs text-slate-500 font-medium mt-1">
          You have <strong className="text-slate-900">{wishlist.length}</strong> products saved for later
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
              <Link to={`/product/${product.slug}`} className="block w-full h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-500 hover:text-rose-600 flex items-center justify-center shadow-sm backdrop-blur-sm transition-colors"
                title="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Details */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{product.brand}</span>
                <Link to={`/product/${product.slug}`} className="block">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                {product.rating && <Rating rating={product.rating} size="sm" />}
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-3">
                <PriceDisplay price={product.price} originalPrice={product.originalPrice} discount={product.discount} size="sm" />
                <button
                  onClick={() => {
                    addToCart(product, 1);
                    removeFromWishlist(product.id);
                  }}
                  className="w-full py-2 bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Move to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
