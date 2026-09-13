import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({
  rating = 0,
  reviewCount = null,
  size = 'sm',
  showCount = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const half = rating >= star - 0.5 && rating < star;
          return (
            <Star
              key={star}
              className={`${iconSizes[size] || iconSizes.sm} ${
                filled
                  ? 'fill-amber-400 text-amber-400'
                  : half
                  ? 'fill-amber-200 text-amber-400'
                  : 'fill-slate-100 text-slate-300'
              }`}
            />
          );
        })}
      </div>
      {showCount && (
        <span className={`font-medium text-slate-700 ${textSizes[size] || textSizes.sm}`}>
          {rating.toFixed(1)}
          {reviewCount !== null && (
            <span className="text-slate-400 font-normal ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
};
