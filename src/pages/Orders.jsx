import React, { useState, useEffect } from 'react';
import { orderService } from '../services/orderService';
import { OrderCard } from '../components/orders/OrderCard';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { EmptyState } from '../components/common/EmptyState';
import { Package } from 'lucide-react';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'My Orders — Quick-Ecom';
    const fetched = orderService.getOrders();
    setOrders(fetched);
    setIsLoading(false);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumb items={[{ label: 'Account', url: '/account' }, { label: 'My Orders' }]} />

      <div className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          My Order History
        </h1>
        <p className="text-xs text-slate-500 font-medium mt-1">
          Track packages, view receipts, and monitor delivery timelines
        </p>
      </div>

      {isLoading ? (
        <div className="py-12 text-center text-slate-400 text-xs animate-pulse">Loading orders...</div>
      ) : orders.length === 0 ? (
        <EmptyState
          icon={Package}
          title="No Orders Placed Yet"
          description="You haven't placed any orders yet. Discover great products in our shop!"
          actionLabel="Start Shopping"
          actionLink="/shop"
        />
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};
