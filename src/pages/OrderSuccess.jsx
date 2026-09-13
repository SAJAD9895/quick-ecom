import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, Truck } from 'lucide-react';
import { Button } from '../components/common/Button';
import { formatPrice, formatDate } from '../utils/formatters';

export const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    document.title = 'Order Confirmed — Quick-Ecom';
  }, []);

  if (!order) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">No recent order details found</h2>
        <Button onClick={() => navigate('/orders')}>View Order History</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* Confirmation Banner */}
      <div className="bg-emerald-900 text-white rounded-3xl p-8 text-center space-y-3 shadow-xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-emerald-800 border-2 border-emerald-500 text-emerald-300 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Order Confirmed!</h1>
        <p className="text-xs sm:text-sm text-emerald-200 font-medium">
          Thank you for shopping with Quick-Ecom. Your order has been placed successfully.
        </p>
      </div>

      {/* Order Info Details Box */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 font-medium">Order Number</span>
            <p className="font-extrabold text-slate-900 text-sm mt-0.5">{order.id}</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Order Date</span>
            <p className="font-extrabold text-slate-900 text-sm mt-0.5">{formatDate(order.date)}</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Total Paid</span>
            <p className="font-extrabold text-slate-900 text-sm mt-0.5">{formatPrice(order.totalAmount)}</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Est. Delivery</span>
            <p className="font-extrabold text-brand-600 text-sm mt-0.5">{order.estimatedDelivery}</p>
          </div>
        </div>

        {/* Shipping address details */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
            <Truck className="w-4 h-4 text-brand-600" />
            <span>Delivery Destination</span>
          </div>
          <p className="font-bold text-slate-800">{order.address?.fullName}</p>
          <p className="text-slate-600">{order.address?.street}, {order.address?.city}, {order.address?.state} - {order.address?.postalCode}</p>
        </div>

        {/* Ordered items preview */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Purchased Items</h4>
          <div className="divide-y divide-slate-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-xl bg-slate-50 border border-slate-100 shrink-0" />
                  <div className="truncate">
                    <p className="font-bold text-slate-900 truncate">{item.name}</p>
                    <p className="text-slate-400">Qty: {item.quantity} • {item.variant}</p>
                  </div>
                </div>
                <span className="font-bold text-slate-900 shrink-0">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <Link to={`/orders/${order.id}`} className="flex-1">
            <Button fullWidth icon={Package}>Track Order</Button>
          </Link>
          <Link to="/orders" className="flex-1">
            <Button variant="outline" fullWidth>View All Orders</Button>
          </Link>
          <Link to="/shop" className="flex-1">
            <Button variant="ghost" fullWidth icon={ArrowRight} iconPosition="right">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
