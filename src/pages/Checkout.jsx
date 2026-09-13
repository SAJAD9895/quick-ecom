import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { orderService } from '../services/orderService';
import { paymentService } from '../services/paymentService';
import { AddressStep } from '../components/checkout/AddressStep';
import { DeliveryStep, DELIVERY_OPTIONS } from '../components/checkout/DeliveryStep';
import { PaymentStep } from '../components/checkout/PaymentStep';
import { ReviewStep } from '../components/checkout/ReviewStep';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { formatPrice } from '../utils/formatters';
import { Check, ShieldCheck } from 'lucide-react';

export const Checkout = () => {
  const { cart, totals, clearCart } = useCart();
  const { addresses, saveAddress, isLoggedIn } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0] || null);
  const [selectedDelivery, setSelectedDelivery] = useState(DELIVERY_OPTIONS[0]);
  const [selectedPayment, setSelectedPayment] = useState('UPI Instant Pay');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Checkout — Quick-Ecom';
    if (addresses.length > 0 && !selectedAddress) {
      setSelectedAddress(addresses[0]);
    }
  }, [addresses, selectedAddress]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const steps = [
    { id: 1, title: 'Shipping Address' },
    { id: 2, title: 'Delivery Method' },
    { id: 3, title: 'Payment Option' },
    { id: 4, title: 'Order Review' }
  ];

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      showToast('Please select or add a shipping address', 'error');
      setActiveStep(1);
      return;
    }

    setIsSubmitting(true);
    try {
      await paymentService.processPayment({ method: selectedPayment });

      const newOrder = orderService.createOrder({
        address: selectedAddress,
        deliveryMethod: selectedDelivery,
        paymentMethod: selectedPayment,
        totals,
        items: cart
      });

      clearCart();
      setIsSubmitting(false);
      showToast('Order placed successfully!', 'success');
      navigate('/order-success', { state: { order: newOrder } });
    } catch (error) {
      setIsSubmitting(false);
      showToast('Payment processing failed. Please try again.', 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumb items={[{ label: 'Cart', url: '/cart' }, { label: 'Checkout' }]} />

      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Checkout Workflow
        </h1>
        <p className="text-xs text-slate-500 font-medium mt-1">
          Complete your details to finalize order placement
        </p>
      </div>

      {/* Checkout Steps Progress Bar */}
      <div className="grid grid-cols-4 gap-2 border-b border-slate-200 pb-6">
        {steps.map((step) => {
          const isCompleted = step.id < activeStep;
          const isCurrent = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => step.id < activeStep && setActiveStep(step.id)}
              disabled={step.id > activeStep}
              className={`flex flex-col sm:flex-row items-center gap-2 p-2 rounded-xl text-left transition-all ${
                isCurrent
                  ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200'
                  : isCompleted
                  ? 'text-emerald-700 font-semibold cursor-pointer'
                  : 'text-slate-400 font-normal cursor-not-allowed opacity-60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isCurrent
                    ? 'bg-brand-600 text-white'
                    : isCompleted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step.id}
              </div>
              <span className="text-[11px] sm:text-xs truncate">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Step Panels Container */}
        <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle">
          {activeStep === 1 && (
            <div className="space-y-6">
              <AddressStep
                addresses={addresses}
                selectedAddress={selectedAddress}
                onSelectAddress={setSelectedAddress}
                onSaveNewAddress={saveAddress}
              />
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button onClick={() => setActiveStep(2)} disabled={!selectedAddress}>
                  Continue to Delivery
                </Button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-6">
              <DeliveryStep
                selectedOption={selectedDelivery}
                onSelectOption={setSelectedDelivery}
              />
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <Button variant="ghost" onClick={() => setActiveStep(1)}>
                  Back to Address
                </Button>
                <Button onClick={() => setActiveStep(3)}>
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-6">
              <PaymentStep
                selectedPayment={selectedPayment}
                onSelectPayment={setSelectedPayment}
              />
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <Button variant="ghost" onClick={() => setActiveStep(2)}>
                  Back to Delivery
                </Button>
                <Button onClick={() => setActiveStep(4)}>
                  Review Order
                </Button>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="space-y-6">
              <ReviewStep
                cart={cart}
                address={selectedAddress}
                deliveryMethod={selectedDelivery}
                paymentMethod={selectedPayment}
                totals={totals}
              />
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <Button variant="ghost" onClick={() => setActiveStep(3)}>
                  Back to Payment
                </Button>
                <Button onClick={handlePlaceOrder} isLoading={isSubmitting} size="lg" variant="accent">
                  Place Order ({formatPrice(totals.total)})
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-sm font-extrabold text-slate-900 pb-2 border-b border-slate-200">
            Cart Summary ({cart.length} items)
          </h3>
          <div className="space-y-2 max-h-56 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.cartItemId} className="flex justify-between items-center text-xs">
                <span className="truncate max-w-[180px] font-medium text-slate-700">{item.name} (x{item.quantity})</span>
                <span className="font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs font-semibold">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>{formatPrice(totals.subtotal)}</span>
            </div>
            {totals.couponDiscount > 0 && (
              <div className="flex justify-between text-emerald-600">
                <span>Discount</span>
                <span>-{formatPrice(totals.couponDiscount)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600">
              <span>Delivery</span>
              <span>{totals.deliveryFee === 0 ? 'FREE' : formatPrice(totals.deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Taxes</span>
              <span>{formatPrice(totals.tax)}</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between text-slate-900 text-sm font-extrabold">
              <span>Total Payable</span>
              <span>{formatPrice(totals.total)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Guaranteed 100% purchase protection</span>
          </div>
        </div>
      </div>
    </div>
  );
};
