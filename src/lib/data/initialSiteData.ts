import {
  HeroSlide,
  PromiseItem,
  CategoryCardItem,
  JourneyStep,
  TestimonialItem,
  FaqItem,
  PageBannerConfig,
  AboutContent,
  ContactContent
} from '../types/ecommerce';

export const INITIAL_HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    tag: '100% PURE KERALA PRODUCE • DIRECT FARM HARVEST',
    title: 'Taste Kerala. Love Natural.',
    description: 'Pre-cleaned Ready-to-Cook Sadya Vegetable Mixes, single-origin Beluga Pure Spices, desiccated coconut, exotic farm fruits, and certified Natural Rubber RSS Grades.',
    image: '/hero-banner-1920x910.jpg',
    ctaText: 'SHOP NOW',
    ctaLink: '/spices'
  },
  {
    id: 'hero-2',
    tag: 'IDUKKI & WAYANAD ESTATES • 8MM+ BOLD PODS',
    title: 'Pure Single-Estate Spices',
    description: 'Handpicked 8mm+ Green Cardamom, Malabar Bold Garbled Black Pepper, Whole Cloves with crowns, and Ceylon Cinnamon Sticks. 100% chemical polish free.',
    image: '/hero-slide-spices.jpg',
    ctaText: 'EXPLORE SPICES',
    ctaLink: '/spices'
  },
  {
    id: 'hero-3',
    tag: 'FRESH PRE-CUT VEGETABLE MIXES • TRIPLE RO WASHED',
    title: 'Ready-to-Cook Sadya Mixes',
    description: 'Kerala Avial, Sambar, Thooran, Kalan, and Olan pre-washed vegetable cuts packaged under 4°C cold-chain controls without artificial preservatives.',
    image: '/hero-slide-veg.jpg',
    ctaText: 'EXPLORE VEG MIXES',
    ctaLink: '/veg-fruits'
  }
];

export const INITIAL_PROMISE_ITEMS: PromiseItem[] = [
  {
    id: 'promise-1',
    iconName: 'ShieldCheck',
    title: '100% Adulteration-Free Guarantee',
    description: 'Zero added artificial colors, mineral oils, or chemical glazes on whole spices & fresh cuts.'
  },
  {
    id: 'promise-2',
    iconName: 'HeartHandshake',
    title: 'Direct Fair-Trade Farm Pricing',
    description: 'Ensuring sustainable livelihoods and premium income for traditional Kerala farming families.'
  },
  {
    id: 'promise-3',
    iconName: 'Globe2',
    title: 'Global Export Standard Compliance',
    description: 'Strict FSSAI and Rubber Board certification for international container export shipments.'
  }
];

export const INITIAL_CATEGORY_CARDS: CategoryCardItem[] = [
  {
    id: 'cat-spices',
    href: '/spices',
    brandTag: 'Beluga Pure Spices',
    title: 'Spices',
    badge: '4 Export Spices',
    image: '/category_spices.jpg',
    description: 'Handpicked 8mm+ Green Cardamom, Malabar Bold Garbled Black Pepper, Whole Cloves with crowns, and Ceylon Cinnamon Sticks.',
    cta: 'View 4 Pure Spices'
  },
  {
    id: 'cat-veg-fruits',
    href: '/veg-fruits',
    brandTag: 'Beluga Fresh',
    title: 'Vegetables & Fruits',
    badge: '11 Fresh Produce Cuts',
    image: '/category_veg.jpg',
    description: 'Pre-cut Kerala Veg Mixes (Avial, Sambar, Thooran, Kalan, Olan), Desiccated Coconut, Butter Avocados, Rambutan, and Fresh Banana Leaves.',
    cta: 'View 11 Fresh Items'
  },
  {
    id: 'cat-rubber',
    href: '/rubber',
    brandTag: 'Beluga Industrial',
    title: 'Natural Rubber',
    badge: 'RSS 3 & RSS 4 Grades',
    image: '/category_rubber.jpg',
    description: 'RSS 3 & RSS 4 grade ribbed smoked sheets from Kerala plantations. High tensile strength for automotive and engineering polymers.',
    cta: 'View Rubber Specs & RFQ'
  }
];

