import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductSkeleton } from '../common/ProductSkeleton';
import { EmptyState } from '../common/EmptyState';

export const ProductGrid = ({
  products = [],
  isLoading = false,
  emptyTitle = 'No products found',
  emptyDescription = 'Try clearing filters or changing your search terms.',
  onClearFilters = null
}) => {
  if (isLoading) {
    return <ProductSkeleton count={8} />;
  }

  if (!products || products.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionLabel={onClearFilters ? 'Clear All Filters' : null}
        onAction={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
