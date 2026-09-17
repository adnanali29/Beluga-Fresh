'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '../../context/StoreContext';
import {
  Product,
  HeroSlide,
  PromiseItem,
  CategoryCardItem,
  JourneyStep,
  TestimonialItem,
  FaqItem,
  PageBannerConfig,
  AboutPillar,
  AboutContent,
  ContactContent
} from '../../lib/types/ecommerce';
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  Sparkles,
  Home,
  Flame,
  Leaf,
  Factory,
  Info,
  Phone,
  ExternalLink,
  Upload,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  KeyRound
} from 'lucide-react';

export default function AdminPage() {
  const store = useStore();

  // AUTH STATE (ID: 1, Password: 1)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginId, setLoginId] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);

  // ACTIVE TAB
  const [activeTab, setActiveTab] = useState<
    'home' | 'spices' | 'veg-fruits' | 'rubber' | 'about' | 'contact' | 'security'
  >('home');

  // Check auth session on load
  useEffect(() => {
    const session = localStorage.getItem('beluga_admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const savedId = localStorage.getItem('beluga_admin_id') || '1';
    const savedPwd = localStorage.getItem('beluga_admin_pwd') || '1';

    if (loginId.trim() === savedId && loginPassword.trim() === savedPwd) {
      setIsAuthenticated(true);
      localStorage.setItem('beluga_admin_session', 'true');
      setAuthError(null);
      store.showToast('🔓 Admin login successful!');
    } else {
      setAuthError('Invalid Admin ID or Password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('beluga_admin_session');
    store.showToast('Logged out of Admin Console');
  };

  // IMAGE FILE UPLOAD HELPER
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          callback(reader.result);
          store.showToast('📸 Image uploaded successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // -------------------------------------------------------------
  // RENDER LIGHT THEME LOGIN SCREEN (NO HINTS)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-stone-100 via-blue-50/50 to-emerald-50/50 text-stone-900 select-none">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-[#072655] text-white font-black text-2xl flex items-center justify-center mx-auto shadow-xl">
              BF
            </div>
            <h1 className="text-2xl font-black text-stone-900 tracking-tight pt-2">
              Beluga Admin Portal
            </h1>
            <p className="text-xs text-stone-500 font-medium">
              Enter your credentials to access the storefront dashboard
            </p>
          </div>

          {authError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-xl flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-700 font-extrabold mb-1">
                Admin User ID
              </label>
              <input
                type="text"
                required
                value={loginId}
                onChange={e => setLoginId(e.target.value)}
                placeholder="User ID"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3.5 text-stone-900 outline-none focus:border-[#072655] focus:bg-white font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-extrabold mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3.5 text-stone-900 outline-none focus:border-[#072655] focus:bg-white font-mono text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#072655] hover:bg-[#0b3574] text-white font-bold py-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Login to Dashboard</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // FULL-PAGE WHITE THEME ENTERPRISE ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row bg-stone-100 text-stone-900 font-sans overflow-hidden select-none">
      
      {/* LEFT SIDEBAR NAVIGATION (WHITE THEME) */}
      <aside className="w-full lg:w-72 bg-white border-r border-stone-200 flex flex-col justify-between shrink-0 shadow-sm">
        
        {/* Brand Header */}
        <div>
          <div className="p-6 border-b border-stone-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#072655] text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
              BF
            </div>
            <div>
              <h2 className="font-black text-stone-900 text-base tracking-tight leading-tight">
                BELUGA ADMIN
              </h2>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                Storefront Console
              </span>
            </div>
          </div>

          {/* Nav Links List */}
          <nav className="p-4 space-y-1.5 text-xs font-bold">
            {[
              { key: 'home', label: 'Home Page Control', icon: Home, count: store.heroSlides.length },
              { key: 'spices', label: 'Spices Catalog', icon: Flame, count: store.products.filter(p => p.navCategory === 'spices').length },
              { key: 'veg-fruits', label: 'Veg & Fruits Catalog', icon: Leaf, count: store.products.filter(p => p.navCategory === 'veg-fruits').length },
              { key: 'rubber', label: 'Natural Rubber Catalog', icon: Factory, count: store.products.filter(p => p.navCategory === 'rubber').length },
              { key: 'about', label: 'About Page', icon: Info, count: store.aboutContent.pillars.length },
              { key: 'contact', label: 'Contact Desk Details', icon: Phone, count: 1 },
              { key: 'security', label: 'Security & Access', icon: ShieldCheck, count: '🔒' }
            ].map(item => {
              const IconComp = item.icon;
              const active = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key as any)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition cursor-pointer ${
                    active
                      ? 'bg-[#072655] text-white shadow-md font-extrabold'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-[#072655]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-4 h-4 ${active ? 'text-amber-400' : 'text-stone-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${active ? 'bg-amber-400 text-stone-950' : 'bg-stone-100 text-stone-600'}`}>
                    {item.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Quick Actions */}
        <div className="p-4 border-t border-stone-200 space-y-2 bg-stone-50">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Storefront Sync Active</span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="w-full bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Live Website</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={store.resetAllContent}
              className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-[11px] py-2 rounded-lg flex items-center justify-center gap-1 border border-amber-200 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] py-2 rounded-lg flex items-center justify-center gap-1 border border-rose-200 cursor-pointer"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>

      </aside>

      {/* RIGHT MAIN CONTENT AREA (WHITE THEME) */}
      <main className="flex-1 h-screen overflow-y-auto bg-stone-50/70 p-6 lg:p-10 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#072655] text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Admin Management</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight capitalize">
              {activeTab === 'home'
                ? 'Home Page Control'
                : activeTab === 'spices'
                ? 'Spices Catalog'
                : activeTab === 'veg-fruits'
                ? 'Vegetables & Fruits Catalog'
                : activeTab === 'rubber'
                ? 'Natural Rubber Catalog'
                : activeTab === 'about'
                ? 'About Page Content'
                : activeTab === 'contact'
                ? 'Contact Information'
                : 'Security & Access Control'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 bg-white border border-stone-200 px-3 py-1.5 rounded-xl shadow-2xs font-semibold">
              Realtime LocalStorage Sync
            </span>
          </div>
        </div>

        {/* TAB 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div className="space-y-10">
            <HomeHeroSlidesSection handleFileUpload={handleFileUpload} />
            <HomePromiseSection />
            <HomeCategorySection handleFileUpload={handleFileUpload} />
            <HomeJourneySection />
            <HomeTestimonialFaqSection />
          </div>
        )}

        {/* TAB 2: SPICES */}
        {activeTab === 'spices' && (
          <div className="space-y-10">
            <PageBannerEditor
              pageKey="spices"
              pageTitle="Spices Category"
              recommendedSize="1920 x 600 px (Aspect Ratio 16:5)"
              handleFileUpload={handleFileUpload}
            />
            <ProductCategoryEditor
              category="spices"
              categoryTitle="Spices Catalog"
              handleFileUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 3: VEG & FRUITS */}
        {activeTab === 'veg-fruits' && (
          <div className="space-y-10">
            <PageBannerEditor
              pageKey="veg-fruits"
              pageTitle="Vegetables & Fruits Category"
              recommendedSize="1920 x 600 px (Aspect Ratio 16:5)"
              handleFileUpload={handleFileUpload}
            />
            <ProductCategoryEditor
              category="veg-fruits"
              categoryTitle="Vegetables & Fruits Catalog"
              handleFileUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 4: RUBBER */}
        {activeTab === 'rubber' && (
          <div className="space-y-10">
            <PageBannerEditor
              pageKey="rubber"
              pageTitle="Natural Rubber Category"
              recommendedSize="1920 x 600 px (Aspect Ratio 16:5)"
              handleFileUpload={handleFileUpload}
            />
            <ProductCategoryEditor
              category="rubber"
              categoryTitle="Natural Rubber Catalog"
              handleFileUpload={handleFileUpload}
            />
          </div>
        )}

        {/* TAB 5: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-10">
            <PageBannerEditor
              pageKey="about"
              pageTitle="About Page Banner"
              recommendedSize="1920 x 600 px (Aspect Ratio 16:5)"
              handleFileUpload={handleFileUpload}
            />
            <AboutPageContentEditor />
          </div>
        )}

        {/* TAB 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-10">
            <PageBannerEditor
              pageKey="contact"
              pageTitle="Contact Page Banner"
              recommendedSize="1920 x 600 px (Aspect Ratio 16:5)"
              handleFileUpload={handleFileUpload}
            />
            <ContactDetailsEditor />
          </div>
        )}

        {/* TAB 7: SECURITY */}
        {activeTab === 'security' && (
          <div className="space-y-10">
            <SecuritySettingsSection />
          </div>
        )}

      </main>

    </div>
  );
}

// =====================================================================
// SUB-COMPONENTS FOR ADMIN SECTIONS (WHITE THEME)
// =====================================================================

// 1. Home Hero Slides Editor
function HomeHeroSlidesSection({
  handleFileUpload
}: {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, cb: (url: string) => void) => void;
}) {
  const store = useStore();
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [form, setForm] = useState<HeroSlide>({
    id: '',
    tag: '',
    title: '',
    description: '',
    image: '',
    ctaText: 'SHOP NOW',
    ctaLink: '/spices'
  });

  const startAdd = () => {
    setForm({
      id: `hero-${Date.now()}`,
      tag: 'NEW KERALA HARVEST',
      title: 'Fresh Farm Produce',
      description: 'Handpicked fresh items delivered straight from Kerala estates.',
      image: '/hero-banner-1920x910.jpg',
      ctaText: 'SHOP NOW',
      ctaLink: '/spices'
    });
    setIsAdding(true);
    setEditingSlide(null);
  };

  const startEdit = (slide: HeroSlide) => {
    setForm(slide);
    setEditingSlide(slide);
    setIsAdding(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      store.addHeroSlide(form);
      setIsAdding(false);
    } else if (editingSlide) {
      store.updateHeroSlide(form);
      setEditingSlide(null);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-stone-900">1. Home Page Hero Banner Slides</h2>
          <p className="text-xs text-stone-500">Manage hero slider images, tags, titles, and call-to-actions.</p>
        </div>
        <button
          onClick={startAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Hero Slide</span>
        </button>
      </div>

      {(isAdding || editingSlide) && (
        <form onSubmit={handleSave} className="bg-stone-50 p-6 rounded-2xl border border-blue-200 space-y-4 text-xs">
          <h3 className="font-black text-stone-900 text-sm">
            {isAdding ? '➕ Add New Hero Slide' : '✏️ Edit Hero Slide'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Small Category Tag</label>
              <input
                required
                value={form.tag}
                onChange={e => setForm({ ...form, tag: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Main Headline Title</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Subtitle / Description</label>
            <textarea
              rows={2}
              required
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-stone-700 font-bold">Hero Image URL</label>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
                📸 Reference Size: 1920 x 910 px (Aspect Ratio 16:9)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                required
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                placeholder="Image URL (e.g., /hero-banner-1920x910.jpg)"
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none text-xs"
              />

              <label className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition">
                <Upload className="w-4 h-4" />
                <span>Upload File</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => handleFileUpload(e, url => setForm({ ...form, image: url }))}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">CTA Button Text</label>
              <input
                required
                value={form.ctaText}
                onChange={e => setForm({ ...form, ctaText: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">CTA Target Link</label>
              <input
                required
                value={form.ctaLink}
                onChange={e => setForm({ ...form, ctaLink: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Hero Slide</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingSlide(null);
              }}
              className="bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {store.heroSlides.map(slide => (
          <div key={slide.id} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="relative h-32 w-full rounded-xl overflow-hidden bg-stone-900">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/70 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                  1920 x 910 px
                </span>
              </div>
              <span className="text-[10px] font-black text-amber-600 block uppercase">{slide.tag}</span>
              <h4 className="font-black text-stone-900 text-sm">{slide.title}</h4>
              <p className="text-stone-500 text-xs line-clamp-2">{slide.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                onClick={() => startEdit(slide)}
                className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => store.deleteHeroSlide(slide.id)}
                className="text-rose-600 hover:text-rose-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. The Beluga Promise Section Editor
function HomePromiseSection() {
  const store = useStore();
  const [editingItem, setEditingItem] = useState<PromiseItem | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [form, setForm] = useState<PromiseItem>({
    id: '',
    iconName: 'ShieldCheck',
    title: '',
    description: ''
  });

  const startAdd = () => {
    setForm({
      id: `promise-${Date.now()}`,
      iconName: 'ShieldCheck',
      title: 'New Promise Feature',
      description: 'Feature description details here.'
    });
    setIsAdding(true);
    setEditingItem(null);
  };

  const startEdit = (item: PromiseItem) => {
    setForm(item);
    setEditingItem(item);
    setIsAdding(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      store.addPromiseItem(form);
      setIsAdding(false);
    } else if (editingItem) {
      store.updatePromiseItem(form);
      setEditingItem(null);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-stone-900">2. The Beluga Promise Content</h2>
          <p className="text-xs text-stone-500">Add, edit, or remove promise features on the home page.</p>
        </div>
        <button
          onClick={startAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Promise Item</span>
        </button>
      </div>

      {(isAdding || editingItem) && (
        <form onSubmit={handleSave} className="bg-stone-50 p-6 rounded-2xl border border-blue-200 space-y-4 text-xs">
          <h3 className="font-black text-stone-900 text-sm">
            {isAdding ? '➕ Add Promise Item' : '✏️ Edit Promise Item'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Feature Title</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Icon Style</label>
              <select
                value={form.iconName}
                onChange={e => setForm({ ...form, iconName: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              >
                <option value="ShieldCheck">ShieldCheck (Purity / Security)</option>
                <option value="HeartHandshake">HeartHandshake (Fair Trade)</option>
                <option value="Globe2">Globe2 (Global Export)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Description</label>
            <textarea
              rows={2}
              required
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Promise Feature</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingItem(null);
              }}
              className="bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {store.promiseItems.map(item => (
          <div key={item.id} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mb-2">
                Icon: {item.iconName}
              </span>
              <h4 className="font-black text-stone-900 text-sm">{item.title}</h4>
              <p className="text-stone-500 text-xs mt-1">{item.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                onClick={() => startEdit(item)}
                className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => store.deletePromiseItem(item.id)}
                className="text-rose-600 hover:text-rose-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Category Showcase Editor
function HomeCategorySection({
  handleFileUpload
}: {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, cb: (url: string) => void) => void;
}) {
  const store = useStore();
  const [editingCard, setEditingCard] = useState<CategoryCardItem | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [form, setForm] = useState<CategoryCardItem>({
    id: '',
    href: '/spices',
    brandTag: 'Beluga Pure Spices',
    title: '',
    badge: '4 Items',
    image: '',
    description: '',
    cta: 'View Catalog'
  });

  const startAdd = () => {
    setForm({
      id: `cat-${Date.now()}`,
      href: '/spices',
      brandTag: 'Beluga Fresh',
      title: 'New Category',
      badge: 'Available',
      image: '/category_spices.jpg',
      description: 'Explore natural produce items from Kerala estates.',
      cta: 'Explore Category'
    });
    setIsAdding(true);
    setEditingCard(null);
  };

  const startEdit = (card: CategoryCardItem) => {
    setForm(card);
    setEditingCard(card);
    setIsAdding(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      store.addCategoryCard(form);
      setIsAdding(false);
    } else if (editingCard) {
      store.updateCategoryCard(form);
      setEditingCard(null);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-stone-900">3. Beluga Product Ranges (Category Showcase)</h2>
          <p className="text-xs text-stone-500">Add, edit, or delete the main homepage category showcase cards.</p>
        </div>
        <button
          onClick={startAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Category Card</span>
        </button>
      </div>

      {(isAdding || editingCard) && (
        <form onSubmit={handleSave} className="bg-stone-50 p-6 rounded-2xl border border-blue-200 space-y-4 text-xs">
          <h3 className="font-black text-stone-900 text-sm">
            {isAdding ? '➕ Add Category Card' : '✏️ Edit Category Card'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Category Title</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Brand Tag</label>
              <input
                required
                value={form.brandTag}
                onChange={e => setForm({ ...form, brandTag: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Page Link URL</label>
              <input
                required
                value={form.href}
                onChange={e => setForm({ ...form, href: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-stone-700 font-bold">Category Banner Image URL</label>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
                📸 Reference Size: 800 x 600 px (Aspect Ratio 4:3)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                required
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                placeholder="Image URL (e.g. /category_spices.jpg)"
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none text-xs"
              />

              <label className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition">
                <Upload className="w-4 h-4" />
                <span>Upload File</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => handleFileUpload(e, url => setForm({ ...form, image: url }))}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Description</label>
            <textarea
              rows={2}
              required
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Badge Text</label>
              <input
                required
                value={form.badge}
                onChange={e => setForm({ ...form, badge: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">CTA Button Text</label>
              <input
                required
                value={form.cta}
                onChange={e => setForm({ ...form, cta: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Category Card</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingCard(null);
              }}
              className="bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {store.categoryCards.map(card => (
          <div key={card.id} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="relative h-32 w-full rounded-xl overflow-hidden bg-stone-900">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/70 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                  800 x 600 px
                </span>
              </div>
              <span className="text-[10px] font-extrabold text-[#072655] block">{card.brandTag}</span>
              <h4 className="font-black text-stone-900 text-sm">{card.title}</h4>
              <p className="text-stone-500 text-xs line-clamp-2">{card.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                onClick={() => startEdit(card)}
                className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => store.deleteCategoryCard(card.id)}
                className="text-rose-600 hover:text-rose-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Farm-to-Table Journey Editor
function HomeJourneySection() {
  const store = useStore();
  const [editingStep, setEditingStep] = useState<JourneyStep | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [form, setForm] = useState<JourneyStep>({
    id: '',
    step: '05',
    title: '',
    description: '',
    iconName: 'Sprout'
  });

  const startAdd = () => {
    const nextNum = (store.journeySteps.length + 1).toString().padStart(2, '0');
    setForm({
      id: `journey-${Date.now()}`,
      step: nextNum,
      title: 'New Journey Step',
      description: 'Description of harvest or quality processing step.',
      iconName: 'Sprout'
    });
    setIsAdding(true);
    setEditingStep(null);
  };

  const startEdit = (step: JourneyStep) => {
    setForm(step);
    setEditingStep(step);
    setIsAdding(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      store.addJourneyStep(form);
      setIsAdding(false);
    } else if (editingStep) {
      store.updateJourneyStep(form);
      setEditingStep(null);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-stone-900">4. Our Farm-To-Table Journey</h2>
          <p className="text-xs text-stone-500">Add, edit, or delete sourcing process timeline steps.</p>
        </div>
        <button
          onClick={startAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Journey Step</span>
        </button>
      </div>

      {(isAdding || editingStep) && (
        <form onSubmit={handleSave} className="bg-stone-50 p-6 rounded-2xl border border-blue-200 space-y-4 text-xs">
          <h3 className="font-black text-stone-900 text-sm">
            {isAdding ? '➕ Add Journey Step' : '✏️ Edit Journey Step'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Step Number (e.g. 01, 02)</label>
              <input
                required
                value={form.step}
                onChange={e => setForm({ ...form, step: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Step Title</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Icon Style</label>
              <select
                value={form.iconName}
                onChange={e => setForm({ ...form, iconName: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              >
                <option value="Sprout">Sprout (Harvest)</option>
                <option value="ShieldCheck">ShieldCheck (Clean Cuts)</option>
                <option value="Snowflake">Snowflake (Cold-Chain)</option>
                <option value="PlaneTakeoff">PlaneTakeoff (Shipping)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Step Description</label>
            <textarea
              rows={2}
              required
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Step</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingStep(null);
              }}
              className="bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {store.journeySteps.map(step => (
          <div key={step.id} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-black bg-blue-100 text-[#072655] px-2 py-0.5 rounded-full block w-max mb-1">
                STEP {step.step}
              </span>
              <h4 className="font-black text-stone-900 text-sm">{step.title}</h4>
              <p className="text-stone-500 text-xs mt-1 leading-relaxed">{step.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                onClick={() => startEdit(step)}
                className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => store.deleteJourneyStep(step.id)}
                className="text-rose-600 hover:text-rose-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Testimonials & FAQ Editor
function HomeTestimonialFaqSection() {
  const store = useStore();

  const [isAddTest, setIsAddTest] = useState(false);
  const [editTest, setEditTest] = useState<TestimonialItem | null>(null);
  const [testForm, setTestForm] = useState<TestimonialItem>({
    id: '',
    name: '',
    role: '',
    location: '',
    text: '',
    rating: 5,
    badge: 'Verified Buyer'
  });

  const [isAddFaq, setIsAddFaq] = useState(false);
  const [editFaq, setEditFaq] = useState<FaqItem | null>(null);
  const [faqForm, setFaqForm] = useState<FaqItem>({
    id: '',
    question: '',
    answer: ''
  });

  const handleSaveTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddTest) {
      store.addTestimonial(testForm);
      setIsAddTest(false);
    } else if (editTest) {
      store.updateTestimonial(testForm);
      setEditTest(null);
    }
  };

  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddFaq) {
      store.addFaqItem(faqForm);
      setIsAddFaq(false);
    } else if (editFaq) {
      store.updateFaqItem(faqForm);
      setEditFaq(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Testimonials Column */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-xl font-black text-stone-900">Testimonials</h2>
            <p className="text-xs text-stone-500">Manage client and buyer reviews.</p>
          </div>
          <button
            onClick={() => {
              setTestForm({
                id: `test-${Date.now()}`,
                name: 'New Client',
                role: 'Executive Chef',
                location: 'Kochi',
                text: 'Great quality products!',
                rating: 5,
                badge: 'Verified'
              });
              setIsAddTest(true);
              setEditTest(null);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Review</span>
          </button>
        </div>

        {(isAddTest || editTest) && (
          <form onSubmit={handleSaveTest} className="bg-stone-50 p-4 rounded-2xl border border-blue-200 space-y-3 text-xs">
            <h4 className="font-bold text-stone-900">{isAddTest ? 'Add Review' : 'Edit Review'}</h4>
            <div className="grid grid-cols-2 gap-2">
              <input
                required
                placeholder="Client Name"
                value={testForm.name}
                onChange={e => setTestForm({ ...testForm, name: e.target.value })}
                className="bg-white border p-2 rounded-lg"
              />
              <input
                required
                placeholder="Role / Title"
                value={testForm.role}
                onChange={e => setTestForm({ ...testForm, role: e.target.value })}
                className="bg-white border p-2 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                required
                placeholder="Location"
                value={testForm.location}
                onChange={e => setTestForm({ ...testForm, location: e.target.value })}
                className="bg-white border p-2 rounded-lg"
              />
              <input
                required
                placeholder="Badge Text"
                value={testForm.badge}
                onChange={e => setTestForm({ ...testForm, badge: e.target.value })}
                className="bg-white border p-2 rounded-lg"
              />
            </div>
            <textarea
              required
              rows={2}
              placeholder="Review quote text"
              value={testForm.text}
              onChange={e => setTestForm({ ...testForm, text: e.target.value })}
              className="w-full bg-white border p-2 rounded-lg"
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-[#072655] text-white font-bold px-4 py-2 rounded-lg cursor-pointer">
                Save Review
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddTest(false);
                  setEditTest(null);
                }}
                className="bg-stone-200 px-3 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {store.testimonials.map(t => (
            <div key={t.id} className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-stone-900">{t.name} <span className="font-normal text-stone-500">({t.location})</span></p>
                <p className="text-stone-600 text-[11px] line-clamp-1 italic">"{t.text}"</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => {
                    setTestForm(t);
                    setEditTest(t);
                    setIsAddTest(false);
                  }}
                  className="text-blue-700 font-bold hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => store.deleteTestimonial(t.id)} className="text-rose-600 font-bold hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Column */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-xl font-black text-stone-900">FAQ Accordion Items</h2>
            <p className="text-xs text-stone-500">Manage questions and answers.</p>
          </div>
          <button
            onClick={() => {
              setFaqForm({
                id: `faq-${Date.now()}`,
                question: 'New Question?',
                answer: 'Answer detail here.'
              });
              setIsAddFaq(true);
              setEditFaq(null);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add FAQ</span>
          </button>
        </div>

        {(isAddFaq || editFaq) && (
          <form onSubmit={handleSaveFaq} className="bg-stone-50 p-4 rounded-2xl border border-blue-200 space-y-3 text-xs">
            <h4 className="font-bold text-stone-900">{isAddFaq ? 'Add FAQ' : 'Edit FAQ'}</h4>
            <input
              required
              placeholder="Question"
              value={faqForm.question}
              onChange={e => setFaqForm({ ...faqForm, question: e.target.value })}
              className="w-full bg-white border p-2 rounded-lg font-bold"
            />
            <textarea
              required
              rows={3}
              placeholder="Answer detail"
              value={faqForm.answer}
              onChange={e => setFaqForm({ ...faqForm, answer: e.target.value })}
              className="w-full bg-white border p-2 rounded-lg"
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-[#072655] text-white font-bold px-4 py-2 rounded-lg cursor-pointer">
                Save FAQ
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddFaq(false);
                  setEditFaq(null);
                }}
                className="bg-stone-200 px-3 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {store.faqs.map(f => (
            <div key={f.id} className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-stone-900">{f.question}</p>
                <p className="text-stone-600 text-[11px] line-clamp-1">{f.answer}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => {
                    setFaqForm(f);
                    setEditFaq(f);
                    setIsAddFaq(false);
                  }}
                  className="text-blue-700 font-bold hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => store.deleteFaqItem(f.id)} className="text-rose-600 font-bold hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Page Banner Editor Component (Reused across Spices, Veg, Rubber, About, Contact)
function PageBannerEditor({
  pageKey,
  pageTitle,
  recommendedSize,
  handleFileUpload
}: {
  pageKey: string;
  pageTitle: string;
  recommendedSize: string;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, cb: (url: string) => void) => void;
}) {
  const store = useStore();
  const current = store.pageBanners[pageKey] || {
    categoryTag: 'BELUGA CATALOG',
    subTag: 'KERALA PRODUCE',
    title: pageTitle,
    description: 'Fresh quality products directly from Kerala estates.',
    heroImage: '/category_spices.jpg'
  };

  const [form, setForm] = useState<PageBannerConfig>(current);

  useEffect(() => {
    if (store.pageBanners[pageKey]) {
      setForm(store.pageBanners[pageKey]);
    }
  }, [store.pageBanners, pageKey]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    store.updatePageBanner(pageKey, form);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-4 shadow-sm">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-xl font-black text-stone-900">{pageTitle} Hero Banner</h2>
        <p className="text-xs text-stone-500">Edit page title, sub-tags, description and hero banner background image.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-stone-700 font-bold mb-1">Title</label>
            <input
              required
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">Category Tag</label>
            <input
              value={form.categoryTag}
              onChange={e => setForm({ ...form, categoryTag: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">Sub Tag</label>
            <input
              value={form.subTag}
              onChange={e => setForm({ ...form, subTag: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-bold mb-1">Description</label>
          <textarea
            rows={2}
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-stone-700 font-bold">Hero Banner Image URL</label>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
              📸 Reference Size: {recommendedSize}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input
              required
              value={form.heroImage}
              onChange={e => setForm({ ...form, heroImage: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none text-xs"
            />

            <label className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0 transition">
              <Upload className="w-4 h-4" />
              <span>Upload File</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => handleFileUpload(e, url => setForm({ ...form, heroImage: url }))}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Save className="w-4 h-4" />
          <span>Save Banner Settings</span>
        </button>
      </form>
    </div>
  );
}

// Product Catalog Category Editor (Add, Edit, Delete products with Image Size Hints)
function ProductCategoryEditor({
  category,
  categoryTitle,
  handleFileUpload
}: {
  category: 'spices' | 'veg-fruits' | 'rubber';
  categoryTitle: string;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, cb: (url: string) => void) => void;
}) {
  const store = useStore();
  const products = store.products.filter(p => p.navCategory === category);

  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form, setForm] = useState<Product>({
    id: '',
    name: '',
    navCategory: category,
    subCategory: category === 'spices' ? 'Whole Spices' : category === 'rubber' ? 'Export Grade Rubber' : 'Ready-to-Cook Mixes',
    tagline: '',
    brand: category === 'spices' ? 'BELUGA PURE' : category === 'rubber' ? 'BELUGA INDUSTRIAL' : 'BELUGA FRESH',
    priceINR: 100,
    rating: 5.0,
    reviewsCount: 10,
    weight: '100g',
    badge: 'Fresh Harvest',
    description: '',
    imageType: 'custom',
    images: ['/products/Cardamom.webp'],
    origin: 'Kerala, India',
    shelfLife: '12 Months'
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const startAdd = () => {
    setForm({
      id: `beluga-${category}-${Date.now()}`,
      name: 'New Product',
      navCategory: category,
      subCategory: category === 'spices' ? 'Whole Spices' : category === 'rubber' ? 'Export Grade Rubber' : 'Ready-to-Cook Mixes',
      tagline: '100% Pure & Organic Kerala Harvest',
      brand: category === 'spices' ? 'BELUGA PURE' : category === 'rubber' ? 'BELUGA INDUSTRIAL' : 'BELUGA FRESH',
      priceINR: 150,
      rating: 5.0,
      reviewsCount: 25,
      weight: '100g',
      badge: 'Single Origin',
      description: 'Handpicked directly from Kerala estates.',
      imageType: 'custom',
      images: ['/products/Cardamom.webp'],
      origin: 'Kerala, India',
      shelfLife: '12 Months'
    });
    setIsAdding(true);
    setEditingProduct(null);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const startEdit = (p: Product) => {
    setForm({
      ...p,
      images: p.images && p.images.length > 0 ? p.images : ['/products/Cardamom.webp']
    });
    setEditingProduct(p);
    setIsAdding(false);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      store.addProduct(form);
      setIsAdding(false);
    } else if (editingProduct) {
      store.updateProduct(form);
      setEditingProduct(null);
    }
  };

  return (
    <div ref={containerRef} className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-stone-900">{categoryTitle} Products</h2>
          <p className="text-xs text-stone-500">Add, edit, or delete items in this product category.</p>
        </div>
        <button
          onClick={startAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {(isAdding || editingProduct) && (
        <form onSubmit={handleSave} className="bg-stone-50 p-6 rounded-2xl border border-blue-200 space-y-4 text-xs">
          <h3 className="font-black text-stone-900 text-sm">
            {isAdding ? '➕ Add New Product Card' : '✏️ Edit Product Card'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Product Name</label>
              <input
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Price (INR ₹)</label>
              <input
                type="number"
                required
                value={form.priceINR}
                onChange={e => setForm({ ...form, priceINR: Number(e.target.value) })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Weight / Pack Size</label>
              <input
                required
                value={form.weight}
                onChange={e => setForm({ ...form, weight: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Tagline</label>
              <input
                required
                value={form.tagline}
                onChange={e => setForm({ ...form, tagline: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Badge</label>
              <input
                required
                value={form.badge}
                onChange={e => setForm({ ...form, badge: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Sub-Category</label>
              <input
                required
                value={form.subCategory}
                onChange={e => setForm({ ...form, subCategory: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Description</label>
            <textarea
              rows={3}
              required
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>

          {/* Multi-Image Manager */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <label className="block text-stone-700 font-bold">Product Card Images ({form.images.length})</label>
                <p className="text-[11px] text-stone-500">Add multiple images to showcase carousel slides in product cards.</p>
              </div>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
                📸 Reference Size: 600 x 600 px (1:1 Square)
              </span>
            </div>

            <div className="space-y-3 bg-white p-4 rounded-xl border border-stone-200">
              {form.images.map((imgUrl, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-stone-200 border border-stone-300">
                    <Image
                      src={imgUrl || '/products/Cardamom.webp'}
                      alt={`Product image ${idx + 1}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // fallback
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] font-bold text-stone-500 mb-0.5">
                      Image Slot #{idx + 1} {idx === 0 ? '(Primary / Cover)' : ''}
                    </span>
                    <input
                      required
                      value={imgUrl}
                      onChange={e => {
                        const next = [...form.images];
                        next[idx] = e.target.value;
                        setForm({ ...form, images: next });
                      }}
                      placeholder={`Product Image ${idx + 1} URL or upload file`}
                      className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-900 outline-none text-xs font-mono"
                    />
                  </div>
                  <label className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold text-xs px-3 py-2.5 rounded-xl flex items-center gap-1 cursor-pointer shrink-0 transition">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => handleFileUpload(e, url => {
                        const next = [...form.images];
                        next[idx] = url;
                        setForm({ ...form, images: next });
                      })}
                    />
                  </label>
                  {form.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const next = form.images.filter((_, i) => i !== idx);
                        setForm({ ...form, images: next.length > 0 ? next : [''] });
                      }}
                      className="text-rose-600 hover:text-rose-800 hover:bg-rose-50 p-2 rounded-lg transition cursor-pointer"
                      title="Delete Image Slot"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={() => setForm({ ...form, images: [...form.images, ''] })}
                className="w-full py-2.5 border-2 border-dashed border-stone-300 hover:border-[#072655] text-[#072655] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer bg-white"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Image Slot</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Origin Location</label>
              <input
                value={form.origin}
                onChange={e => setForm({ ...form, origin: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Shelf Life</label>
              <input
                value={form.shelfLife}
                onChange={e => setForm({ ...form, shelfLife: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Product</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingProduct(null);
              }}
              className="bg-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(prod => (
          <div key={prod.id} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="relative h-36 w-full rounded-xl overflow-hidden bg-stone-900">
                <Image src={prod.images[0] || '/products/Cardamom.webp'} alt={prod.name} fill className="object-cover" />
                <span className="absolute top-2 left-2 bg-[#072655] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                  {prod.images.length} {prod.images.length === 1 ? 'Image' : 'Images'}
                </span>
                <span className="absolute bottom-1 right-1 bg-black/70 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                  600 x 600 px
                </span>
              </div>
              {/* Image Thumbnails strip */}
              {prod.images.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {prod.images.map((img, i) => (
                    <div key={i} className="relative w-8 h-8 rounded border border-stone-300 overflow-hidden shrink-0 bg-stone-200">
                      <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#072655] bg-blue-100 px-2 py-0.5 rounded-full">
                  {prod.badge}
                </span>
                <span className="font-black text-stone-900 text-sm">₹{prod.priceINR}</span>
              </div>
              <h4 className="font-black text-stone-900 text-sm">{prod.name}</h4>
              <p className="text-stone-500 text-xs line-clamp-2">{prod.tagline}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                onClick={() => startEdit(prod)}
                className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => store.deleteProduct(prod.id)}
                className="text-rose-600 hover:text-rose-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// About Page Content Editor
function AboutPageContentEditor() {
  const store = useStore();
  const [content, setContent] = useState<AboutContent>(store.aboutContent);

  useEffect(() => {
    setContent(store.aboutContent);
  }, [store.aboutContent]);

  const [newPillar, setNewPillar] = useState<AboutPillar>({
    id: '',
    icon: '🌱',
    title: '',
    description: ''
  });
  const [isAddingPillar, setIsAddingPillar] = useState(false);

  const handleSaveGuarantee = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateAboutContent(content);
  };

  const handleAddPillarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.addAboutPillar({
      ...newPillar,
      id: `pillar-${Date.now()}`
    });
    setIsAddingPillar(false);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-xl font-black text-stone-900">About Page Pillars &amp; Quality Guarantee</h2>
        <p className="text-xs text-stone-500">Edit core pillars and warranty guarantee quote box.</p>
      </div>

      <form onSubmit={handleSaveGuarantee} className="space-y-4 text-xs">
        {/* Mission & Vision Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
          <div className="space-y-3">
            <h4 className="font-black text-[#072655] text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯 Mission Settings</span>
            </h4>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Mission Badge Title</label>
              <input
                value={content.missionTitle || 'Our Mission'}
                onChange={e => setContent({ ...content, missionTitle: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Mission Statement</label>
              <textarea
                rows={3}
                value={content.missionText || ''}
                onChange={e => setContent({ ...content, missionText: e.target.value })}
                placeholder="Enter company mission statement..."
                className="w-full bg-white border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-black text-emerald-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span>💡 Vision Settings</span>
            </h4>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Vision Badge Title</label>
              <input
                value={content.visionTitle || 'Our Vision'}
                onChange={e => setContent({ ...content, visionTitle: e.target.value })}
                className="w-full bg-white border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Vision Statement</label>
              <textarea
                rows={3}
                value={content.visionText || ''}
                onChange={e => setContent({ ...content, visionText: e.target.value })}
                placeholder="Enter company vision statement..."
                className="w-full bg-white border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-bold mb-1">Guarantee Box Title</label>
          <input
            value={content.guaranteeTitle}
            onChange={e => setContent({ ...content, guaranteeTitle: e.target.value })}
            className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-bold mb-1">Guarantee Box Text</label>
          <textarea
            rows={3}
            value={content.guaranteeText}
            onChange={e => setContent({ ...content, guaranteeText: e.target.value })}
            className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none italic"
          />
        </div>

        <button
          type="submit"
          className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Save className="w-4 h-4" />
          <span>Save About Content Settings</span>
        </button>
      </form>

      <div className="pt-4 border-t border-stone-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-stone-900 text-sm">About Us Pillars Cards</h3>
          <button
            onClick={() => {
              setNewPillar({
                id: `pillar-${Date.now()}`,
                icon: '🌾',
                title: 'New Pillar',
                description: 'Pillar description details...'
              });
              setIsAddingPillar(true);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Pillar</span>
          </button>
        </div>

        {isAddingPillar && (
          <form onSubmit={handleAddPillarSubmit} className="bg-stone-50 p-4 rounded-2xl border border-blue-200 space-y-3 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <input
                placeholder="Emoji Icon (e.g. 🌱)"
                value={newPillar.icon}
                onChange={e => setNewPillar({ ...newPillar, icon: e.target.value })}
                className="bg-white border p-2 rounded-lg text-center"
              />
              <input
                placeholder="Pillar Title"
                value={newPillar.title}
                onChange={e => setNewPillar({ ...newPillar, title: e.target.value })}
                className="col-span-2 bg-white border p-2 rounded-lg font-bold"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Description"
              value={newPillar.description}
              onChange={e => setNewPillar({ ...newPillar, description: e.target.value })}
              className="w-full bg-white border p-2 rounded-lg"
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-[#072655] text-white font-bold px-4 py-2 rounded-lg cursor-pointer">
                Save Pillar
              </button>
              <button
                type="button"
                onClick={() => setIsAddingPillar(false)}
                className="bg-stone-200 px-3 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {store.aboutContent.pillars.map(p => (
            <div key={p.id} className="bg-stone-50 border p-4 rounded-2xl flex flex-col justify-between space-y-2">
              <div>
                <span className="text-2xl">{p.icon}</span>
                <h4 className="font-bold text-stone-900 text-sm mt-1">{p.title}</h4>
                <p className="text-stone-600 text-xs mt-1">{p.description}</p>
              </div>

              <div className="pt-2 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => store.deleteAboutPillar(p.id)}
                  className="text-rose-600 hover:text-rose-800 font-bold text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Details Editor
function ContactDetailsEditor() {
  const store = useStore();
  const [form, setForm] = useState(store.contactContent);

  useEffect(() => {
    setForm(store.contactContent);
  }, [store.contactContent]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateContactContent(form);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-4 shadow-sm">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-xl font-black text-stone-900">Contact Information Details</h2>
        <p className="text-xs text-stone-500">Edit office address, phone numbers, email, and licensing numbers.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-4 text-xs">
        <div>
          <label className="block text-stone-700 font-bold mb-1">Office &amp; Processing Unit Address</label>
          <input
            required
            value={form.officeAddress}
            onChange={e => setForm({ ...form, officeAddress: e.target.value })}
            className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-bold"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-bold mb-1">India Phone / WhatsApp</label>
            <input
              required
              value={form.phoneIndia}
              onChange={e => setForm({ ...form, phoneIndia: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">UAE Phone / WhatsApp</label>
            <input
              required
              value={form.phoneUAE}
              onChange={e => setForm({ ...form, phoneUAE: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-bold mb-1">Official Email Address</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-bold mb-1">FSSAI Certified No.</label>
            <input
              required
              value={form.fssaiNo}
              onChange={e => setForm({ ...form, fssaiNo: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">Rubber Board Reg No.</label>
            <input
              required
              value={form.rubberBoardNo}
              onChange={e => setForm({ ...form, rubberBoardNo: e.target.value })}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Save className="w-4 h-4" />
          <span>Save Contact Information</span>
        </button>
      </form>
    </div>
  );
}

// 7. Security & Credentials Settings Editor
function SecuritySettingsSection() {
  const store = useStore();
  const [currentAdminId, setCurrentAdminId] = useState<string>('1');
  const [currentAdminPwd, setCurrentAdminPwd] = useState<string>('1');

  useEffect(() => {
    const savedId = localStorage.getItem('beluga_admin_id') || '1';
    const savedPwd = localStorage.getItem('beluga_admin_pwd') || '1';
    setCurrentAdminId(savedId);
    setCurrentAdminPwd(savedPwd);
  }, []);

  const [verifyPassword, setVerifyPassword] = useState<string>('');
  const [newAdminId, setNewAdminId] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [secError, setSecError] = useState<string | null>(null);
  const [secSuccess, setSecSuccess] = useState<string | null>(null);

  useEffect(() => {
    setNewAdminId(currentAdminId);
  }, [currentAdminId]);

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    setSecError(null);
    setSecSuccess(null);

    if (verifyPassword !== currentAdminPwd) {
      setSecError('Current password verification failed. Please enter your correct current password.');
      return;
    }

    if (!newAdminId.trim()) {
      setSecError('Admin User ID cannot be empty.');
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setSecError('New Password and Confirm Password do not match.');
      return;
    }

    const updatedId = newAdminId.trim();
    const updatedPwd = newPassword ? newPassword.trim() : currentAdminPwd;

    localStorage.setItem('beluga_admin_id', updatedId);
    localStorage.setItem('beluga_admin_pwd', updatedPwd);

    setCurrentAdminId(updatedId);
    setCurrentAdminPwd(updatedPwd);

    setVerifyPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setSecSuccess('✅ Security credentials updated successfully!');
    store.showToast('🔐 Login ID and Password updated!');
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 space-y-6 shadow-sm">
      <div className="border-b border-stone-100 pb-4 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-black text-stone-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#072655]" />
            <span>Admin Security & Access Credentials</span>
          </h2>
          <p className="text-xs text-stone-500">Change your login Admin User ID and Password securely.</p>
        </div>
        <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-300">
          🔒 Active Protection
        </span>
      </div>

      {secError && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3.5 rounded-xl flex items-center gap-2 font-bold">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{secError}</span>
        </div>
      )}

      {secSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3.5 rounded-xl flex items-center gap-2 font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{secSuccess}</span>
        </div>
      )}

      <form onSubmit={handleSaveSecurity} className="space-y-4 text-xs max-w-xl">
        <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-3">
          <h4 className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
            <KeyRound className="w-4 h-4 text-[#072655]" />
            <span>Step 1: Verify Current Authorization</span>
          </h4>
          <div>
            <label className="block text-stone-700 font-bold mb-1">
              Current Password <span className="text-rose-600">*</span>
            </label>
            <input
              type="password"
              required
              value={verifyPassword}
              onChange={e => setVerifyPassword(e.target.value)}
              placeholder="Enter current password to authorize changes"
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-mono text-xs"
            />
          </div>
        </div>

        <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-4">
          <h4 className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-700" />
            <span>Step 2: Define New Credentials</span>
          </h4>
          <div>
            <label className="block text-stone-700 font-bold mb-1">New Admin User ID</label>
            <input
              type="text"
              required
              value={newAdminId}
              onChange={e => setNewAdminId(e.target.value)}
              placeholder="Admin User ID"
              className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-mono text-xs font-bold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Leave blank to keep current"
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full bg-white border border-stone-300 rounded-xl p-3 text-stone-900 outline-none font-mono text-xs"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition text-xs"
        >
          <Save className="w-4 h-4" />
          <span>Update Security Credentials</span>
        </button>
      </form>
    </div>
  );
}
