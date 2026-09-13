import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileNav } from '../components/layout/MobileNav';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};
