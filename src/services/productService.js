import { products } from '../data/products';
import { categories } from '../data/categories';

export const productService = {
  // Get all products
  getAllProducts: () => {
    return Promise.resolve(products);
  },

  // Get single product by slug
  getProductBySlug: (slug) => {
    const product = products.find((p) => p.slug === slug);
    return Promise.resolve(product || null);
  },

  // Get products by category slug
  getProductsByCategory: (categorySlug) => {
    if (!categorySlug || categorySlug === 'all') return Promise.resolve(products);
    const filtered = products.filter((p) => p.category === categorySlug);
    return Promise.resolve(filtered);
  },

  // Get featured products
  getFeaturedProducts: (limit = 8) => {
    const featured = products.filter((p) => p.isFeatured).slice(0, limit);
    return Promise.resolve(featured);
  },

  // Get deals
  getDeals: (limit = 8) => {
    const deals = products.filter((p) => p.isDeal || p.discount >= 30).slice(0, limit);
    return Promise.resolve(deals);
  },

  // Get new arrivals
  getNewArrivals: (limit = 8) => {
    const newItems = products.filter((p) => p.isNew).slice(0, limit);
    return Promise.resolve(newItems);
  },

  // Get categories list
  getCategories: () => {
    return Promise.resolve(categories);
  },

  // Related products
  getRelatedProducts: (category, currentProductId, limit = 4) => {
    const related = products
      .filter((p) => p.category === category && p.id !== currentProductId)
      .slice(0, limit);
    return Promise.resolve(related);
  },

  // Advanced search, filter, and sort
  queryProducts: ({
    query = '',
    category = 'all',
    brands = [],
    minPrice = 0,
    maxPrice = 100000,
    minRating = 0,
    inStockOnly = false,
    minDiscount = 0,
    sortBy = 'featured'
  }) => {
    let result = [...products];

    // Search query filter
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (category && category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    // Brands multi-select filter
    if (brands && brands.length > 0) {
      result = result.filter((p) => brands.includes(p.brand));
    }

    // Price range filter
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Rating filter
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // In Stock filter
    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    // Discount filter
    if (minDiscount > 0) {
      result = result.filter((p) => p.discount >= minDiscount);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-high':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'discount-high':
        result.sort((a, b) => b.discount - a.discount);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return Promise.resolve(result);
  }
};
