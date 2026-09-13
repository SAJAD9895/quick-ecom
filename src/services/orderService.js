import { getStorageItem, setStorageItem } from '../utils/storage';
import { initialMockOrders } from '../data/mockOrders';

const ORDERS_STORAGE_KEY = 'quick_ecom_orders';

export const orderService = {
  getOrders: () => {
    const existing = getStorageItem(ORDERS_STORAGE_KEY, null);
    if (!existing) {
      setStorageItem(ORDERS_STORAGE_KEY, initialMockOrders);
      return initialMockOrders;
    }
    return existing;
  },

  getOrderById: (orderId) => {
    const orders = orderService.getOrders();
    return orders.find((o) => o.id === orderId) || null;
  },

  createOrder: (orderData) => {
    const orders = orderService.getOrders();
    const newOrderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const trackingNumber = `TRK-${Math.floor(10000000 + Math.random() * 90000000)}`;

    const newOrder = {
      id: newOrderId,
      date: new Date().toISOString().split('T')[0],
      status: 'Order Placed',
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      paymentMethod: orderData.paymentMethod || 'Credit Card',
      totalAmount: orderData.totals.total,
      subtotal: orderData.totals.subtotal,
      discount: orderData.totals.couponDiscount,
      shippingFee: orderData.totals.deliveryFee,
      tax: orderData.totals.tax,
      deliveryMethod: orderData.deliveryMethod?.title || 'Standard Delivery',
      estimatedDelivery: orderData.deliveryMethod?.estimatedDays || '3-5 Business Days',
      trackingNumber,
      address: orderData.address,
      items: orderData.items
    };

    const updatedOrders = [newOrder, ...orders];
    setStorageItem(ORDERS_STORAGE_KEY, updatedOrders);
    return newOrder;
  },

  cancelOrder: (orderId) => {
    const orders = orderService.getOrders();
    const order = orders.find((o) => o.id === orderId);
    if (order && order.status !== 'Delivered' && order.status !== 'Cancelled') {
      order.status = 'Cancelled';
      setStorageItem(ORDERS_STORAGE_KEY, orders);
      return { success: true, order };
    }
    return { success: false, message: 'Order cannot be cancelled at this stage.' };
  }
};
