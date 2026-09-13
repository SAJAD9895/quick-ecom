import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex items-center gap-1.5 text-xs text-slate-500 flex-wrap ${className}`} aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            {isLast || !item.url ? (
              <span className="font-medium text-slate-900 truncate max-w-[200px]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.url} className="hover:text-slate-900 transition-colors truncate max-w-[150px]">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
