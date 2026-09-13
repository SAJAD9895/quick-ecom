import React from 'react';
import { Rating } from '../common/Rating';
import { CheckCircle2, ThumbsUp } from 'lucide-react';

export const ProductReviews = ({ rating = 4.8, reviewCount = 120 }) => {
  const sampleReviews = [
    {
      id: 'rev-1',
      author: 'Marcus Brody',
      date: 'Aug 24, 2026',
      rating: 5,
      title: 'Exceeded all expectations!',
      comment: 'Build quality is top tier. Audio clarity and battery life perform exactly as advertised. Delivered in just 2 days.',
      verified: true,
      likes: 14
    },
    {
      id: 'rev-2',
      author: 'Priya Sharma',
      date: 'Aug 18, 2026',
      rating: 5,
      title: 'Super sleek & comfortable',
      comment: 'Super lightweight and the finish looks very premium in person. Extremely happy with this purchase!',
      verified: true,
      likes: 8
    },
    {
      id: 'rev-3',
      author: 'David Chen',
      date: 'Jul 29, 2026',
      rating: 4,
      title: 'Great value for money',
      comment: 'Very satisfied. Minor nitpick is the packaging box was slightly creased, but the product inside was completely pristine.',
      verified: true,
      likes: 5
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overall Score Summary */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
        <div className="text-center sm:border-r border-slate-200 sm:pr-8">
          <span className="text-4xl font-extrabold text-slate-900 leading-none">{rating.toFixed(1)}</span>
          <div className="mt-2">
            <Rating rating={rating} showCount={false} size="md" />
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">Based on {reviewCount} reviews</p>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="flex-1 w-full space-y-2">
          {[
            { stars: 5, pct: 82 },
            { stars: 4, pct: 12 },
            { stars: 3, pct: 4 },
            { stars: 2, pct: 1 },
            { stars: 1, pct: 1 }
          ].map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="w-12">{item.stars} Stars</span>
              <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${item.pct}%` }} />
              </div>
              <span className="w-8 text-right text-slate-400">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews List */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Customer Feedback</h4>
        {sampleReviews.map((rev) => (
          <div key={rev.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Buyer
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">{rev.date}</span>
            </div>

            <Rating rating={rev.rating} showCount={false} size="sm" />
            <h5 className="text-xs font-bold text-slate-800">{rev.title}</h5>
            <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <button className="flex items-center gap-1 hover:text-slate-700 transition-colors">
                <ThumbsUp className="w-3 h-3" />
                <span>Helpful ({rev.likes})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
