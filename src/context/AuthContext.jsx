import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const [addresses, setAddresses] = useState(authService.getSavedAddresses());
  const { showToast } = useToast();

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
    setAddresses(authService.getSavedAddresses());
  }, []);

  const login = async (email, password) => {
    const user = await authService.login(email, password);
    setCurrentUser(user);
    showToast(`Welcome back, ${user.name}!`, 'success');
    return user;
  };

  const register = async (userData) => {
    const user = await authService.register(userData);
    setCurrentUser(user);
    showToast(`Account created successfully!`, 'success');
    return user;
  };

  const logout = async () => {
    await authService.logout();
    setCurrentUser({ isLoggedIn: false });
    showToast('Logged out successfully', 'info');
  };

  const updateProfile = async (data) => {
    const updated = await authService.updateProfile(data);
    setCurrentUser(updated);
    showToast('Profile updated', 'success');
    return updated;
  };

  const saveAddress = async (address) => {
    const updatedList = await authService.saveAddress(address);
    setAddresses(updatedList);
    showToast('Address saved', 'success');
    return updatedList;
  };

  const deleteAddress = async (id) => {
    const updatedList = await authService.deleteAddress(id);
    setAddresses(updatedList);
    showToast('Address deleted', 'info');
    return updatedList;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn: currentUser?.isLoggedIn ?? false,
        addresses,
        login,
        register,
        logout,
        updateProfile,
        saveAddress,
        deleteAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
