'use client';

import React, { useState } from 'react';
import { PageHeroBanner } from '../../components/layout/PageHeroBanner';
import { useStore } from '../../context/StoreContext';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useStore();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Retail & Veg Mix Orders');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('✅ Message submitted! We will contact you shortly.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Hero Banner */}
      <PageHeroBanner
        categoryTag="REACH OUT"
        subTag="KERALA SALES DESK"
        title="Get in Touch with Beluga"
        description="Have questions about domestic retail shipments, farm produce supply, or bulk container exports? Our team in Kerala is ready to assist."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Info Column */}
        <div className="lg:col-span-5 bg-[#072655] text-white p-8 rounded-3xl space-y-6">
          <div>
            <h2 className="text-2xl font-black mt-1">Kerala Headquarters</h2>
            <p className="text-blue-100 text-xs mt-2 leading-relaxed">
              Direct access to our central procurement facilities and container export loading desk.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Office & Processing Unit Address:</p>
                <p className="text-blue-200 mt-0.5">Koratty, Nalukettu po, Thrissur, Kerala</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Telephone & WhatsApp Support:</p>
                <p className="text-blue-200 mt-0.5">
                  <span className="font-semibold text-white">India:</span> +91 9567069814<br />
                  <span className="font-semibold text-white">UAE:</span> +971 562784277
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Official Email Address:</p>
                <p className="text-blue-200 mt-0.5">
                  <a href="mailto:belugaglobalexports@gmail.com" className="hover:underline text-sky-300">
                    belugaglobalexports@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-blue-900/80">
            <span className="text-[11px] text-blue-200 block">FSSAI Certified: #11324005000128</span>
            <span className="text-[11px] text-blue-200 block">Rubber Board of India Reg: #RB/KL/EX/2026</span>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="text-xl font-black text-stone-900 mb-1">Send Us a Direct Message</h3>
          <p className="text-stone-500 text-xs mb-6">Fill in the details below and we will respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-bold mb-1">Your Full Name</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Aditi Menon"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none focus:border-[#072655] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-bold mb-1">Phone / WhatsApp</label>
                <input
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91 98470 XXXXX"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none focus:border-[#072655] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-bold mb-1">Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="aditi@example.com"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none focus:border-[#072655] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-bold mb-1">Subject / Inquiry Type</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none"
              >
                <option>General Retail & Veg Mix Orders</option>
                <option>Beluga Pure Spices Bulk Procurement</option>
                <option>Natural Rubber (RSS 3/4) Export Quote</option>
                <option>Distributorship & Retail Stocking</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-bold mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Write your message, order specifications or queries here..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-stone-900 outline-none focus:border-[#072655] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#072655] hover:bg-[#0b3574] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
