import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { OrderTimeline } from '../components/orders/OrderTimeline';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { formatPrice, formatDate } from '../utils/formatters';
import { useToast } from '../context/ToastContext';
import { MapPin, Truck, CreditCard, Package, ArrowLeft, AlertTriangle } from 'lucide-react';

export const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const found = orderService.getOrderById(id);
    if (found) {
      setOrder(found);
      document.title = `Order ${found.id} Details — Quick-Ecom`;
    }
    setIsLoading(false);
  }, [id]);

  const handleCancelOrder = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      const res = orderService.cancelOrder(order.id);
      if (res.success) {
        setOrder({ ...order, status: 'Cancelled' });
        showToast('Order cancelled successfully', 'info');
      } else {
        showToast(res.message, 'error');
      }
    }
  };

  if (isLoading) {
    return <div className="py-12 text-center text-slate-400 text-xs animate-pulse">Loading order details...</div>;
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Order Not Found</h2>
        <Button onClick={() => navigate('/orders')}>Back to Order History</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Account', url: '/account' },
          { label: 'My Orders', url: '/orders' },
          { label: order.id }
        ]}
      />

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Order {order.id}
            </h1>
            <Badge variant={order.status === 'Delivered' ? 'new' : 'default'}>{order.status}</Badge>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Placed on <strong className="text-slate-900">{formatDate(order.date)}</strong> • Tracking ID: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-700">{order.trackingNumber}</code>
          </p>
        </div>

        {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
          <button
            onClick={handleCancelOrder}
            className="px-3.5 py-2 rounded-xl border border-rose-200 text-rose-600 font-bold text-xs hover:bg-rose-50 transition-colors flex items-center gap-1.5"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Cancel Order</span>
          </button>
        )}
      </div>

      {/* Visual Tracking Timeline */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Truck className="w-4 h-4 text-brand-600" />
          <span>Fulfillment Tracking Progress</span>
        </h3>
        <OrderTimeline currentStatus={order.status} />
      </div>

      {/* Grid: Delivery Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 border-b border-slate-100 pb-2">
            <MapPin className="w-4 h-4 text-brand-600" />
            <span>Shipping Address</span>
          </div>
          <p className="font-bold text-slate-800">{order.address?.fullName}</p>
          <p className="text-slate-600 leading-relaxed">
            {order.address?.street}, {order.address?.city}, {order.address?.state} - {order.address?.postalCode}
          </p>
          <p className="text-slate-400 font-medium">Phone: {order.address?.phone}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 border-b border-slate-100 pb-2">
            <Truck className="w-4 h-4 text-brand-600" />
            <span>Delivery Method</span>
          </div>
          <p className="font-bold text-slate-800">{order.deliveryMethod}</p>
          <p className="text-slate-600">Est. Delivery: {order.estimatedDelivery}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 border-b border-slate-100 pb-2">
            <CreditCard className="w-4 h-4 text-brand-600" />
            <span>Payment Summary</span>
          </div>
          <p className="font-bold text-slate-800">{order.paymentMethod}</p>
          <p className="text-slate-600">Payment Status: <span className="font-bold text-emerald-600">{order.paymentStatus}</span></p>
          <p className="font-extrabold text-slate-900 text-sm pt-1">Total: {formatPrice(order.totalAmount)}</p>
        </div>
      </div>

      {/* Item Breakdown Table */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Package className="w-4 h-4 text-brand-600" />
          <span>Purchased Items ({order.items.length})</span>
        </h3>

        <div className="divide-y divide-slate-100">
          {order.items.map((item, idx) => (
            <div key={idx} className="py-3 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-xl bg-slate-50 border border-slate-100 shrink-0" />
                <div className="truncate">
                  <Link to={`/product/${item.slug}`} className="font-bold text-slate-900 hover:text-brand-600 transition-colors truncate block">
                    {item.name}
                  </Link>
                  <p className="text-slate-400">Variant: {item.variant} • Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="font-extrabold text-slate-900 shrink-0">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <Link to="/orders" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Orders</span>
        </Link>
      </div>
    </div>
  );
};
