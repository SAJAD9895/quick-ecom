import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context Providers
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AccountLayout } from './layouts/AccountLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CategoryProducts } from './pages/CategoryProducts';
import { SearchResults } from './pages/SearchResults';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Orders } from './pages/Orders';
import { OrderDetail } from './pages/OrderDetail';
import { Wishlist } from './pages/Wishlist';

// Account Pages
import { AccountProfile } from './pages/AccountProfile';
import { AccountAddresses } from './pages/AccountAddresses';
import { AccountSettings } from './pages/AccountSettings';

// Auth Pages
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <Routes>
                {/* Main App Layout */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="category/:category" element={<CategoryProducts />} />
                  <Route path="search" element={<SearchResults />} />
                  <Route path="product/:slug" element={<ProductDetail />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="order-success" element={<OrderSuccess />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orders/:id" element={<OrderDetail />} />
                  <Route path="wishlist" element={<Wishlist />} />

                  {/* Nested Account Dashboard Routes */}
                  <Route path="account" element={<AccountLayout />}>
                    <Route index element={<AccountProfile />} />
                    <Route path="profile" element={<AccountProfile />} />
                    <Route path="addresses" element={<AccountAddresses />} />
                    <Route path="settings" element={<AccountSettings />} />
                  </Route>
                </Route>

                {/* Auth Standalone Layout */}
                <Route element={<AuthLayout />}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>

                {/* 404 Fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
