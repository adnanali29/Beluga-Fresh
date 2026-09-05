'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '../../context/StoreContext';
import { Heart, Search, Menu, X, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const {
    wishlist,
    searchQuery,
    setSearchQuery,
    toggleWishlistDrawer,
    toggleCartDrawer
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/spices', label: 'Spices' },
    { href: '/veg-fruits', label: 'Vegetables and fruit' },
    { href: '/rubber', label: 'Rubber' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex items-center justify-between gap-6 h-20">
        
        {/* Left: Logo - Official Beluga Global Export Logo (Compact & Full Visible) */}
        <Link href="/" className="flex items-center select-none shrink-0 group py-1">
          <img
            src="/beluga-logo-official.png"
            alt="Beluga Global Export Logo"
            className="h-11 sm:h-12 lg:h-13 w-auto max-h-14 object-contain transition duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 my-auto">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#072655] bg-blue-50 font-black'
                    : 'text-stone-700 hover:text-[#072655] hover:bg-stone-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search + Wishlist + Header Shop Now Button */}
        <div className="flex items-center gap-3 my-auto">
          {/* Search Bar */}
          <div className="hidden md:flex relative w-52">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-stone-100/90 border border-stone-200 rounded-full py-2 pl-9 pr-7 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#072655] focus:bg-white transition"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <button
            onClick={() => toggleWishlistDrawer(true)}
            className="relative p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Header Shop Now Button */}
          <button
            onClick={() => toggleCartDrawer(true)}
            className="hidden sm:flex items-center gap-2 bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-md transition duration-200 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shop Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2.5 rounded-xl bg-stone-100 text-stone-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 shadow-xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold block ${
                pathname === link.href ? 'text-[#072655] bg-blue-50' : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
