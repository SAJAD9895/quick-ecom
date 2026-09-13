import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { useToast } from '../context/ToastContext';
import { Lock, Bell } from 'lucide-react';

export const AccountSettings = () => {
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const { showToast } = useToast();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (currentPass && newPass) {
      showToast('Password updated successfully', 'success');
      setCurrentPass('');
      setNewPass('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-slate-100">
        <h2 className="text-xl font-extrabold text-slate-900">Account Settings & Security</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          Manage security preferences and notification settings
        </p>
      </div>

      <div className="space-y-6 max-w-lg">
        {/* Password update form */}
        <form onSubmit={handlePasswordChange} className="space-y-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-brand-600" />
            <span>Change Password</span>
          </h3>

          <div>
            <label className="text-xs font-semibold text-slate-700">Current Password</label>
            <input
              type="password"
              required
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs rounded-xl p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">New Password</label>
            <input
              type="password"
              required
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs rounded-xl p-2.5 mt-1 focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <Button type="submit" size="sm">Update Password</Button>
        </form>

        {/* Notifications toggle */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-4 h-4 text-brand-600" />
            <span>Notification Preferences</span>
          </h3>

          <label className="flex items-center justify-between text-xs font-medium text-slate-700 cursor-pointer">
            <span>Email Order Status Updates</span>
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-brand-600 cursor-pointer" />
          </label>

          <label className="flex items-center justify-between text-xs font-medium text-slate-700 cursor-pointer">
            <span>Promotional Flash Sale Alerts</span>
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-brand-600 cursor-pointer" />
          </label>
        </div>
      </div>
    </div>
  );
};
