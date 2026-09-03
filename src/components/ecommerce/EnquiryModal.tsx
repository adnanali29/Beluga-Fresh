'use client';

import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { X, CheckCircle, Send } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const {
    cart,
    isEnquiryOpen,
    closeEnquiryModal,
    submitEnquiry,
    confirmedEnquiryId
  } = useStore();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isEnquiryOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEnquiry({
      fullName,
      phone,
      email,
      message
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white border border-stone-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-left my-8 text-stone-900">
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedEnquiryId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-[#072655] flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle className="w-10 h-10 text-[#072655]" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">Enquiry Submitted!</h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
              Thank you! Our Kerala sales desk will review your inquiry and contact you via WhatsApp / Email within 2 hours.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-mono text-[#072655] font-bold">
              Enquiry Ref: {confirmedEnquiryId}
            </div>
            <button
              onClick={closeEnquiryModal}
              className="bg-[#072655] hover:bg-[#0b3574] text-white font-bold px-6 py-3 rounded-xl text-xs cursor-pointer shadow-md transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-stone-200 pb-4 mb-4">
              <h3 className="text-xl font-black text-stone-900">Send Price & Availability Enquiry</h3>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your details below. No upfront payment required!
              </p>
            </div>

            {/* Selected Items summary */}
            {cart.length > 0 && (
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 mb-4 text-xs">
                <p className="font-bold text-stone-800 mb-1">Items in your inquiry ({cart.length}):</p>
                <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex justify-between text-stone-600 text-[11px]">
                      <span className="truncate max-w-[260px]">{item.product.name} (x{item.quantity})</span>
                      <span className="font-semibold text-[#072655]">{item.product.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-700 mb-1 font-semibold">Your Full Name</label>
                <input
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Aditi Menon"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-[#072655]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 mb-1 font-semibold">Phone / WhatsApp</label>
                  <input
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98470 XXXXX"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-[#072655]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 mb-1 font-semibold">Email Address</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="aditi@example.com"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-[#072655]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 mb-1 font-semibold">Message / Specific Requirements (Optional)</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Specify quantity requirements, bulk packing preference, or location..."
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-2.5 text-stone-900 outline-none focus:border-[#072655]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#072655] hover:bg-[#0b3574] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry Now</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
