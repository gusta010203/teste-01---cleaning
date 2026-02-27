'use client';

import { MapPin } from 'lucide-react';

const areas = [
  'Uptown',
  'Midtown',
  'Downtown',
  'West Village',
  'Upper East Side',
  'Upper West Side',
  'Tribeca',
  'SoHo',
  'Chelsea',
  'Brooklyn (Upon Request)',
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Service Areas</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-10">
          Proudly Serving Manhattan
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 font-medium hover:border-sky-200 hover:text-sky-600 transition-colors cursor-default"
            >
              <MapPin size={16} className="text-sky-500" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
