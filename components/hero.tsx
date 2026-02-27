'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-sky-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Serving Manhattan & NYC
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Trusted Home Cleaning in Manhattan
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              16+ years of experience you can rely on. Personalized, detailed, and reliable cleaning services tailored to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300 transform hover:-translate-y-0.5"
              >
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-full transition-all"
              >
                View Services
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-sky-500 h-5 w-5" />
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-sky-500 h-5 w-5" />
                <span>16+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="https://picsum.photos/seed/cleaner_woman_bright_hero/800/1000"
                alt="Professional cleaner in a bright Manhattan apartment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-800 font-medium text-sm italic">
                &quot;Ana is incredible. My apartment has never looked this good!&quot;
              </p>
              <p className="text-slate-500 text-xs mt-2 font-semibold uppercase tracking-wider">
                — Sarah J., Upper West Side
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
