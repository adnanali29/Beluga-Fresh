import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '../context/StoreContext';
import { LayoutWrapper } from '../components/layout/LayoutWrapper';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Beluga Fresh & Beluga Pure | Authentic Kerala Produce & Exports',
  description: 'Farm-fresh ready-to-cook Kerala vegetable mixes, single-estate spices, desiccated coconut, and export natural rubber RSS grades. Inquire now.',
  keywords: ['Kerala vegetables', 'Ready to cook Sadya', 'Idukki cardamom', 'Tellicherry black pepper', 'Natural Rubber RSS3', 'Desiccated coconut'],
  icons: {
    icon: [
      { url: '/beluga-logo-official.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/beluga-logo-official.png',
    apple: '/beluga-logo-official.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body className="bg-white text-stone-900 antialiased selection:bg-emerald-600 selection:text-white flex flex-col min-h-screen">
        <StoreProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
