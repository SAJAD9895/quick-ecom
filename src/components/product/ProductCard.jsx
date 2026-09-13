import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { Rating } from '../common/Rating';
import { PriceDisplay } from '../common/PriceDisplay';
import { Badge } from '../common/Badge';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product, className = '' }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart, cart } = useCart();

  const isLiked = isInWishlist(product.id);
  const isInCart = cart.some((item) => item.productId === product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className={`group relative bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden ${className}`}>
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images?.[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm z-10 ${
            isLiked
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/90 text-slate-500 hover:text-rose-600 hover:bg-white backdrop-blur-sm'
          }`}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isNew && <Badge variant="new">NEW</Badge>}
          {product.discount >= 25 && <Badge variant="discount">{product.discount}% OFF</Badge>}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            <span>{product.brand}</span>
            <span className="capitalize">{product.category}</span>
          </div>

          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            size="sm"
            showDiscountBadge={false}
          />

          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
              isInCart
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-slate-900 text-white hover:bg-brand-600 active:scale-95 shadow-sm'
            }`}
            title={isInCart ? 'Added to Cart' : 'Add to Cart'}
          >
            {isInCart ? <Check className="w-4 h-4 stroke-[3]" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
