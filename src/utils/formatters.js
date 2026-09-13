// Currency, date, and text formatters for Quick-Ecom

/**
 * Format price in INR currency format (e.g. ₹2,499)
 */
export const formatPrice = (amount) => {
  if (amount === undefined || amount === null) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Format date string to readable format (e.g. Oct 12, 2026)
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

/**
 * Format date with estimated delivery (e.g. Wed, Oct 14 - Fri, Oct 16)
 */
export const getEstimatedDeliveryDate = (daysFromNow = 3) => {
  const start = new Date();
  start.setDate(start.getDate() + daysFromNow);
  const end = new Date();
  end.setDate(end.getDate() + daysFromNow + 2);

  const startStr = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(start);
  const endStr = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(end);
  return `${startStr} - ${endStr}`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 80) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
