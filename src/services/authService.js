import { getStorageItem, setStorageItem, removeStorageItem } from '../utils/storage';

const USER_STORAGE_KEY = 'quick_ecom_user';
const ADDRESSES_STORAGE_KEY = 'quick_ecom_addresses';

const DEFAULT_USER = {
  id: 'usr-901',
  name: 'Alex Vance',
  email: 'alex.vance@example.com',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  isLoggedIn: true
};

const DEFAULT_ADDRESSES = [
  {
    id: 'addr-01',
    fullName: 'Alex Vance',
    phone: '+91 98765 43210',
    street: '402 Skyline Towers, MG Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560001',
    country: 'India',
    isDefault: true
  },
  {
    id: 'addr-02',
    fullName: 'Alex Vance (Office)',
    phone: '+91 98765 43210',
    street: 'Building 4B, Tech Park Campus, Outer Ring Rd',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560103',
    country: 'India',
    isDefault: false
  }
];

export const authService = {
  getCurrentUser: () => {
    return getStorageItem(USER_STORAGE_KEY, DEFAULT_USER);
  },

  login: (email, password) => {
    const user = {
      id: `usr-${Math.floor(100 + Math.random() * 900)}`,
      name: email.split('@')[0].replace('.', ' '),
      email,
      phone: '+91 98765 43210',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
    setStorageItem(USER_STORAGE_KEY, user);
    return Promise.resolve(user);
  },

  register: ({ name, email, phone, password }) => {
    const user = {
      id: `usr-${Math.floor(100 + Math.random() * 900)}`,
      name,
      email,
      phone,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
    setStorageItem(USER_STORAGE_KEY, user);
    return Promise.resolve(user);
  },

  logout: () => {
    const loggedOutUser = { isLoggedIn: false };
    setStorageItem(USER_STORAGE_KEY, loggedOutUser);
    return Promise.resolve(loggedOutUser);
  },

  updateProfile: (profileData) => {
    const currentUser = authService.getCurrentUser();
    const updated = { ...currentUser, ...profileData };
    setStorageItem(USER_STORAGE_KEY, updated);
    return Promise.resolve(updated);
  },

  getSavedAddresses: () => {
    return getStorageItem(ADDRESSES_STORAGE_KEY, DEFAULT_ADDRESSES);
  },

  saveAddress: (address) => {
    const addresses = authService.getSavedAddresses();
    let updated = [];
    if (address.id) {
      updated = addresses.map((a) => (a.id === address.id ? { ...a, ...address } : a));
    } else {
      const newAddr = {
        ...address,
        id: `addr-${Math.floor(10 + Math.random() * 90)}`,
        isDefault: addresses.length === 0 ? true : Boolean(address.isDefault)
      };
      if (newAddr.isDefault) {
        updated = addresses.map((a) => ({ ...a, isDefault: false }));
      }
      updated.push(newAddr);
    }
    setStorageItem(ADDRESSES_STORAGE_KEY, updated);
    return Promise.resolve(updated);
  },

  deleteAddress: (addressId) => {
    const addresses = authService.getSavedAddresses();
    const updated = addresses.filter((a) => a.id !== addressId);
    setStorageItem(ADDRESSES_STORAGE_KEY, updated);
    return Promise.resolve(updated);
  }
};
