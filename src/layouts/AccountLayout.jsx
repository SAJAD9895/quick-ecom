import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AccountSidebar } from '../components/account/AccountSidebar';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { useAuth } from '../context/AuthContext';

export const AccountLayout = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Account Dashboard' }]} className="mb-6" />
      
      <div className="flex flex-col lg:flex-row gap-8">
        <AccountSidebar className="w-full lg:w-64 shrink-0 h-fit" />
        <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
