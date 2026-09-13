import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../common/Badge';
import { formatPrice, formatDate } from '../../utils/formatters';
import { ChevronRight, Package } from 'lucide-react';

export const OrderCard = ({ order }) => {
  const getStatusVariant = (status) => {
    switch (status) {
      case 'Delivered': return 'new';
      case 'Out for Delivery': return 'deal';
      case 'Shipped': return 'primary';
      case 'Cancelled': return 'discount';
      default: return 'default';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle p-5 space-y-4 hover:border-slate-300 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <Package className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900">{order.id}</span>
            <p className="text-[11px] text-slate-400 font-medium">Placed on {formatDate(order.date)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
          <span className="font-extrabold text-slate-900 text-sm">{formatPrice(order.totalAmount)}</span>
        </div>
      </div>

      {/* Items Preview */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {order.items.map((item, idx) => (
            <img
              key={idx}
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-slate-50 shrink-0"
              title={`${item.name} (Qty: ${item.quantity})`}
            />
          ))}
        </div>

        <Link
          to={`/orders/${order.id}`}
          className="px-3.5 py-2 bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-colors shrink-0"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
