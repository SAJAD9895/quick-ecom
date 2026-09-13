import { getStorageItem, setStorageItem } from '../utils/storage';

const CART_STORAGE_KEY = 'quick_ecom_cart';
const COUPON_STORAGE_KEY = 'quick_ecom_applied_coupon';

const VALID_COUPONS = {
  QUICK10: { code: 'QUICK10', discountPercent: 10, description: '10% discount on entire cart' },
  WELCOME20: { code: 'WELCOME20', discountPercent: 20, description: '20% welcome discount' },
  FREESHIP: { code: 'FREESHIP', freeShipping: true, discountPercent: 0, description: 'Free Express Shipping' }
};

export const cartService = {
  getCart: () => {
    return getStorageItem(CART_STORAGE_KEY, []);
  },

  getAppliedCoupon: () => {
    return getStorageItem(COUPON_STORAGE_KEY, null);
  },

  addToCart: (product, quantity = 1, selectedVariant = null) => {
    const cart = cartService.getCart();
    const variantName = selectedVariant ? selectedVariant.name : (product.variants?.[0]?.name || 'Standard');
    const cartItemId = `${product.id}-${variantName.replace(/\s+/g, '-').toLowerCase()}`;

    const existingIndex = cart.findIndex((item) => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        image: product.images?.[0] || '',
        variant: variantName,
        quantity,
        stock: product.stock || 20
      });
    }

    setStorageItem(CART_STORAGE_KEY, cart);
    return cart;
  },

  removeFromCart: (cartItemId) => {
    let cart = cartService.getCart();
    cart = cart.filter((item) => item.cartItemId !== cartItemId);
    setStorageItem(CART_STORAGE_KEY, cart);
    return cart;
  },

  updateQuantity: (cartItemId, quantity) => {
    const cart = cartService.getCart();
    const item = cart.find((i) => i.cartItemId === cartItemId);
    if (item) {
      if (quantity <= 0) {
        return cartService.removeFromCart(cartItemId);
      }
      item.quantity = Math.min(quantity, item.stock || 99);
      setStorageItem(CART_STORAGE_KEY, cart);
    }
    return cart;
  },

  clearCart: () => {
    setStorageItem(CART_STORAGE_KEY, []);
    setStorageItem(COUPON_STORAGE_KEY, null);
    return [];
  },

  applyCoupon: (code) => {
    const normalized = (code || '').toUpperCase().trim();
    if (VALID_COUPONS[normalized]) {
      const coupon = VALID_COUPONS[normalized];
      setStorageItem(COUPON_STORAGE_KEY, coupon);
      return { success: true, coupon, message: `Coupon ${coupon.code} applied successfully!` };
    }
    return { success: false, coupon: null, message: 'Invalid coupon code. Try QUICK10 or WELCOME20' };
  },

  removeCoupon: () => {
    setStorageItem(COUPON_STORAGE_KEY, null);
    return null;
  },

  calculateTotals: (cartItems, appliedCoupon = null, deliveryFee = 99) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const originalSubtotal = cartItems.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0);
    
    let couponDiscount = 0;
    let finalDeliveryFee = subtotal > 1999 ? 0 : deliveryFee;

    if (appliedCoupon) {
      if (appliedCoupon.discountPercent) {
        couponDiscount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
      }
      if (appliedCoupon.freeShipping) {
        finalDeliveryFee = 0;
      }
    }

    const estimatedTax = Math.round((subtotal - couponDiscount) * 0.05); // 5% GST tax estimate
    const total = Math.max(0, subtotal - couponDiscount + finalDeliveryFee + estimatedTax);
    const totalSavings = (originalSubtotal - subtotal) + couponDiscount;

    return {
      subtotal,
      originalSubtotal,
      couponDiscount,
      deliveryFee: finalDeliveryFee,
      tax: estimatedTax,
      total,
      totalSavings
    };
  }
};
