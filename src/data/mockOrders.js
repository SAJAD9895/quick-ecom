export const initialMockOrders = [
  {
    id: 'ORD-89421',
    date: '2026-09-08',
    status: 'Delivered',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    totalAmount: 4998,
    subtotal: 4998,
    discount: 0,
    shippingFee: 0,
    deliveryMethod: 'Express Delivery',
    estimatedDelivery: 'Sep 10, 2026',
    deliveredDate: 'Sep 10, 2026',
    trackingNumber: 'TRK-98314911',
    address: {
      fullName: 'Alex Vance',
      phone: '+91 98765 43210',
      street: '402 Skyline Towers, MG Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India'
    },
    items: [
      {
        productId: 'prod-001',
        name: 'Wireless Noise-Canceling Headphones X1',
        slug: 'wireless-noise-canceling-headphones-x1',
        price: 2499,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
        variant: 'Matte Black'
      }
    ]
  },
  {
    id: 'ORD-72109',
    date: '2026-09-11',
    status: 'Out for Delivery',
    paymentStatus: 'Paid',
    paymentMethod: 'UPI (Google Pay)',
    totalAmount: 3299,
    subtotal: 3299,
    discount: 0,
    shippingFee: 0,
    deliveryMethod: 'Standard Delivery',
    estimatedDelivery: 'Sep 12, 2026',
    trackingNumber: 'TRK-44810294',
    address: {
      fullName: 'Alex Vance',
      phone: '+91 98765 43210',
      street: '402 Skyline Towers, MG Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India'
    },
    items: [
      {
        productId: 'prod-007',
        name: 'Ultra Lightweight Running Shoes Apex Air',
        slug: 'ultra-lightweight-running-shoes-apex-air',
        price: 3299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
        variant: 'Flame Red'
      }
    ]
  }
];
