import { getStorageItem, setStorageItem } from '../utils/storage';

const WISHLIST_STORAGE_KEY = 'quick_ecom_wishlist';

export const wishlistService = {
  getWishlist: () => {
    return getStorageItem(WISHLIST_STORAGE_KEY, []);
  },

  isInWishlist: (productId) => {
    const list = wishlistService.getWishlist();
    return list.some((item) => item.id === productId || item.productId === productId);
  },

  toggleWishlist: (product) => {
    const list = wishlistService.getWishlist();
    const index = list.findIndex((item) => item.id === product.id || item.productId === product.id);

    let updatedList = [];
    let added = false;

    if (index > -1) {
      updatedList = list.filter((_, i) => i !== index);
    } else {
      updatedList = [...list, {
        id: product.id,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        rating: product.rating,
        image: product.images?.[0] || product.image || '',
        stock: product.stock || 10
      }];
      added = true;
    }

    setStorageItem(WISHLIST_STORAGE_KEY, updatedList);
    return { list: updatedList, added };
  },

  removeFromWishlist: (productId) => {
    const list = wishlistService.getWishlist();
    const updatedList = list.filter((item) => item.id !== productId && item.productId !== productId);
    setStorageItem(WISHLIST_STORAGE_KEY, updatedList);
    return updatedList;
  }
};
