'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  CurrencyCode,
  EnquiryFormData,
  B2BInquiry,
  HeroSlide,
  PromiseItem,
  CategoryCardItem,
  JourneyStep,
  TestimonialItem,
  FaqItem,
  PageBannerConfig,
  AboutContent,
  AboutPillar,
  ContactContent
} from '../lib/types/ecommerce';
import { PRODUCTS, CURRENCIES } from '../lib/data/products';
import {
  INITIAL_HERO_SLIDES,
  INITIAL_PROMISE_ITEMS,
  INITIAL_CATEGORY_CARDS,
  INITIAL_JOURNEY_STEPS,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS,
  INITIAL_PAGE_BANNERS,
  INITIAL_ABOUT_CONTENT,
  INITIAL_CONTACT_CONTENT
} from '../lib/data/initialSiteData';

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  activeCurrency: CurrencyCode;
  searchQuery: string;
  discountPercent: number;
  toastMessage: string | null;

  // Editable Dynamic Site Content
  heroSlides: HeroSlide[];
  promiseItems: PromiseItem[];
  categoryCards: CategoryCardItem[];
  journeySteps: JourneyStep[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  pageBanners: Record<string, PageBannerConfig>;
  aboutContent: AboutContent;
  contactContent: ContactContent;
  
  // Drawers & Modals
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  quickViewProduct: Product | null;
  isEnquiryOpen: boolean;
  isB2BOpen: boolean;
  confirmedEnquiryId: string | null;
  
  // Actions - Store & Ecommerce
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

  // Actions - Admin Dynamic Content CRUD
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;

  addHeroSlide: (slide: HeroSlide) => void;
  updateHeroSlide: (slide: HeroSlide) => void;
  deleteHeroSlide: (id: string) => void;

  addPromiseItem: (item: PromiseItem) => void;
  updatePromiseItem: (item: PromiseItem) => void;
  deletePromiseItem: (id: string) => void;

  addCategoryCard: (card: CategoryCardItem) => void;
  updateCategoryCard: (card: CategoryCardItem) => void;
  deleteCategoryCard: (id: string) => void;

  addJourneyStep: (step: JourneyStep) => void;
  updateJourneyStep: (step: JourneyStep) => void;
  deleteJourneyStep: (id: string) => void;

  addTestimonial: (testimonial: TestimonialItem) => void;
  updateTestimonial: (testimonial: TestimonialItem) => void;
  deleteTestimonial: (id: string) => void;

  addFaqItem: (faq: FaqItem) => void;
  updateFaqItem: (faq: FaqItem) => void;
  deleteFaqItem: (id: string) => void;

  updatePageBanner: (pageKey: string, banner: PageBannerConfig) => void;
  updateAboutContent: (content: AboutContent) => void;
  addAboutPillar: (pillar: AboutPillar) => void;
  deleteAboutPillar: (id: string) => void;
  updateContactContent: (content: ContactContent) => void;

  resetAllContent: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Store States
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['beluga-spice-cardamom']);
  const [activeCurrency, setActiveCurrencyState] = useState<CurrencyCode>('INR');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamic Site Content States
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(INITIAL_HERO_SLIDES);
  const [promiseItems, setPromiseItems] = useState<PromiseItem[]>(INITIAL_PROMISE_ITEMS);
  const [categoryCards, setCategoryCards] = useState<CategoryCardItem[]>(INITIAL_CATEGORY_CARDS);
  const [journeySteps, setJourneySteps] = useState<JourneyStep[]>(INITIAL_JOURNEY_STEPS);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [faqs, setFaqs] = useState<FaqItem[]>(INITIAL_FAQS);
  const [pageBanners, setPageBanners] = useState<Record<string, PageBannerConfig>>(INITIAL_PAGE_BANNERS);
  const [aboutContent, setAboutContent] = useState<AboutContent>(INITIAL_ABOUT_CONTENT);
  const [contactContent, setContactContent] = useState<ContactContent>(INITIAL_CONTACT_CONTENT);

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [isB2BOpen, setIsB2BOpen] = useState<boolean>(false);
  const [confirmedEnquiryId, setConfirmedEnquiryId] = useState<string | null>(null);

  // Hydrate from LocalStorage on mount
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem('beluga_products');
      if (savedProducts) setProducts(JSON.parse(savedProducts));

      const savedHero = localStorage.getItem('beluga_hero_slides');
      if (savedHero) setHeroSlides(JSON.parse(savedHero));

      const savedPromise = localStorage.getItem('beluga_promise_items');
      if (savedPromise) setPromiseItems(JSON.parse(savedPromise));

      const savedCats = localStorage.getItem('beluga_category_cards');
      if (savedCats) setCategoryCards(JSON.parse(savedCats));

      const savedJourney = localStorage.getItem('beluga_journey_steps');
      if (savedJourney) setJourneySteps(JSON.parse(savedJourney));

      const savedTests = localStorage.getItem('beluga_testimonials');
      if (savedTests) setTestimonials(JSON.parse(savedTests));

      const savedFaqs = localStorage.getItem('beluga_faqs');
      if (savedFaqs) setFaqs(JSON.parse(savedFaqs));

      const savedBanners = localStorage.getItem('beluga_page_banners');
      if (savedBanners) setPageBanners(JSON.parse(savedBanners));

      const savedAbout = localStorage.getItem('beluga_about_content');
      if (savedAbout) setAboutContent(JSON.parse(savedAbout));

      const savedContact = localStorage.getItem('beluga_contact_content');
      if (savedContact) setContactContent(JSON.parse(savedContact));
    } catch (e) {
      console.error('Error hydrating state from localStorage:', e);
    }
  }, []);

  // Sync to LocalStorage helpers
  const syncProducts = (newProds: Product[]) => {
    setProducts(newProds);
    localStorage.setItem('beluga_products', JSON.stringify(newProds));
  };

  const syncHero = (newHero: HeroSlide[]) => {
    setHeroSlides(newHero);
    localStorage.setItem('beluga_hero_slides', JSON.stringify(newHero));
  };

  const syncPromise = (newPromise: PromiseItem[]) => {
    setPromiseItems(newPromise);
    localStorage.setItem('beluga_promise_items', JSON.stringify(newPromise));
  };

  const syncCategoryCards = (newCats: CategoryCardItem[]) => {
    setCategoryCards(newCats);
    localStorage.setItem('beluga_category_cards', JSON.stringify(newCats));
  };

  const syncJourney = (newSteps: JourneyStep[]) => {
    setJourneySteps(newSteps);
    localStorage.setItem('beluga_journey_steps', JSON.stringify(newSteps));
  };

  const syncTestimonials = (newTests: TestimonialItem[]) => {
    setTestimonials(newTests);
    localStorage.setItem('beluga_testimonials', JSON.stringify(newTests));
  };

  const syncFaqs = (newFaqs: FaqItem[]) => {
    setFaqs(newFaqs);
    localStorage.setItem('beluga_faqs', JSON.stringify(newFaqs));
  };

  const syncBanners = (newBanners: Record<string, PageBannerConfig>) => {
    setPageBanners(newBanners);
    localStorage.setItem('beluga_page_banners', JSON.stringify(newBanners));
  };

  const syncAbout = (newAbout: AboutContent) => {
    setAboutContent(newAbout);
    localStorage.setItem('beluga_about_content', JSON.stringify(newAbout));
  };

  const syncContact = (newContact: ContactContent) => {
    setContactContent(newContact);
    localStorage.setItem('beluga_contact_content', JSON.stringify(newContact));
  };

  // Toast
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Currency & Pricing
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

  // Cart & Wishlist Actions
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

  // ADMIN CONTENT CRUD METHODS
  // 1. Products
  const addProduct = (p: Product) => {
    const updated = [p, ...products];
    syncProducts(updated);
    showToast(`✅ Product "${p.name}" added!`);
  };

  const updateProduct = (p: Product) => {
    const updated = products.map(item => (item.id === p.id ? p : item));
    syncProducts(updated);
    showToast(`✅ Product "${p.name}" updated!`);
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter(item => item.id !== id);
    syncProducts(updated);
    showToast('🗑️ Product deleted');
  };

  // 2. Hero Slides
  const addHeroSlide = (slide: HeroSlide) => {
    const updated = [...heroSlides, slide];
    syncHero(updated);
    showToast('✅ Hero slide added!');
  };

  const updateHeroSlide = (slide: HeroSlide) => {
    const updated = heroSlides.map(item => (item.id === slide.id ? slide : item));
    syncHero(updated);
    showToast('✅ Hero slide updated!');
  };

  const deleteHeroSlide = (id: string) => {
    if (heroSlides.length <= 1) {
      showToast('⚠️ At least 1 Hero slide is required.');
      return;
    }
    const updated = heroSlides.filter(item => item.id !== id);
    syncHero(updated);
    showToast('🗑️ Hero slide removed');
  };

  // 3. Beluga Promise
  const addPromiseItem = (item: PromiseItem) => {
    const updated = [...promiseItems, item];
    syncPromise(updated);
    showToast('✅ Promise feature added!');
  };

  const updatePromiseItem = (item: PromiseItem) => {
    const updated = promiseItems.map(p => (p.id === item.id ? item : p));
    syncPromise(updated);
    showToast('✅ Promise feature updated!');
  };

  const deletePromiseItem = (id: string) => {
    const updated = promiseItems.filter(p => p.id !== id);
    syncPromise(updated);
    showToast('🗑️ Promise feature deleted');
  };

  // 4. Category Cards
  const addCategoryCard = (card: CategoryCardItem) => {
    const updated = [...categoryCards, card];
    syncCategoryCards(updated);
    showToast('✅ Product category card added!');
  };

  const updateCategoryCard = (card: CategoryCardItem) => {
    const updated = categoryCards.map(c => (c.id === card.id ? card : c));
    syncCategoryCards(updated);
    showToast('✅ Category card updated!');
  };

  const deleteCategoryCard = (id: string) => {
    const updated = categoryCards.filter(c => c.id !== id);
    syncCategoryCards(updated);
    showToast('🗑️ Category card deleted');
  };

  // 5. Journey Steps
  const addJourneyStep = (step: JourneyStep) => {
    const updated = [...journeySteps, step];
    syncJourney(updated);
    showToast('✅ Journey step added!');
  };

  const updateJourneyStep = (step: JourneyStep) => {
    const updated = journeySteps.map(s => (s.id === step.id ? step : s));
    syncJourney(updated);
    showToast('✅ Journey step updated!');
  };

  const deleteJourneyStep = (id: string) => {
    const updated = journeySteps.filter(s => s.id !== id);
    syncJourney(updated);
    showToast('🗑️ Journey step deleted');
  };

  // 6. Testimonials
  const addTestimonial = (test: TestimonialItem) => {
    const updated = [...testimonials, test];
    syncTestimonials(updated);
    showToast('✅ Testimonial added!');
  };

  const updateTestimonial = (test: TestimonialItem) => {
    const updated = testimonials.map(t => (t.id === test.id ? test : t));
    syncTestimonials(updated);
    showToast('✅ Testimonial updated!');
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    syncTestimonials(updated);
    showToast('🗑️ Testimonial deleted');
  };

  // 7. FAQs
  const addFaqItem = (faq: FaqItem) => {
    const updated = [...faqs, faq];
    syncFaqs(updated);
    showToast('✅ FAQ item added!');
  };

  const updateFaqItem = (faq: FaqItem) => {
    const updated = faqs.map(f => (f.id === faq.id ? faq : f));
    syncFaqs(updated);
    showToast('✅ FAQ item updated!');
  };

  const deleteFaqItem = (id: string) => {
    const updated = faqs.filter(f => f.id !== id);
    syncFaqs(updated);
    showToast('🗑️ FAQ item deleted');
  };

  // 8. Page Banners
  const updatePageBanner = (pageKey: string, banner: PageBannerConfig) => {
    const updated = { ...pageBanners, [pageKey]: banner };
    syncBanners(updated);
    showToast(`✅ Hero banner for "${pageKey}" updated!`);
  };

  // 9. About Content
  const updateAboutContent = (content: AboutContent) => {
    syncAbout(content);
    showToast('✅ About page content saved!');
  };

  const addAboutPillar = (pillar: AboutPillar) => {
    const updatedPillars = [...aboutContent.pillars, pillar];
    const updated = { ...aboutContent, pillars: updatedPillars };
    syncAbout(updated);
    showToast('✅ About pillar added!');
  };

  const deleteAboutPillar = (id: string) => {
    const updatedPillars = aboutContent.pillars.filter(p => p.id !== id);
    const updated = { ...aboutContent, pillars: updatedPillars };
    syncAbout(updated);
    showToast('🗑️ About pillar deleted');
  };

  // 10. Contact Content
  const updateContactContent = (content: ContactContent) => {
    syncContact(content);
    showToast('✅ Contact information updated!');
  };

  // Reset to initial seed
  const resetAllContent = () => {
    localStorage.clear();
    setProducts(PRODUCTS);
    setHeroSlides(INITIAL_HERO_SLIDES);
    setPromiseItems(INITIAL_PROMISE_ITEMS);
    setCategoryCards(INITIAL_CATEGORY_CARDS);
    setJourneySteps(INITIAL_JOURNEY_STEPS);
    setTestimonials(INITIAL_TESTIMONIALS);
    setFaqs(INITIAL_FAQS);
    setPageBanners(INITIAL_PAGE_BANNERS);
    setAboutContent(INITIAL_ABOUT_CONTENT);
    setContactContent(INITIAL_CONTACT_CONTENT);
    showToast('🔄 Reset all site content to original defaults!');
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
        heroSlides,
        promiseItems,
        categoryCards,
        journeySteps,
        testimonials,
        faqs,
        pageBanners,
        aboutContent,
        contactContent,
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
        showToast,
        addProduct,
        updateProduct,
        deleteProduct,
        addHeroSlide,
        updateHeroSlide,
        deleteHeroSlide,
        addPromiseItem,
        updatePromiseItem,
        deletePromiseItem,
        addCategoryCard,
        updateCategoryCard,
        deleteCategoryCard,
        addJourneyStep,
        updateJourneyStep,
        deleteJourneyStep,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addFaqItem,
        updateFaqItem,
        deleteFaqItem,
        updatePageBanner,
        updateAboutContent,
        addAboutPillar,
        deleteAboutPillar,
        updateContactContent,
        resetAllContent
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
