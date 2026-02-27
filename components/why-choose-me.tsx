'use client';

import { CheckCircle2 } from 'lucide-react';

const features = [
  '16+ Years Experience',
  'Trusted by Manhattan Families',
  'Personalized Service',
  'Satisfaction Guarantee',
  'Free Estimates',
  'Attention to Detail',
  'Pet Friendly',
  'Reliable & Punctual',
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Why Clients Trust My Work
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I understand that inviting someone into your home requires trust. That&apos;s why I&apos;ve built my business on reliability, consistency, and personal care. I don&apos;t just clean; I care for your home.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-sky-400 h-5 w-5 shrink-0" />
                    <span className="text-slate-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center">
                <h3 className="text-white font-heading font-bold text-2xl mb-2">Satisfaction Guaranteed</h3>
                <p className="text-slate-300 mb-6">
                  If you&apos;re not 100% satisfied with the service, let me know within 24 hours and I&apos;ll come back to fix it.
                </p>
                <a href="#contact" className="inline-block w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-sky-50 transition-colors">
                  Book with Confidence
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
