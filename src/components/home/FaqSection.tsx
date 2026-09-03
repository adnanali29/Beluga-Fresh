'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I place an inquiry or request pricing for bulk orders?',
      answer: 'Simply click the "Inquire" button on any product card or use the "Enquiry" button in the top navigation bar. Select your items and submit your contact details. Our Kerala sales desk will review your request and reply via WhatsApp or Email within 2 hours with customized wholesale quotes.'
    },
    {
      question: 'What is the shelf life of Beluga Fresh ready-to-cook vegetable mixes?',
      answer: 'Our pre-cleaned and sliced Kerala sadya mixes are triple-washed in RO water and vacuum-sealed under 4°C chilled cold-chain controls. Unopened packs retain farm freshness for up to 5 days under standard refrigeration without any added chemical preservatives.'
    },
    {
      question: 'What export Incoterms and sea ports do you support for Natural Rubber (RSS 3 & 4)?',
      answer: 'We export RSS 3 and RSS 4 grade Ribbed Smoked Sheets in 100kg bales or 20MT FCL containers directly from Cochin Port (COK), Kerala. We support both FOB Cochin and CIF sea port destination terms with full Indian Rubber Board inspection certificates.'
    },
    {
      question: 'Are Beluga Pure Spices 100% natural without artificial green polish?',
      answer: 'Yes! Our Idukki 8mm+ Green Cardamom and Tellicherry Black Pepper are 100% sun-dried and hand-sorted. We guarantee zero mineral oil polish, zero artificial green coloring dye, and zero synthetic aroma extracts.'
    },
    {
      question: 'Do you offer direct supply for restaurants, catering services, and supermarkets?',
      answer: 'Absolutely. We supply daily fresh pre-cut vegetable mixes, desiccated coconut cartons, and bulk spice bags to commercial hotels, wedding caterers, and retail grocery stores across India and GCC markets.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-[#072655] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight pt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our farm sourcing, ready-to-cook packaging, and container export terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden transition duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 hover:text-[#072655] transition cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#072655] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
