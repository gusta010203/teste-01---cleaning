'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import WhyChooseMe from '@/components/why-choose-me';
import Testimonials from '@/components/testimonials';
import CallToAction from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
