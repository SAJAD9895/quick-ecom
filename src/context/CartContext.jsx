import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { cartService } from '../services/cartService';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartService.getCart());
  const [appliedCoupon, setAppliedCoupon] = useState(cartService.getAppliedCoupon());
  const { showToast } = useToast();

  useEffect(() => {
    setCart(cartService.getCart());
    setAppliedCoupon(cartService.getAppliedCoupon());
  }, []);

  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    const updated = cartService.addToCart(product, quantity, selectedVariant);
    setCart(updated);
    showToast(`Added ${quantity}x "${product.name}" to cart`, 'success');
  };

  const removeFromCart = (cartItemId) => {
    const updated = cartService.removeFromCart(cartItemId);
    setCart(updated);
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (cartItemId, quantity) => {
    const updated = cartService.updateQuantity(cartItemId, quantity);
    setCart(updated);
  };

  const clearCart = () => {
    const updated = cartService.clearCart();
    setCart(updated);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const res = cartService.applyCoupon(code);
    if (res.success) {
      setAppliedCoupon(res.coupon);
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
    return res;
  };

  const removeCoupon = () => {
    cartService.removeCoupon();
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const totals = useMemo(() => {
    return cartService.calculateTotals(cart, appliedCoupon);
  }, [cart, appliedCoupon]);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        totals
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
