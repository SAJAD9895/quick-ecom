import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { productService } from '../../services/productService';
import { formatPrice } from '../../utils/formatters';

export const SearchBar = ({ className = '', placeholder = 'Search products, brands, categories...' }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length >= 2) {
        const results = await productService.queryProducts({ query: query.trim() });
        setSuggestions(results.slice(0, 5));
        setIsOpen(true);
      } else {
        setSuggestions([]);
        setIsOpen(false);
      }
    };
    const debounce = setTimeout(fetchSuggestions, 200);
    return () => clearTimeout(debounce);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectSuggestion = (slug) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/product/${slug}`);
  };

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-slate-900 placeholder-slate-400 text-sm font-medium rounded-xl pl-10 pr-10 py-2.5 border border-transparent focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all outline-none"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />

        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="absolute right-3 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-modal border border-slate-100 z-50 overflow-hidden animate-fade-in">
          {suggestions.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Matching Products
              </div>
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.slug)}
                  className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded-lg bg-slate-100 shrink-0"
                    />
                    <div className="truncate">
                      <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-brand-600 transition-colors">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {item.brand} • <span className="capitalize">{item.category}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 shrink-0 ml-3">
                    {formatPrice(item.price)}
                  </span>
                </button>
              ))}

              <button
                onClick={handleSearchSubmit}
                className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-brand-600 flex items-center justify-center gap-1.5 border-t border-slate-100 transition-colors"
              >
                <span>View all results for "{query}"</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="p-4 text-center text-xs text-slate-500">
              No matching products found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
