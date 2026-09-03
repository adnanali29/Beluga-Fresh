'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem, CurrencyCode, EnquiryFormData, B2BInquiry } from '../lib/types/ecommerce';
import { PRODUCTS, CURRENCIES } from '../lib/data/products';

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  activeCurrency: CurrencyCode;
  searchQuery: string;
  discountPercent: number;
  toastMessage: string | null;
  
  // Drawers & Modals
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  quickViewProduct: Product | null;
  isEnquiryOpen: boolean;
  isB2BOpen: boolean;
  confirmedEnquiryId: string | null;
  
  // Actions
  setSearchQuery: (query: string) => void;
  setCurrency: (code: CurrencyCode) => void;
  addToCart: (productId: string, quantity?: number) => void;
  updateCartQty: (productId: string, delta: number) => void;
  removeCartItem: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  applyCoupon: (code: string) => boolean;
  
  toggleCartDrawer: (open: boolean) => void;
  toggleWishlistDrawer: (open: boolean) => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
  submitEnquiry: (formData: EnquiryFormData) => void;
  openB2BModal: () => void;
  closeB2BModal: () => void;
  submitB2BInquiry: (inquiry: B2BInquiry) => void;
  formatPrice: (priceINR: number) => string;
  showToast: (message: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 2 },
    { product: PRODUCTS[4], quantity: 2 }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['beluga-spice-cardamom', 'beluga-coconut-pouch-500g']);
  const [activeCurrency, setActiveCurrencyState] = useState<CurrencyCode>('INR');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [isB2BOpen, setIsB2BOpen] = useState<boolean>(false);
  const [confirmedEnquiryId, setConfirmedEnquiryId] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const setCurrency = (code: CurrencyCode) => {
    setActiveCurrencyState(code);
    showToast(`Currency changed to ${code}`);
  };

  const formatPrice = (priceINR: number): string => {
    const config = CURRENCIES[activeCurrency] || CURRENCIES.INR;
    const val = (priceINR * config.rate).toLocaleString(undefined, {
      minimumFractionDigits: activeCurrency === 'INR' ? 0 : 2,
      maximumFractionDigits: 2
    });
    return `${config.symbol}${val}`;
  };

  const addToCart = (productId: string, quantity = 1) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prev => {
      const existing = prev.find(item => item.product.id === productId);
      if (existing) {
        return prev.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to enquiry list`);
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from enquiry list');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const applyCoupon = (code: string): boolean => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'KERALAFRESH' || formatted === 'BELUGA15') {
      setDiscountPercent(15);
      showToast('🎉 15% Heritage Discount Applied!');
      return true;
    } else {
      showToast('❌ Invalid code. Try "KERALAFRESH"');
      return false;
    }
  };

  const toggleCartDrawer = (open: boolean) => setIsCartOpen(open);
  const toggleWishlistDrawer = (open: boolean) => setIsWishlistOpen(open);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const openEnquiryModal = () => {
    setIsCartOpen(false);
    setConfirmedEnquiryId(null);
    setIsEnquiryOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryOpen(false);
    setConfirmedEnquiryId(null);
  };

  const submitEnquiry = () => {
    const randomID = Math.floor(100000 + Math.random() * 900000);
    setConfirmedEnquiryId(`#INQ-${randomID}`);
    setCart([]);
  };

  const openB2BModal = () => setIsB2BOpen(true);
  const closeB2BModal = () => setIsB2BOpen(false);

  const submitB2BInquiry = () => {
    showToast('✅ RFQ Submitted! Our export desk will email CIF quotes within 4 hours.');
    closeB2BModal();
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activeCurrency,
        searchQuery,
        discountPercent,
        toastMessage,
        isCartOpen,
        isWishlistOpen,
        quickViewProduct,
        isEnquiryOpen,
        isB2BOpen,
        confirmedEnquiryId,
        setSearchQuery,
        setCurrency,
        addToCart,
        updateCartQty,
        removeCartItem,
        toggleWishlist,
        applyCoupon,
        toggleCartDrawer,
        toggleWishlistDrawer,
        openQuickView,
        closeQuickView,
        openEnquiryModal,
        closeEnquiryModal,
        submitEnquiry,
        openB2BModal,
        closeB2BModal,
        submitB2BInquiry,
        formatPrice,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
