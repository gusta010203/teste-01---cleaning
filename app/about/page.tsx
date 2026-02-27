'use client';

import Navbar from '@/components/navbar';
import About from '@/components/about';
import WhyChooseMe from '@/components/why-choose-me';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Ana Rosa</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional cleaning services with a personal touch.
          </p>
        </div>
      </div>
      <About />
      <WhyChooseMe />
      <Footer />
    </main>
  );
}