export const INITIAL_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'journey-1',
    step: '01',
    title: 'Dawn Harvest Sourcing',
    description: 'Picked at dawn from smallholder organic farms in Idukki, Wayanad, and Palakkad to lock in natural essential oils and crisp freshness.',
    iconName: 'Sprout'
  },
  {
    id: 'journey-2',
    step: '02',
    title: 'Hygienic RO Clean-Cuts',
    description: 'Triple-stage RO purified water washing and automated uniform vegetable slicing. 100% free from pesticides, dirt, or chemical polish.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'journey-3',
    step: '03',
    title: 'Chilled Cold-Chain Pack',
    description: 'Sealed in food-grade vacuum pouches under 4°C cold-chain controls. Extends natural shelf life without a single artificial preservative.',
    iconName: 'Snowflake'
  },
  {
    id: 'journey-4',
    step: '04',
    title: 'Domestic & Global Shipping',
    description: 'Fast refrigerated express dispatch across India and certified FOB/CIF container shipping directly from Cochin Port (COK).',
    iconName: 'PlaneTakeoff'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Chef Ananya Pillai',
    role: 'Executive Chef, Malabar Heritage Dining',
    location: 'Kochi, Kerala',
    text: 'Beluga Fresh ready-to-cook Avial and Sambar mixes save us over 45 minutes of preparation time during weekend banquets while matching authentic traditional Sadya taste perfectly.',
    rating: 5,
    badge: 'Culinary Verified'
  },
  {
    id: 'test-2',
    name: 'Marcus Weber',
    role: 'Import Director, Polymer Tech GmbH',
    location: 'Frankfurt, Germany',
    text: 'We import 20MT FCL containers of Beluga RSS 3 Natural Rubber sheets from Cochin Port. Tensile elasticity and smoke cure consistency strictly meet Green Book standards.',
    rating: 5,
    badge: 'Export Buyer'
  },
  {
    id: 'test-3',
    name: 'Fatima Al-Mansoor',
    role: 'Spices Distributor',
    location: 'Dubai, UAE',
    text: 'The 8mm+ Beluga Pure Green Cardamom pods are incredibly fragrant. Zero artificial green polish or synthetic oils. Our retail clients in UAE love the intense aroma.',
    rating: 5,
    badge: 'Bulk Wholesale'
  }
];

export const INITIAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I place an inquiry or request pricing for bulk orders?',
    answer: 'Simply click the "Inquire" button on any product card or use the "Enquiry" button in the top navigation bar. Select your items and submit your contact details. Our Kerala sales desk will review your request and reply via WhatsApp or Email within 2 hours with customized wholesale quotes.'
  },
  {
    id: 'faq-2',
    question: 'What is the shelf life of Beluga Fresh ready-to-cook vegetable mixes?',
    answer: 'Our pre-cleaned and sliced Kerala sadya mixes are triple-washed in RO water and vacuum-sealed under 4°C chilled cold-chain controls. Unopened packs retain farm freshness for up to 5 days under standard refrigeration without any added chemical preservatives.'
  },
  {
    id: 'faq-3',
    question: 'What export Incoterms and sea ports do you support for Natural Rubber (RSS 3 & 4)?',
    answer: 'We export RSS 3 and RSS 4 grade Ribbed Smoked Sheets in 100kg bales or 20MT FCL containers directly from Cochin Port (COK), Kerala. We support both FOB Cochin and CIF sea port destination terms with full Indian Rubber Board inspection certificates.'
  },
  {
    id: 'faq-4',
    question: 'Are Beluga Pure Spices 100% natural without artificial green polish?',
    answer: 'Yes! Our Idukki 8mm+ Green Cardamom and Tellicherry Black Pepper are 100% sun-dried and hand-sorted. We guarantee zero mineral oil polish, zero artificial green coloring dye, and zero synthetic aroma extracts.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer direct supply for restaurants, catering services, and supermarkets?',
    answer: 'Absolutely. We supply daily fresh pre-cut vegetable mixes, desiccated coconut cartons, and bulk spice bags to commercial hotels, wedding caterers, and retail grocery stores across India and GCC markets.'
  }
];

