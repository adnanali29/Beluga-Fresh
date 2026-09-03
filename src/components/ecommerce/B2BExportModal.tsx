'use client';

import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Building2 } from 'lucide-react';

export const B2BExportModal: React.FC = () => {
  const { isB2BOpen, closeB2BModal, submitB2BInquiry } = useStore();

  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productRequired, setProductRequired] = useState('Natural Rubber RSS 3 Grade (100kg Bales / 20MT FCL)');
  const [volumeAndTerms, setVolumeAndTerms] = useState('');

  if (!isB2BOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitB2BInquiry({
      companyName,
      country,
      email,
      phone,
      productRequired,
      volumeAndTerms
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white border border-stone-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-left my-8 text-stone-900">
        <button
          onClick={closeB2BModal}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
            <Building2 className="w-6 h-6 text-amber-800" />
          </div>
          <div>
            <h3 className="text-xl font-black text-stone-900">Global Wholesale & Rubber Export Inquiry</h3>
            <p className="text-xs text-stone-500">Direct plantation FOB/CIF container quotes from Cochin (COK) Port</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Company / Buyer Name</label>
              <input
                required
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="e.g. Continental Polytech"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Country of Import</label>
              <input
                required
                value={country}
                onChange={e => setCountry(e.target.value)}
                placeholder="e.g. Germany, UAE, USA"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-bold mb-1">Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="trade@company.com"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Phone / WhatsApp</label>
              <input
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+971 / +1 / +91 ..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Products Required in Bulk</label>
            <select
              value={productRequired}
              onChange={e => setProductRequired(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
            >
              <option>Natural Rubber RSS 3 Grade (100kg Bales / 20MT FCL)</option>
              <option>Natural Rubber RSS 4 Grade (100kg Bales / 20MT FCL)</option>
              <option>Beluga Pure Green Cardamom 8mm+ (Bulk 50kg Bags)</option>
              <option>Beluga Pure Black Pepper Garbled 550+ GL</option>
              <option>Desiccated Coconut High Fat (25kg Multiwall Kraft Bags)</option>
            </select>
          </div>

          <div>
            <label className="block text-stone-700 font-bold mb-1">Target Volume & Incoterms (FOB Cochin / CIF)</label>
            <textarea
              rows={3}
              value={volumeAndTerms}
              onChange={e => setVolumeAndTerms(e.target.value)}
              placeholder="Specify estimated tonnage, target delivery date, destination sea port..."
              className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-emerald-600"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={closeB2BModal}
              className="px-4 py-2.5 rounded-xl text-stone-500 hover:text-stone-900 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md cursor-pointer transition"
            >
              Submit Export Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
