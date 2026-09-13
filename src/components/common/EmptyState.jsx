import React from 'react';
import { Button } from './Button';
import { PackageOpen } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = PackageOpen,
  title = 'No items found',
  description = 'Try adjusting your search or filters to find what you are looking for.',
  actionLabel = null,
  onAction = null,
  actionLink = null,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 lg:p-12 rounded-2xl bg-white border border-slate-100 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-subtle">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">{description}</p>
      
      {actionLabel && (
        onAction ? (
          <Button onClick={onAction}>{actionLabel}</Button>
        ) : actionLink ? (
          <Button onClick={() => window.location.href = actionLink}>{actionLabel}</Button>
        ) : null
      )}
    </div>
  );
};
