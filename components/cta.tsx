'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-sky-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Ready for a Spotless Home?
        </h2>
        <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
          Get your free, no-obligation estimate today. Experience the difference of a professional, personalized clean.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-full hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Request Free Estimate
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
