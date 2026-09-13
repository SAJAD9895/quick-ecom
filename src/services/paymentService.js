// Payment service interface ready for future Razorpay / Stripe / Paypal integration

export const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit / Debit Card', icon: 'CreditCard', description: 'Visa, Mastercard, RuPay, Amex' },
  { id: 'upi', name: 'UPI / Instant Pay', icon: 'Smartphone', description: 'Google Pay, PhonePe, Paytm, BHIM' },
  { id: 'netbanking', name: 'Net Banking', icon: 'Building', description: 'HDFC, ICICI, SBI, Axis & 50+ Banks' },
  { id: 'wallet', name: 'Wallets', icon: 'Wallet', description: 'Amazon Pay, Mobikwik, Paytm Wallet' },
  { id: 'cod', name: 'Cash on Delivery', icon: 'Banknote', description: 'Pay cash when your order arrives' }
];

export const paymentService = {
  getPaymentMethods: () => {
    return Promise.resolve(PAYMENT_METHODS);
  },

  processPayment: (paymentDetails) => {
    return new Promise((resolve) => {
      // Simulate network request delay
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`,
          paymentMethod: paymentDetails.method,
          timestamp: new Date().toISOString()
        });
      }, 1200);
    });
  }
};
