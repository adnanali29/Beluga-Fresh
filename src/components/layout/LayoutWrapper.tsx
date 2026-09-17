'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '../ecommerce/CartDrawer';
import { WishlistDrawer } from '../ecommerce/WishlistDrawer';
import { QuickViewModal } from '../ecommerce/QuickViewModal';
import { EnquiryModal } from '../ecommerce/EnquiryModal';
import { B2BExportModal } from '../ecommerce/B2BExportModal';
import { ToastNotification } from './ToastNotification';

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin') || pathname?.startsWith('/Admin');

  if (isAdmin) {
    return (
      <>
        <ToastNotification />
        <main className="flex-1 w-full min-h-screen h-screen overflow-hidden bg-stone-50">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <ToastNotification />
      <Header />
      <main className="flex-1 bg-stone-50/50">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <EnquiryModal />
      <B2BExportModal />
    </>
  );
};
