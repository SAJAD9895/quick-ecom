import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart } from 'lucide-react';
import { QuantitySelector } from '../common/QuantitySelector';
import { formatPrice } from '../../utils/formatters';
import { useWishlist } from '../../context/WishlistContext';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { toggleWishlist } = useWishlist();

  const handleMoveToWishlist = () => {
    toggleWishlist({
      id: item.productId,
      name: item.name,
      slug: item.slug,
      brand: item.brand,
      price: item.price,
      originalPrice: item.originalPrice,
      discount: item.discount,
      images: [item.image]
    });
    onRemove(item.cartItemId);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all">
      {/* Product Image & Info */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <Link to={`/product/${item.slug}`} className="shrink-0 w-20 h-20 rounded-xl bg-slate-50 overflow-hidden border border-slate-100">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </Link>

        <div className="min-w-0 flex-1 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.brand}</span>
          <Link to={`/product/${item.slug}`} className="block">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors truncate">
              {item.name}
            </h4>
          </Link>

          <p className="text-xs text-slate-500 font-medium">
            Variant: <span className="text-slate-800 font-semibold">{item.variant}</span>
          </p>

          <div className="text-xs font-bold text-slate-900 sm:hidden pt-1">
            {formatPrice(item.price)}
          </div>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(q) => onUpdateQuantity(item.cartItemId, q)}
          size="sm"
        />

        <div className="hidden sm:block text-right min-w-[90px]">
          <div className="text-sm font-bold text-slate-900">
            {formatPrice(item.price * item.quantity)}
          </div>
          <div className="text-[10px] text-slate-400 font-medium">
            {formatPrice(item.price)} each
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleMoveToWishlist}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
            title="Move to Wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={() => onRemove(item.cartItemId)}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
            title="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
