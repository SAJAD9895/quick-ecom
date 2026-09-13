import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
      <span className="text-6xl font-extrabold text-brand-600 tracking-tight">404</span>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Page Not Found</h1>
      <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex gap-3 pt-2">
        <Button onClick={() => navigate(-1)} variant="outline" icon={ArrowLeft}>
          Go Back
        </Button>
        <Button onClick={() => navigate('/')} icon={Home}>
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};
