import React, { createContext, useContext, useState, useEffect } from 'react';
import { wishlistService } from '../services/wishlistService';
import { useToast } from './ToastContext';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(wishlistService.getWishlist());
  const { showToast } = useToast();

  useEffect(() => {
    setWishlist(wishlistService.getWishlist());
  }, []);

  const isInWishlist = (productId) => {
    return wishlistService.isInWishlist(productId);
  };

  const toggleWishlist = (product) => {
    const { list, added } = wishlistService.toggleWishlist(product);
    setWishlist(list);
    if (added) {
      showToast(`Added "${product.name}" to Wishlist`, 'success');
    } else {
      showToast(`Removed "${product.name}" from Wishlist`, 'info');
    }
  };

  const removeFromWishlist = (productId) => {
    const list = wishlistService.removeFromWishlist(productId);
    setWishlist(list);
    showToast('Item removed from Wishlist', 'info');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};
