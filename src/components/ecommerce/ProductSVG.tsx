import React from 'react';

interface ProductSVGProps {
  type: string;
}

export const ProductSVG: React.FC<ProductSVGProps> = ({ type }) => {
  if (type === 'coconut-pouch') {
    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <path d="M 40,20 L 160,20 L 175,200 C 175,215 155,225 100,225 C 45,225 25,215 25,200 Z" fill="#ffffff" stroke="#166534" strokeWidth="2.5" />
        <path d="M 38,20 L 162,20 L 165,55 C 140,50 60,50 35,55 Z" fill="#14532d" />
        <text x="100" y="78" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="900">BELUGA</text>
        <text x="100" y="92" textAnchor="middle" fill="#65a30d" fontSize="15" fontWeight="900">FRESH</text>
        <rect x="42" y="108" width="116" height="26" rx="4" fill="#14532d" />
        <text x="100" y="119" textAnchor="middle" fill="#fef08a" fontSize="7" fontWeight="bold">DESICCATED</text>
        <text x="100" y="129" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">COCONUT</text>
        <ellipse cx="100" cy="188" rx="45" ry="18" fill="#f1f5f9" stroke="#78350f" strokeWidth="2" />
        <path d="M 60,188 Q 100,140 140,188 Z" fill="#ffffff" stroke="#e2e8f0" />
        <circle cx="62" cy="168" r="16" fill="#582900" stroke="#78350f" strokeWidth="2" />
        <circle cx="62" cy="168" r="12" fill="#ffffff" />
        <text x="45" y="215" fill="#14532d" fontSize="7" fontWeight="bold">500g</text>
      </svg>
    );
  }

  if (type === 'coconut-box') {
    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <polygon points="35,30 145,30 145,215 35,215" fill="#ffffff" stroke="#166534" strokeWidth="2" />
        <polygon points="145,30 175,12 175,195 145,215" fill="#14532d" stroke="#166534" strokeWidth="2" />
        <polygon points="35,30 65,12 175,12 145,30" fill="#22543d" />
        <text x="90" y="60" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="900">BELUGA</text>
        <text x="90" y="75" textAnchor="middle" fill="#65a30d" fontSize="15" fontWeight="900">FRESH</text>
        <rect x="45" y="86" width="90" height="25" rx="3" fill="#14532d" />
        <text x="90" y="97" textAnchor="middle" fill="#fef08a" fontSize="6.5" fontWeight="bold">DESICCATED</text>
        <text x="90" y="106" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">COCONUT</text>
        <rect x="35" y="195" width="110" height="20" fill="#14532d" />
        <text x="90" y="208" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">NET WT. 500g</text>
      </svg>
    );
  }

  if (type.startsWith('mix-')) {
    const color = type === 'mix-avial' ? '#15803d' : type === 'mix-sambar' ? '#b45309' : type === 'mix-thooran' ? '#7e22ce' : type === 'mix-kalan' ? '#c2410c' : '#0f766e';
    const title = type === 'mix-avial' ? 'AVIAL MIX' : type === 'mix-sambar' ? 'SADHYA SAMBAR' : type === 'mix-thooran' ? 'THOORAN MIX' : type === 'mix-kalan' ? 'KALAN MIX' : 'OLAN MIX';

    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <path d="M 40,20 L 160,20 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        <path d="M 38,20 L 162,20 L 165,42 L 35,42 Z" fill={color} />
        <text x="100" y="58" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900">BELUGA FRESH</text>
        <text x="100" y="83" textAnchor="middle" fill={color} fontSize="11" fontWeight="900">{title}</text>
        <text x="100" y="93" textAnchor="middle" fill="#334155" fontSize="7" fontWeight="bold">PRE-CUT VEG MIX</text>
        <rect x="42" y="105" width="116" height="72" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx="55" cy="122" r="5" fill="#f97316" />
        <rect x="68" y="116" width="10" height="10" rx="2" fill="#22c55e" />
        <circle cx="95" cy="124" r="6" fill="#eab308" />
        <rect x="110" y="118" width="12" height="7" rx="1" fill="#15803d" />
        <circle cx="135" cy="126" r="5" fill="#a855f7" />
        <path d="M 29,190 L 171,190 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill={color} />
        <text x="100" y="208" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">NET WT. 400g</text>
      </svg>
    );
  }

  if (type.startsWith('spice-')) {
    const title = type === 'spice-cardamom' ? 'CARDAMOM' : type === 'spice-pepper' ? 'BLACK PEPPER' : type === 'spice-cloves' ? 'CLOVES' : type === 'spice-coffee' ? 'COFFEE BEANS' : 'CINNAMON';
    const bot = type === 'spice-cardamom' ? '#166534' : type === 'spice-pepper' ? '#27272a' : type === 'spice-cloves' ? '#581c87' : type === 'spice-coffee' ? '#451a03' : '#9a3412';
    const fill = type === 'spice-cardamom' ? '#65a30d' : type === 'spice-pepper' ? '#18181b' : type === 'spice-cloves' ? '#78350f' : type === 'spice-coffee' ? '#78350f' : '#b45309';

    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <path d="M 40,20 L 160,20 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill="#fffbeb" stroke="#d6c7b0" strokeWidth="2" />
        <text x="100" y="48" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="900">BELUGA</text>
        <text x="100" y="58" textAnchor="middle" fill="#78716c" fontSize="5" fontWeight="bold">— PURE —</text>
        <text x="100" y="74" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="900">{title}</text>
        <ellipse cx="100" cy="125" rx="35" ry="14" fill="#78350f" />
        <circle cx="90" cy="120" r="6" fill={fill} />
        <circle cx="102" cy="118" r="7" fill={fill} />
        <circle cx="112" cy="122" r="5" fill={fill} />
        <path d="M 32,150 L 168,150 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill={bot} />
        <text x="100" y="174" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="bold">HANDPICKED FROM KERALA</text>
        <text x="100" y="206" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">NET WT. 100g</text>
      </svg>
    );
  }

  if (type.startsWith('rubber-')) {
    const grade = type === 'rubber-rss3' ? 'RSS 3 GRADE' : 'RSS 4 GRADE';
    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <path d="M 30,60 Q 100,50 170,60 L 170,80 Q 100,70 30,80 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" />
        <path d="M 30,75 Q 100,65 170,75 L 170,95 Q 100,85 30,95 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
        <path d="M 30,90 Q 100,80 170,90 L 170,110 Q 100,100 30,110 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" />
        <path d="M 30,105 Q 100,95 170,105 L 170,125 Q 100,115 30,125 Z" fill="#92400e" stroke="#78350f" strokeWidth="2" />
        <rect x="35" y="165" width="130" height="42" rx="4" fill="#14532d" stroke="#86efac" strokeWidth="1.5" />
        <text x="100" y="182" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">{grade}</text>
        <text x="100" y="196" textAnchor="middle" fill="#ffffff" fontSize="6">NATURAL RUBBER • KERALA</text>
      </svg>
    );
  }

  if (type.startsWith('produce-')) {
    const produceInfo: Record<string, { title: string; subtitle: string; icon: string; bg: string; border: string }> = {
      'produce-avocado': { title: 'BUTTER AVOCADO', subtitle: 'CREAMY HASS & GREEN', icon: '🥑', bg: '#ecfdf5', border: '#10b981' },
      'produce-pineapple': { title: 'VAZHAKULAM PINEAPPLE', subtitle: 'GI TAGGED KANNARA', icon: '🍍', bg: '#fefce8', border: '#ca8a04' },
      'produce-curryleaves': { title: 'CURRY LEAVES', subtitle: 'AROMATIC DARK GREEN', icon: '🌿', bg: '#f0fdf4', border: '#15803d' },
      'produce-bananaleaves': { title: 'BANANA LEAVES', subtitle: 'ECO DINING LEAVES', icon: '🍃', bg: '#f0fdf4', border: '#16a34a' },
      'produce-dragonfruit': { title: 'DRAGON FRUIT', subtitle: 'SWEET RED PITAYA', icon: '🌺', bg: '#fdf2f8', border: '#db2777' },
      'produce-mango': { title: 'MALGOVA MANGO', subtitle: 'TREE RIPENED SWEET', icon: '🥭', bg: '#fff7ed', border: '#ea580c' },
      'produce-ramboutan': { title: 'RED RAMBOUTAN', subtitle: 'EXOTIC TROPICAL', icon: '🍒', bg: '#fef2f2', border: '#dc2626' },
      'produce-onion': { title: 'SMALL SHALLOTS', subtitle: 'SAMBAR RED ONION', icon: '🧅', bg: '#fff1f2', border: '#be123c' },
      'produce-banana': { title: 'NENDRAN BANANA', subtitle: 'GI CHENGAZHIKODAN', icon: '🍌', bg: '#fefce8', border: '#ca8a04' },
      'produce-freshveg': { title: 'FARM VEG BASKET', subtitle: 'FRESH DAILY HARVEST', icon: '🥦', bg: '#f0fdf4', border: '#15803d' },
    };

    const item = produceInfo[type] || { title: 'FRESH PRODUCE', subtitle: 'KERALA FARM HARVEST', icon: '🌱', bg: '#f0fdf4', border: '#16a34a' };

    return (
      <svg viewBox="0 0 200 240" className="h-44 w-auto drop-shadow-md">
        <path d="M 40,20 L 160,20 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill={item.bg} stroke={item.border} strokeWidth="2" />
        <path d="M 38,20 L 162,20 L 165,45 L 35,45 Z" fill={item.border} />
        <text x="100" y="36" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">BELUGA FRESH</text>
        <text x="100" y="65" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900">{item.title}</text>
        <text x="100" y="76" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="bold">{item.subtitle}</text>
        
        <circle cx="100" cy="130" r="36" fill="#ffffff" stroke={item.border} strokeWidth="1.5" />
        <text x="100" y="142" textAnchor="middle" fontSize="38">{item.icon}</text>

        <path d="M 32,185 L 168,185 L 175,205 C 175,218 150,225 100,225 C 50,225 25,218 25,205 Z" fill={item.border} />
        <text x="100" y="202" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">100% KERALA FARM HARVEST</text>
      </svg>
    );
  }

  return (
    <div className="text-center py-4">
      <span className="text-5xl">🌱</span>
      <p className="text-[11px] font-bold text-emerald-800 mt-2 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">Farm Harvest</p>
    </div>
  );
};

