'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Regular Cleaning',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you! Your request has been received. I will contact you shortly.');
    setFormState({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Regular Cleaning',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-6">
              Request Your Free Estimate
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to experience a cleaner home? Fill out the form, and I&apos;ll get back to you as soon as possible to discuss your needs and provide a free quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-sm text-slate-500">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600">hello@anarosacleaning.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Location</h4>
                  <p className="text-slate-600">Manhattan, NY</p>
                  <p className="text-sm text-slate-500">Serving all major neighborhoods</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formState.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                >
                  <option>Regular Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move-In / Move-Out</option>
                  <option>Office Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white resize-none"
                  placeholder="Tell me a bit about your home and what you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2"
              >
                Request My Free Estimate
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