export const INITIAL_PAGE_BANNERS: Record<string, PageBannerConfig> = {
  spices: {
    categoryTag: 'BELUGA CATALOG',
    subTag: 'SINGLE-ORIGIN SPICES',
    title: 'Beluga Pure Spices',
    description: "Rooted in Kerala's heritage. Bold, natural, authentic green cardamom, Tellicherry black pepper, whole cloves, and Ceylon cinnamon.",
    heroImage: '/category_spices.jpg'
  },
  'veg-fruits': {
    categoryTag: 'BELUGA FRESH',
    subTag: 'VEGETABLES AND FRUITS',
    title: 'Kerala Vegetables & Fresh Fruits',
    description: 'Ready-to-cook festive sadya mixes, desiccated coconut flakes, exotic farm fruits, and farm-fresh greens picked daily.',
    heroImage: '/category_veg.jpg'
  },
  rubber: {
    categoryTag: 'BELUGA INDUSTRIAL',
    subTag: 'RSS 3 & RSS 4 GRADES',
    title: 'Natural Rubber (RSS 3 & RSS 4)',
    description: 'High quality natural rubber sourced from premium plantations in Kerala, processed with care for consistent strength and elasticity.',
    heroImage: '/category_rubber.jpg'
  },
  about: {
    categoryTag: 'HERITAGE & VISION',
    subTag: 'KERALA AGRARIAN STORY',
    title: 'Rooted in Soil. Delivered Globally.',
    description: 'Beluga Fresh & Beluga Pure bridge the rich agrarian heritage of Kerala with modern culinary convenience and global industrial quality.',
    heroImage: '/kerala_estate_banner.jpg'
  },
  contact: {
    categoryTag: 'REACH OUT',
    subTag: 'KERALA SALES DESK',
    title: 'Get in Touch with Beluga',
    description: 'Have questions about domestic retail shipments, farm produce supply, or bulk container exports? Our team in Kerala is ready to assist.',
    heroImage: '/kerala_estate_banner.jpg'
  }
};

export const INITIAL_ABOUT_CONTENT: AboutContent = {
  missionTitle: 'Our Mission',
  missionText: 'To bring the authentic purity, rich heritage, and unmatched quality of Kerala\'s organic produce—from farm-fresh spices and ready-to-cook traditional Sadya mixes to industrial-grade natural rubber—directly to kitchens and global industries worldwide, empowering local farming communities through transparent fair-trade partnerships.',
  visionTitle: 'Our Vision',
  visionText: 'To be the world\'s most trusted gateway to Kerala\'s rich agricultural legacy by setting global benchmarks in farm-to-table sustainability, cold-chain freshness, zero-adulteration purity, and ethical eco-conscious export practices.',
  pillars: [
    {
      id: 'p-1',
      icon: '🌱',
      title: 'Direct From Farmers',
      description: 'We work directly with smallholder farming clusters in Idukki, Wayanad, Palakkad, and Kottayam, guaranteeing fair-trade pricing and zero adulteration.'
    },
    {
      id: 'p-2',
      icon: '🛡️',
      title: 'Hygienic Clean Cuts',
      description: 'Our ready-to-cook Kerala sadya mixes are triple-washed in RO water and vacuum-sealed under 4°C cold-chain controls without artificial preservatives.'
    },
    {
      id: 'p-3',
      icon: '🌍',
      title: 'Global Export Ready',
      description: 'From whole spices certified for maximum piperine and eugenol to natural rubber RSS sheets meeting Green Book norms for worldwide manufacturing.'
    }
  ],
  guaranteeTitle: 'Beluga Quality Guarantee',
  guaranteeText: '"Every pack of Beluga cardamom, avial mix, or rubber bale carries the fragrance and uncompromising pride of Kerala\'s soil. Pure. Natural. Sustainable."'
};

export const INITIAL_CONTACT_CONTENT: ContactContent = {
  officeAddress: 'Koratty, Nalukettu po, Thrissur, Kerala',
  phoneIndia: '+91 9567069814',
  phoneUAE: '+971 562784277',
  email: 'belugaglobalexports@gmail.com',
  fssaiNo: '#11324005000128',
  rubberBoardNo: '#RB/KL/EX/2026'
};
